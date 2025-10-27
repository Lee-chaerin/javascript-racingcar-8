import { Console, Random } from "@woowacourse/mission-utils";

export function racing(cars, count) {
  const SCORE = new Array(cars.length).fill(0);

  for (let round = 0; round < count; round++) {
    playRound(SCORE, cars);
    Console.print(SCORE);
  }
}

function playRound(score, cars) {
  for (let carIndex = 0; carIndex < cars.length; carIndex++) {
    updateScore(score, carIndex);
  }
}

function updateScore(score, index) {
  if (moveCheck()) {
    score[index]++;
  }
}

function moveCheck() {
  const RANDOM_VALUE = Random.pickNumberInRange(0, 9);
  return RANDOM_VALUE >= 4;
}
