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
    coordinates: {
      lat: 37.564914230219,
      lng: 126.995681324108,
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
        alt: "Wedding moment 1",
      },
      {
        src: "/gallery/pic2.jpg",
        alt: "Wedding moment 2",
      },
      {
        src: "/gallery/pic3.jpg",
        alt: "Wedding moment 3",
      },
      {
        src: "/gallery/pic4.jpg",
        alt: "Wedding moment 4",
      },
      {
        src: "/gallery/pic5.jpg",
        alt: "Wedding moment 5",
      },
      {
        src: "/gallery/pic6.jpg",
        alt: "Wedding moment 6",
      },
      {
        src: "/gallery/pic7.jpg",
        alt: "Wedding moment 7",
      },
      {
        src: "/gallery/pic8.jpg",
        alt: "Wedding moment 8",
      },
      {
        src: "/gallery/pic10.jpg",
        alt: "Wedding moment 10",
      },
      {
        src: "/gallery/pic11.jpg",
        alt: "Wedding moment 11",
      },
      {
        src: "/gallery/pic12.jpg",
        alt: "Wedding moment 12",
      },
      {
        src: "/gallery/pic13.jpg",
        alt: "Wedding moment 13",
      },
      {
        src: "/gallery/pic14.jpg",
        alt: "Wedding moment 14",
      },
      {
        src: "/gallery/pic15.jpg",
        alt: "Wedding moment 15",
      },
      {
        src: "/gallery/pic16.jpg",
        alt: "Wedding moment 16",
      },
      {
        src: "/gallery/pic17.jpg",
        alt: "Wedding moment 17",
      },
      {
        src: "/gallery/pic18.jpg",
        alt: "Wedding moment 18",
      },
      {
        src: "/gallery/pic19.jpg",
        alt: "Wedding moment 19",
      },
      {
        src: "/gallery/pic20.jpg",
        alt: "Wedding moment 20",
      },
      {
        src: "/gallery/pic21.jpg",
        alt: "Wedding moment 21",
      },
    ],
  },
};
