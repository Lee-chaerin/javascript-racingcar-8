import { Console, Random } from "@woowacourse/mission-utils";

export function racing(cars, count) {
  for (let round = 0; round < count; round++) {
    Console.print(moveCheck());
  }
}

function moveCheck() {
  const RANDOM_VALUE = Random.pickNumberInRange(0, 9);
  return RANDOM_VALUE >= 4;
}
