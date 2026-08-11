export const WEDDING_DATA = {
  // 신랑신부 정보
  groom: {
    name: "이지훈",
    phone: "010-7382-1332",
    account: {
      bank: "샘플은행",
      accountNumber: "1234-56-7890123",
      depositor: "이지훈",
    },
    parents: {
      father: {
        name: "이상식",
        // phone: "010-1111-1111"
      },
      mother: {
        name: "김명숙",
        // phone: "010-2222-2222"
      },
    },
  },
  bride: {
    name: "박지수",
    phone: "010-8516-9258",
    account: {
      bank: "샘플은행",
      accountNumber: "9876-54-3210987",
      depositor: "박지수",
    },
    parents: {
      father: {
        name: "박종우",
        //phone: "010-3333-3333",
      },
      mother: {
        name: "이영순",
        //phone: "010-4444-4444",
      },
    },
  },
  parents: {
    groom: {
      father: {
        name: "이상식",
        // phone: "010-1111-1111",
        // account: {
        //     bank: "샘플은행",
        //     accountNumber: "1002-123-456789",
        //     depositor: "김철수"
        // }
      },
      mother: {
        name: "김명숙",
        // phone: "010-2222-2222",
      },
    },
    bride: {
      father: {
        name: "박종우",
        //phone: "010-3333-3333",
        // account: {
        //     bank: "샘플은행",
        //     accountNumber: "123-45-6789012",
        //     depositor: "박상현"
        // }
      },
      mother: {
        name: "이영순",
        //phone: "010-4444-4444",
      },
    },
  },

  // 예식 정보
  date: "2026.12.25 SAT PM 2:00",
  venue: {
    name: "호텔PJ 4층 헤스티아홀",
    address: "서울 중구 마른내로 71",
    phone: "02-2280-7000",
    date: "2026년 11월 08일 일요일 오전11시",
    coordinates: {
      lat: 37.564914230219,
      lng: 126.995681324108,
    },
  },

  // UI 텍스트
  content: {
    navigation: {
      home: "홈",
      intro: "초대합니다",
      venue: "오시는 길",
      transport: "교통안내",
      contact: "연락처",
      gallery: "갤러리",
      menu: "메뉴",
      close: "닫기",
      appTitle: "Wedding Invitation",
    },
    hero: {
      groom: "지훈",
      bride: "지수",
      date: "2026.11.08",
      time: "SUN AM 11:00",
      location: "호텔PJ 4층 헤스티아홀",
    },
    intro: {
      eyebrow: "소중한 분들을 초대합니다",
      title: "INVITATION",
      mainText:
        "서로가 마주보며 다져온 사랑을<br />이제 함께 한 곳을 바라보며<br />걸어갈 수 있는 큰 사랑으로 키우고자 합니다.<br /><br />저희 두 사람이 사랑의 이름으로<br />지켜나갈 수 있게 앞날을<br />축복해 주시면 감사하겠습니다.",
      groomName: "이지훈",
      brideName: "박지수",
      groomParents: "의 장남",
      brideParents: "의 장녀",
      groomLabel: "신랑",
      brideLabel: "신부",
    },
    venue: {
      eyebrow: "Location",
      title: "오시는 길",
      naverMap: "네이버지도",
      kakaoMap: "카카오맵",
    },
    transport: {
      eyebrow: "Transportation",
      title: "교통안내",
      traffic: [
        {
          label: "지하철 이용시",
          desc: "을지로4가역 (2,5호선) 10번 출구에서 도보로 5분 소요<br/>충무로역(3,4호선) 8번 출구에서 도보로 5분 소요",
        },
        {
          label: "버스 이용시",
          desc: "을지로 4가 방면 | 100,105,152,202,261,604,7011<br/>퇴계로 방면 | 104,105,140,463,421,507,604,7011",
        },
        {
          label: "자가용 이용시",
          desc: "을지트윈타워 주차장 이용 가능",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "마음 전하실 곳",
      groomSide: "신랑측",
      brideSide: "신부측",
      call: "전화하기",
      message: "문자하기",
      account: "계좌번호",
      copy: "복사",
      copied: "복사완료",
      depositor: "예금주",
      father: "아버지",
      mother: "어머니",
      accountButton: "축의금 계좌번호",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "우리의 순간",
      close: "닫기",
      photoAlt: "웨딩 사진",
    },
    footer: {
      copyright: "© 2026 Wedding Invitation. All rights reserved.",
    },
  },

  // 이미지
  images: {
    main: "/gallery/mainpic.jpg",
    background: "/gallery/mainpic.jpg",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        alt: "Wedding moment 1",
      },
      {
        src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
        alt: "Wedding moment 2",
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
        alt: "Wedding moment 3",
      },
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
        alt: "Wedding moment 4",
      },
      {
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
        alt: "Wedding moment 5",
      },
      {
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
        alt: "Wedding moment 6",
      },
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        alt: "Wedding moment 7",
      },
      {
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
        alt: "Wedding moment 8",
      },
      {
        src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80",
        alt: "Wedding moment 9",
      },
      {
        src: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80",
        alt: "Wedding moment 10",
      },
      {
        src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
        alt: "Wedding moment 11",
      },
      {
        src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=1200&q=80",
        alt: "Wedding moment 12",
      },
      {
        src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
        alt: "Wedding moment 13",
      },
      {
        src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80",
        alt: "Wedding moment 14",
      },
      {
        src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80",
        alt: "Wedding moment 15",
      },
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
        alt: "Wedding moment 16",
      },
      {
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
        alt: "Wedding moment 17",
      },
      {
        src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200&q=80",
        alt: "Wedding moment 18",
      },
      {
        src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
        alt: "Wedding moment 19",
      },
      {
        src: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80",
        alt: "Wedding moment 20",
      },
      {
        src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1200&q=80",
        alt: "Wedding moment 21",
      },
      {
        src: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800&q=80",
        alt: "Wedding moment 22",
      },
      {
        src: "https://images.unsplash.com/photo-1530047625168-4b29bfbbe1fc?w=800&q=80",
        alt: "Wedding moment 23",
      },
      {
        src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80",
        alt: "Wedding moment 24",
      },
      {
        src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
        alt: "Wedding moment 25",
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
        alt: "Wedding moment 26",
      },
      {
        src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=1200&q=80",
        alt: "Wedding moment 27",
      },
      {
        src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
        alt: "Wedding moment 28",
      },
      {
        src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80",
        alt: "Wedding moment 29",
      },
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80",
        alt: "Wedding moment 30",
      },
    ],
  },
};
