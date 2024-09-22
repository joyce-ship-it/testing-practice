import { calculator } from "./calculator";

test("test for calculator functions", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(1, 2)).toBe(1);
  expect(calculator.divide(1, 2)).toBe(2);
  expect(calculator.multiply(1, 2)).toBe(2);
});
