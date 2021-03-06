const cards = [
  {
    value: "๐",
    flipped: false,
    id: 1,
  },
  {
    value: "๐",
    flipped: false,
    id: 2,
  },
  {
    value: "๐ช",
    flipped: false,
    id: 3,
  },
  {
    value: "โฐ๏ธ",
    flipped: false,
    id: 4,
  },
  {
    value: "โฐ๏ธ",
    flipped: false,
    id: 5,
  },
  {
    value: "๐",
    flipped: false,
    id: 6,
  },
  {
    value: "๐",
    flipped: false,
    id: 7,
  },
  {
    value: "๐บ",
    flipped: false,
    id: 8,
  },
  {
    value: "๐บ",
    flipped: false,
    id: 9,
  },
  {
    value: "๐ฅฐ",
    matched: false,
    flipped: false,
    id: 10,
  },
  {
    value: "๐ฅฐ",
    flipped: false,
    id: 11,
  },
  {
    value: "๐ถ",
    flipped: false,
    id: 12,
  },
  {
    value: "๐งถ",
    flipped: false,
    id: 13,
  },
  {
    value: "๐ฐ๐ท",
    flipped: false,
    id: 14,
  },
  {
    value: "๐ฉ๐ปโ๐ป",
    flipped: false,
    id: 15,
  },
  {
    value: "๐ฐ๐ท",
    flipped: false,
    id: 16,
  },
  {
    value: "๐ถ",
    flipped: false,
    id: 17,
  },
  {
    value: "๐งถ",
    flipped: false,
    id: 18,
  },
  {
    value: "๐ฉ๐ปโ๐ป",
    flipped: false,
    id: 19,
  },
  {
    value: "๐ช",
    flipped: false,
    id: 20,
  },
];

// This shuffles the cards every time.
export default () => cards.sort(() => Math.random() - 0.5);
