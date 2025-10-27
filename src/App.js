import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constant/input.js";
import { validateCars, validateCount } from "./utils/validation.js";
import { racing } from "./utils/racing.js";

class App {
  async run() {
    try {
      const carsInput = await Console.readLineAsync(INPUT_MESSAGE.CARS);
      const cars = carsInput.split(",").map((car) => car.trim());
      validateCars(cars);

      const countInput = await Console.readLineAsync(INPUT_MESSAGE.COUNT);
      const count = parseInt(countInput);
      validateCount(countInput, count);

      racing(cars, count);
    } catch (error) {
      Console.print(error.message);
      return;
    }
  }
}

export default App;
