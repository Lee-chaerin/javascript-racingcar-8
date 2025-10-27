import { Console, Random } from "@woowacourse/mission-utils";

export function racing(cars, count) {
  const score = new Array(cars.length).fill(0);
  Console.print("실행 결과");

  for (let round = 0; round < count; round++) {
    playRound(score, cars);
    Console.print("");
  }

  const winner = getWinner(score, cars);
  Console.print(winner);
}

function playRound(score, cars) {
  for (let carIndex = 0; carIndex < cars.length; carIndex++) {
    updateScore(score, carIndex);

    const progressBar = "-".repeat(score[carIndex]);
    Console.print(`${cars[carIndex]} : ${progressBar}`);
  }
}

function updateScore(score, index) {
  if (moveCheck()) {
    score[index]++;
  }
}

function moveCheck() {
  const randomValue = Random.pickNumberInRange(0, 9);
  return randomValue >= 4;
}

function getWinner(score, cars) {
  const maxScore = Math.max(...score);
  const winner = cars.filter((_, index) => score[index] === maxScore);

  return winner;
}
