import { ERROR_MESSAGE } from "../constant/error.js";

export function validateCars(cars) {
  if (cars.some((car) => car === "")) {
    throw new Error(ERROR_MESSAGE.CAR_NAME_EMPTY);
  }

  if (cars.some((car) => car.length > 5)) {
    throw new Error(ERROR_MESSAGE.CAR_NAME_OVER);
  }

  if (new Set(cars).size !== cars.length) {
    throw new Error(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
  }
}

export function validateCount(input, count) {
  if (input.trim() === "") {
    throw new Error(ERROR_MESSAGE.COUNT_EMPTY);
  }

  if (count <= 0) {
    throw new Error(ERROR_MESSAGE.COUNT_NOT_POSITIVE);
  }

  if (isNaN(count)) {
    throw new Error(ERROR_MESSAGE.COUNT_NOT_NUMBER);
  }
}
