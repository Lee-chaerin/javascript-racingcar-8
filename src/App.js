import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const CARS_INPUT = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const CARS = CARS_INPUT.split(',').map(car => car.trim());

    Console.print(CARS);
  }
}

export default App;
