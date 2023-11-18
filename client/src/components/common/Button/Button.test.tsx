import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("render button", () => {
  render(<Button name='Test' />);
  const expectedResult = screen.getByText("Test");
  expect(expectedResult);
});
