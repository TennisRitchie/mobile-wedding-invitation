export const WEDDING_DATA = {
  // 신랑신부 정보
  groom: {
    name: "이지훈",
    phone: "010-7382-1332",
    parents: {
      father: {
        name: "이상식",
      },
      mother: {
        name: "김명숙",
      },
    },
  },
  bride: {
    name: "박지수",
    phone: "010-8516-9258",
    parents: {
      father: {
        name: "박종우",
      },
      mother: {
        name: "이영순",
      },
    },
  },
  // 예식 정보
  date: "2026-11-08", // YYYY-MM-DD (달력/디데이 계산에 사용)
  time: { hour: 11, minute: 0 },
  venue: {
    name: "호텔PJ",
    hall: "4층 헤스티아홀",
    address: "서울 중구 마른내로 71",
    phone: "02-2280-7000",
    sketchImage: "/gallery/venue-sketch.jpg",
    // 호텔PJ 건물 중심 (OpenStreetMap 기준) — 기존 좌표보다 약 9m 남쪽
    coordinates: {
      lat: 37.564836,
      lng: 126.995716,
    },
  },

  // UI 텍스트
  content: {
    hero: {
      groom: "이지훈",
      bride: "박지수",
      dateNumeric: "2026 / 11 / 08",
      dateLine: "2026년 11월 8일 일요일 오전 11시",
      location: "호텔PJ 4층 헤스티아홀",
    },
    intro: {
      title: "소중한 분들을 초대합니다",
      mainText:
        "2019년 가을, 연인이 된 순간부터<br />일곱 번의 사계절을 함께 보냈습니다.<br /><br />평생 좋은 친구로,<br />사랑하는 연인으로<br />서로 아껴주고 사랑하며 살겠습니다.<br /><br />앞으로 함께 나아갈 수많은 계절,<br />저희 두 사람 결혼합니다.<br />새로운 시작을 축복해 주시면 감사하겠습니다.",
      groomOrder: "장남",
      brideOrder: "장녀",
      groomLabel: "신랑",
      brideLabel: "신부",
    },
    calendar: {
      title: "예식 일시",
      ddayText: "지수, 지훈의 결혼식이 {dday}일 남았습니다.",
      ddayToday: "지수, 지훈의 결혼식 날입니다.",
      ddayPast: "지수, 지훈의 결혼식이 {dday}일 지났습니다.",
      weekdays: ["일", "월", "화", "수", "목", "금", "토"],
    },
    venue: {
      title: "오시는 길",
      naverMap: "네이버지도",
      kakaoMap: "카카오맵",
      sketchMap: "약도 보기",
      copyAddress: "주소 복사",
      addressCopied: "주소가 복사되었습니다",
    },
    transport: {
      traffic: [
        {
          label: "지하철",
          lines: [
            {
              color: "#00A84D",
              subway: [2, 5], // 을지로4가역 경유 호선
              text: "을지로4가역 | 10번 출구에서 도보로 5분 소요",
            },
            {
              color: "#EF7C1C",
              subway: [3, 4], // 충무로역 경유 호선
              text: "충무로역 | 8번 출구에서 도보로 5분 소요",
            },
          ],
        },
        {
          label: "버스",
          lines: [
            {
              color: "#0d347f",
              text: "을지로 4가 방면 | 100, 105, 152, 202, 261, 604, 7011",
            },
            {
              color: "#3b9f37",
              text: "퇴계로 방면 | 104, 105, 140, 421, 463, 507, 604, 7011",
            },
          ],
        },
        {
          label: "셔틀버스",
          lines: [
            {
              color: "#33a23d",
              text: "을지로4가역 (2, 5호선) | 9번 출구로 나온 후 GS25(편의점) 골목에서 탑승",
            },
            {
              color: "#ef7c1c",
              text: "충무로역 (3, 4호선) | 8번 출구에서 탑승",
            },
          ],
          extra:
            "예식 1시간 전부터 10~15분 간격으로 운행하며, 운영시간 및 간격은 상황에 따라 변동될 수 있습니다.",
        },
        {
          label: "주차",
          lines: [],
          extra: "을지트윈타워 지하주차장(B5~B6) / 2시간 무료 주차",
        },
      ],
    },
    contact: {
      title: "마음 전하실 곳",
      description:
        "참석이 어려우신 분들을 위해<br />계좌번호를 기재하였습니다.<br />너그러운 마음으로 양해 부탁드립니다.",
      groomSide: "신랑측",
      brideSide: "신부측",
      copied: "복사되었습니다.",
      father: "아버지",
      mother: "어머니",
    },
    gallery: {
      title: "웨딩 갤러리",
      more: "더보기",
      close: "닫기",
      photoAlt: "웨딩 사진",
      initialCount: 6, // 더보기 전 표시 장수
    },
    ending: {
      ment: "잘 살겠습니다.",
    },
    share: {
      eyebrow: "Share",
      title: "소식 전하기",
      description:
        "저희의 새로운 시작을<br />소중한 분들께 전해주세요.",
      button: "카카오톡으로 전하기",
    },
    footer: {
      copyright: "© 2026 Wedding Invitation. All rights reserved.",
    },
  },

  // 이미지
  images: {
    main: "/gallery/main.jpg",
    ending: "/gallery/mainpic.jpg",
    gallery: [
      {
        src: "/gallery/pic1.jpg",
        thumb: "/gallery/thumbs/pic1.jpg",
        alt: "Wedding moment 1",
      },
      {
        src: "/gallery/pic2.jpg",
        thumb: "/gallery/thumbs/pic2.jpg",
        alt: "Wedding moment 2",
      },
      {
        src: "/gallery/pic3.jpg",
        thumb: "/gallery/thumbs/pic3.jpg",
        alt: "Wedding moment 3",
      },
      {
        src: "/gallery/pic4.jpg",
        thumb: "/gallery/thumbs/pic4.jpg",
        alt: "Wedding moment 4",
      },
      {
        src: "/gallery/pic5.jpg",
        thumb: "/gallery/thumbs/pic5.jpg",
        alt: "Wedding moment 5",
      },
      {
        src: "/gallery/pic6.jpg",
        thumb: "/gallery/thumbs/pic6.jpg",
        alt: "Wedding moment 6",
      },
      {
        src: "/gallery/pic7.jpg",
        thumb: "/gallery/thumbs/pic7.jpg",
        alt: "Wedding moment 7",
      },
      {
        src: "/gallery/pic8.jpg",
        thumb: "/gallery/thumbs/pic8.jpg",
        alt: "Wedding moment 8",
      },
      {
        src: "/gallery/pic10.jpg",
        thumb: "/gallery/thumbs/pic10.jpg",
        alt: "Wedding moment 10",
      },
      {
        src: "/gallery/pic11.jpg",
        thumb: "/gallery/thumbs/pic11.jpg",
        alt: "Wedding moment 11",
      },
      {
        src: "/gallery/pic12.jpg",
        thumb: "/gallery/thumbs/pic12.jpg",
        alt: "Wedding moment 12",
      },
      {
        src: "/gallery/pic13.jpg",
        thumb: "/gallery/thumbs/pic13.jpg",
        alt: "Wedding moment 13",
      },
      {
        src: "/gallery/pic14.jpg",
        thumb: "/gallery/thumbs/pic14.jpg",
        alt: "Wedding moment 14",
      },
      {
        src: "/gallery/pic15.jpg",
        thumb: "/gallery/thumbs/pic15.jpg",
        alt: "Wedding moment 15",
      },
      {
        src: "/gallery/pic16.jpg",
        thumb: "/gallery/thumbs/pic16.jpg",
        alt: "Wedding moment 16",
      },
      {
        src: "/gallery/pic17.jpg",
        thumb: "/gallery/thumbs/pic17.jpg",
        alt: "Wedding moment 17",
      },
      {
        src: "/gallery/pic18.jpg",
        thumb: "/gallery/thumbs/pic18.jpg",
        alt: "Wedding moment 18",
      },
      {
        src: "/gallery/pic19.jpg",
        thumb: "/gallery/thumbs/pic19.jpg",
        alt: "Wedding moment 19",
      },
      {
        src: "/gallery/pic20.jpg",
        thumb: "/gallery/thumbs/pic20.jpg",
        alt: "Wedding moment 20",
      },
      {
        src: "/gallery/pic21.jpg",
        thumb: "/gallery/thumbs/pic21.jpg",
        alt: "Wedding moment 21",
      },
      {
        src: "/gallery/g01.jpg",
        thumb: "/gallery/thumbs/g01.jpg",
        alt: "Wedding moment 22",
      },
      {
        src: "/gallery/g02.jpg",
        thumb: "/gallery/thumbs/g02.jpg",
        alt: "Wedding moment 23",
      },
      {
        src: "/gallery/g03.jpg",
        thumb: "/gallery/thumbs/g03.jpg",
        alt: "Wedding moment 24",
      },
      {
        src: "/gallery/g04.jpg",
        thumb: "/gallery/thumbs/g04.jpg",
        alt: "Wedding moment 25",
      },
      {
        src: "/gallery/g05.jpg",
        thumb: "/gallery/thumbs/g05.jpg",
        alt: "Wedding moment 26",
      },
      {
        src: "/gallery/g06.jpg",
        thumb: "/gallery/thumbs/g06.jpg",
        alt: "Wedding moment 27",
      },
      {
        src: "/gallery/g07.jpg",
        thumb: "/gallery/thumbs/g07.jpg",
        alt: "Wedding moment 28",
      },
      {
        src: "/gallery/g08.jpg",
        thumb: "/gallery/thumbs/g08.jpg",
        alt: "Wedding moment 29",
      },
      {
        src: "/gallery/g09.jpg",
        thumb: "/gallery/thumbs/g09.jpg",
        alt: "Wedding moment 30",
      },
      {
        src: "/gallery/g10.jpg",
        thumb: "/gallery/thumbs/g10.jpg",
        alt: "Wedding moment 31",
      },
      {
        src: "/gallery/g11.jpg",
        thumb: "/gallery/thumbs/g11.jpg",
        alt: "Wedding moment 32",
      },
      {
        src: "/gallery/g12.jpg",
        thumb: "/gallery/thumbs/g12.jpg",
        alt: "Wedding moment 33",
      },
      {
        src: "/gallery/g13.jpg",
        thumb: "/gallery/thumbs/g13.jpg",
        alt: "Wedding moment 34",
      },
      {
        src: "/gallery/g14.jpg",
        thumb: "/gallery/thumbs/g14.jpg",
        alt: "Wedding moment 35",
      },
      {
        src: "/gallery/g15.jpg",
        thumb: "/gallery/thumbs/g15.jpg",
        alt: "Wedding moment 36",
      },
      {
        src: "/gallery/g16.jpg",
        thumb: "/gallery/thumbs/g16.jpg",
        alt: "Wedding moment 37",
      },
      {
        src: "/gallery/g17.jpg",
        thumb: "/gallery/thumbs/g17.jpg",
        alt: "Wedding moment 38",
      },
      {
        src: "/gallery/g18.jpg",
        thumb: "/gallery/thumbs/g18.jpg",
        alt: "Wedding moment 39",
      },
      {
        src: "/gallery/g19.jpg",
        thumb: "/gallery/thumbs/g19.jpg",
        alt: "Wedding moment 40",
      },
      {
        src: "/gallery/g20.jpg",
        thumb: "/gallery/thumbs/g20.jpg",
        alt: "Wedding moment 41",
      },
      {
        src: "/gallery/g21.jpg",
        thumb: "/gallery/thumbs/g21.jpg",
        alt: "Wedding moment 42",
      },
      {
        src: "/gallery/g22.jpg",
        thumb: "/gallery/thumbs/g22.jpg",
        alt: "Wedding moment 43",
      },
      {
        src: "/gallery/g23.jpg",
        thumb: "/gallery/thumbs/g23.jpg",
        alt: "Wedding moment 44",
      },
      {
        src: "/gallery/g24.jpg",
        thumb: "/gallery/thumbs/g24.jpg",
        alt: "Wedding moment 45",
      },
      {
        src: "/gallery/g25.jpg",
        thumb: "/gallery/thumbs/g25.jpg",
        alt: "Wedding moment 46",
      },
      {
        src: "/gallery/g26.jpg",
        thumb: "/gallery/thumbs/g26.jpg",
        alt: "Wedding moment 47",
      },
      {
        src: "/gallery/g27.jpg",
        thumb: "/gallery/thumbs/g27.jpg",
        alt: "Wedding moment 48",
      },
      {
        src: "/gallery/g28.jpg",
        thumb: "/gallery/thumbs/g28.jpg",
        alt: "Wedding moment 49",
      },
      {
        src: "/gallery/g29.jpg",
        thumb: "/gallery/thumbs/g29.jpg",
        alt: "Wedding moment 50",
      },
      {
        src: "/gallery/g30.jpg",
        thumb: "/gallery/thumbs/g30.jpg",
        alt: "Wedding moment 51",
      },
      {
        src: "/gallery/g31.jpg",
        thumb: "/gallery/thumbs/g31.jpg",
        alt: "Wedding moment 52",
      },
      {
        src: "/gallery/g32.jpg",
        thumb: "/gallery/thumbs/g32.jpg",
        alt: "Wedding moment 53",
      },
      {
        src: "/gallery/g33.jpg",
        thumb: "/gallery/thumbs/g33.jpg",
        alt: "Wedding moment 54",
      },
      {
        src: "/gallery/g34.jpg",
        thumb: "/gallery/thumbs/g34.jpg",
        alt: "Wedding moment 55",
      },
      {
        src: "/gallery/g35.jpg",
        thumb: "/gallery/thumbs/g35.jpg",
        alt: "Wedding moment 56",
      },
      {
        src: "/gallery/g36.jpg",
        thumb: "/gallery/thumbs/g36.jpg",
        alt: "Wedding moment 57",
      },
      {
        src: "/gallery/g37.jpg",
        thumb: "/gallery/thumbs/g37.jpg",
        alt: "Wedding moment 58",
      },
      {
        src: "/gallery/g38.jpg",
        thumb: "/gallery/thumbs/g38.jpg",
        alt: "Wedding moment 59",
      },
      {
        src: "/gallery/g39.jpg",
        thumb: "/gallery/thumbs/g39.jpg",
        alt: "Wedding moment 60",
      },
      {
        src: "/gallery/g40.jpg",
        thumb: "/gallery/thumbs/g40.jpg",
        alt: "Wedding moment 61",
      },
      {
        src: "/gallery/g41.jpg",
        thumb: "/gallery/thumbs/g41.jpg",
        alt: "Wedding moment 62",
      },
      {
        src: "/gallery/g42.jpg",
        thumb: "/gallery/thumbs/g42.jpg",
        alt: "Wedding moment 63",
      },
      {
        src: "/gallery/g43.jpg",
        thumb: "/gallery/thumbs/g43.jpg",
        alt: "Wedding moment 64",
      },
      {
        src: "/gallery/g44.jpg",
        thumb: "/gallery/thumbs/g44.jpg",
        alt: "Wedding moment 65",
      },
      {
        src: "/gallery/g45.jpg",
        thumb: "/gallery/thumbs/g45.jpg",
        alt: "Wedding moment 66",
      },
      {
        src: "/gallery/g46.jpg",
        thumb: "/gallery/thumbs/g46.jpg",
        alt: "Wedding moment 67",
      },
      {
        src: "/gallery/g47.jpg",
        thumb: "/gallery/thumbs/g47.jpg",
        alt: "Wedding moment 68",
      },
      {
        src: "/gallery/g48.jpg",
        thumb: "/gallery/thumbs/g48.jpg",
        alt: "Wedding moment 69",
      },
      {
        src: "/gallery/g49.jpg",
        thumb: "/gallery/thumbs/g49.jpg",
        alt: "Wedding moment 70",
      },
      {
        src: "/gallery/g50.jpg",
        thumb: "/gallery/thumbs/g50.jpg",
        alt: "Wedding moment 71",
      },
      {
        src: "/gallery/g51.jpg",
        thumb: "/gallery/thumbs/g51.jpg",
        alt: "Wedding moment 72",
      },
      {
        src: "/gallery/g52.jpg",
        thumb: "/gallery/thumbs/g52.jpg",
        alt: "Wedding moment 73",
      },
      {
        src: "/gallery/g53.jpg",
        thumb: "/gallery/thumbs/g53.jpg",
        alt: "Wedding moment 74",
      },
      {
        src: "/gallery/g54.jpg",
        thumb: "/gallery/thumbs/g54.jpg",
        alt: "Wedding moment 75",
      },
      {
        src: "/gallery/g55.jpg",
        thumb: "/gallery/thumbs/g55.jpg",
        alt: "Wedding moment 76",
      },
      {
        src: "/gallery/g56.jpg",
        thumb: "/gallery/thumbs/g56.jpg",
        alt: "Wedding moment 77",
      },
      {
        src: "/gallery/g57.jpg",
        thumb: "/gallery/thumbs/g57.jpg",
        alt: "Wedding moment 78",
      },
      {
        src: "/gallery/g58.jpg",
        thumb: "/gallery/thumbs/g58.jpg",
        alt: "Wedding moment 79",
      },
      {
        src: "/gallery/g59.jpg",
        thumb: "/gallery/thumbs/g59.jpg",
        alt: "Wedding moment 80",
      },
      {
        src: "/gallery/g60.jpg",
        thumb: "/gallery/thumbs/g60.jpg",
        alt: "Wedding moment 81",
      },
      {
        src: "/gallery/g61.jpg",
        thumb: "/gallery/thumbs/g61.jpg",
        alt: "Wedding moment 82",
      },
      {
        src: "/gallery/g62.jpg",
        thumb: "/gallery/thumbs/g62.jpg",
        alt: "Wedding moment 83",
      },
      {
        src: "/gallery/g63.jpg",
        thumb: "/gallery/thumbs/g63.jpg",
        alt: "Wedding moment 84",
      },
      {
        src: "/gallery/g64.jpg",
        thumb: "/gallery/thumbs/g64.jpg",
        alt: "Wedding moment 85",
      },
      {
        src: "/gallery/g65.jpg",
        thumb: "/gallery/thumbs/g65.jpg",
        alt: "Wedding moment 86",
      },
      {
        src: "/gallery/g66.jpg",
        thumb: "/gallery/thumbs/g66.jpg",
        alt: "Wedding moment 87",
      },
      {
        src: "/gallery/g67.jpg",
        thumb: "/gallery/thumbs/g67.jpg",
        alt: "Wedding moment 88",
      },
      {
        src: "/gallery/g68.jpg",
        thumb: "/gallery/thumbs/g68.jpg",
        alt: "Wedding moment 89",
      },
      {
        src: "/gallery/g69.jpg",
        thumb: "/gallery/thumbs/g69.jpg",
        alt: "Wedding moment 90",
      },
      {
        src: "/gallery/g70.jpg",
        thumb: "/gallery/thumbs/g70.jpg",
        alt: "Wedding moment 91",
      },
      {
        src: "/gallery/g71.jpg",
        thumb: "/gallery/thumbs/g71.jpg",
        alt: "Wedding moment 92",
      },
      {
        src: "/gallery/g72.jpg",
        thumb: "/gallery/thumbs/g72.jpg",
        alt: "Wedding moment 93",
      },
      {
        src: "/gallery/g73.jpg",
        thumb: "/gallery/thumbs/g73.jpg",
        alt: "Wedding moment 94",
      },
      {
        src: "/gallery/g74.jpg",
        thumb: "/gallery/thumbs/g74.jpg",
        alt: "Wedding moment 95",
      },
    ],
  },
};
