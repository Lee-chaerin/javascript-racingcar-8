export const EXCEPTION_CASE = [
  { input: ["", "5"], reason: "자동차 이름이 공백인 경우" },
  { input: ["pobi, woniii", "5"], reason: "자동차 이름이 5자를 초과한 경우" },
  { input: ["pobi,pobi", "5"], reason: "자동차 이름이 중복인 경우" },
  { input: ["pobi,woni,jun", ""], reason: "횟수가 공백인 경우" },
  { input: ["pobi,woni,jun", "0"], reason: "횟수가 0 이하인 경우 - 0" },
  { input: ["pobi,woni,jun", "-1"], reason: "횟수가 0 이하인 경우 - 음수" },
  { input: ["pobi,woni,jun", "nan"], reason: "횟수가 숫자가 아닌 경우 - 문자열" },
  { input: ["pobi,woni,jun", ";"], reason: "횟수가 숫자가 아닌 경우 - 특수문자" },
];
