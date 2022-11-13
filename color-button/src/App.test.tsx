import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/dom"; //* for debuggins
import { describe, it } from "vitest";

// components
import App from "./App";

test("Button has correct initial color, and updates when clicked", () => {
  //* Using logRoles to find what roles in the app are
  const { container } = render(<App />);
  logRoles(container);

  //* We are getting element with role of button and initial text of "Change to Blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //* Expect button's bg to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  //* Handle click events using fireEvent and expect bg of blue
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  //* expect the text has changed
  expect(colorButton).toHaveTextContent("Change to red");
});

test("Check initial conditions", () => {
  render(<App />);

  //? Check that the button starts enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled;

  //? Check that the checkbox starts out unchecked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("Check enables button on first click and disables button on second", () => {
  render(<App />);

  const colorButton = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
});
