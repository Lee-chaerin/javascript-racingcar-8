import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constant/input.js";
import { validateCars, validateCount } from "./utils/validation.js";
import { racing } from "./utils/racing.js";

class App {
  async run() {
    try {
      const CARS_INPUT = await Console.readLineAsync(INPUT_MESSAGE.CARS);
      const CARS = CARS_INPUT.split(",").map((car) => car.trim());
      validateCars(CARS);

      const COUNT_INPUT = await Console.readLineAsync(INPUT_MESSAGE.COUNT);
      const COUNT = parseInt(COUNT_INPUT);
      validateCount(COUNT_INPUT, COUNT);

      racing(CARS, COUNT);
    } catch (error) {
      Console.print(error.message);
      return;
    }
  }
}

export default App;
