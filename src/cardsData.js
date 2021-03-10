const cards = [
  {
    value: "💍",
    flipped: false,
    id: 1,
  },
  {
    value: "💍",
    flipped: false,
    id: 2,
  },
  {
    value: "🍪",
    flipped: false,
    id: 3,
  },
  {
    value: "⛰️",
    flipped: false,
    id: 4,
  },
  {
    value: "⛰️",
    flipped: false,
    id: 5,
  },
  {
    value: "🌏",
    flipped: false,
    id: 6,
  },
  {
    value: "🌏",
    flipped: false,
    id: 7,
  },
  {
    value: "🌺",
    flipped: false,
    id: 8,
  },
  {
    value: "🌺",
    flipped: false,
    id: 9,
  },
  {
    value: "🥰",
    matched: false,
    flipped: false,
    id: 10,
  },
  {
    value: "🥰",
    flipped: false,
    id: 11,
  },
  {
    value: "🐶",
    flipped: false,
    id: 12,
  },
  {
    value: "🧶",
    flipped: false,
    id: 13,
  },
  {
    value: "🇰🇷",
    flipped: false,
    id: 14,
  },
  {
    value: "👩🏻‍💻",
    flipped: false,
    id: 15,
  },
  {
    value: "🇰🇷",
    flipped: false,
    id: 16,
  },
  {
    value: "🐶",
    flipped: false,
    id: 17,
  },
  {
    value: "🧶",
    flipped: false,
    id: 18,
  },
  {
    value: "👩🏻‍💻",
    flipped: false,
    id: 19,
  },
  {
    value: "🍪",
    flipped: false,
    id: 20,
  },
];

// This shuffles the cards every time.
export default cards.sort(() => Math.random() - 0.5);
