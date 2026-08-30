/**
 * 관리자 페이지(/tacocat) 저장용 로컬 서버.
 *
 * 이 프로젝트는 next.config.ts 에서 output: "export" (정적 내보내기)라
 * Next.js API Route 를 쓸 수 없다. 그래서 로컬에서만 도는 작은 저장 서버를 따로 둔다.
 *
 *   npm run admin        # next dev + 이 서버를 함께 실행
 *
 * 배포된 정적 사이트에는 이 서버가 없으므로, 관리자 페이지는 그때는
 * "JSON 내려받기"로만 동작한다(보기 전용).
 */
import { createServer } from "node:http";
import { writeFile, readFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const TARGET = resolve(ROOT, "data/gallery.json");
const PORT = Number(process.env.GALLERY_ADMIN_PORT ?? 4747);

// 로컬 전용 도구이므로 localhost 에서 온 요청만 받는다.
const ALLOWED = new Set([
  "http://localhost:3000",
  "http://localhost:3001",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:3001",
]);

const cors = (req, res) => {
  const origin = req.headers.origin;
  if (origin && ALLOWED.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
};

const isValid = (items) =>
  Array.isArray(items) &&
  items.length > 0 &&
  items.every(
    (i) =>
      i &&
      typeof i.src === "string" &&
      i.src.startsWith("/gallery/") &&
      (i.thumb === undefined || typeof i.thumb === "string") &&
      (i.alt === undefined || typeof i.alt === "string") &&
      (i.hidden === undefined || typeof i.hidden === "boolean")
  );

createServer(async (req, res) => {
  cors(req, res);
  if (req.method === "OPTIONS") return res.writeHead(204).end();

  if (req.method === "GET" && req.url === "/gallery") {
    const body = await readFile(TARGET, "utf8");
    res.writeHead(200, { "Content-Type": "application/json" }).end(body);
    return;
  }

  if (req.method === "POST" && req.url === "/gallery") {
    let raw = "";
    req.on("data", (c) => {
      raw += c;
      if (raw.length > 5_000_000) req.destroy();
    });
    req.on("end", async () => {
      try {
        const items = JSON.parse(raw);
        if (!isValid(items)) throw new Error("형식이 올바르지 않습니다");
        await writeFile(TARGET, JSON.stringify(items, null, 2) + "\n", "utf8");
        console.log(
          `[gallery] 저장 ${items.length}장 (숨김 ${items.filter((i) => i.hidden).length}장)`
        );
        res
          .writeHead(200, { "Content-Type": "application/json" })
          .end(JSON.stringify({ ok: true, count: items.length }));
      } catch (e) {
        res
          .writeHead(400, { "Content-Type": "application/json" })
          .end(JSON.stringify({ ok: false, error: String(e.message ?? e) }));
      }
    });
    return;
  }

  res.writeHead(404).end();
}).listen(PORT, "127.0.0.1", () => {
  console.log(`[gallery] 저장 서버 http://localhost:${PORT} -> ${TARGET}`);
});
