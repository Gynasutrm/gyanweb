export const EXAM = {
  QUESTION_STATUS_1: [
    { id: 1, title: "Answered", color: "#31B203", data: 0 },
    { id: 2, title: "Not Answered", color: "#CD3805", data: 0 },
    { id: 3, title: "Not Verified", color: "#565656", data: 10 },
    { id: 4, title: "Marked for Review", color: "#674786", data: 6 },
  ],
  QUESTION_STATUS: {
    notVerified: "Not Verifyed",
    answered: "Answered",
    reviewed: "Marked for Review",
    notAnswered: "Not Answered",
  },
  QUESTION_STATUS_COLOR: {
    notVerified: "#565656",
    answered: "#31B203",
    reviewed: "#674786",
    notAnswered: "#CD3805",
    0: "#565656",
    1: "#CD3805",
    2: "#674786",
    3: "#31B203",
  },
  QUESTION_OPTION_RESPONSE: {
    0: "1",
    1: "2",
    2: "3",
    3: "4",
    4: "5",
    5: "6",
  },
};
