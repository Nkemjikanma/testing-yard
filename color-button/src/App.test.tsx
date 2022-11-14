import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/dom"; //* for debuggins
import { describe, it } from "vitest";

// components
import App from "./App";

// functions
import { replaceCamelWithSpace } from "./App";

test("Button has correct initial color, and updates when clicked", () => {
  //* Using logRoles to find what roles in the app are
  const { container } = render(<App />);
  //logRoles(container);

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
  const { container } = render(<App />);
  logRoles(container);

  const colorButton = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");
  //? Getting checkbox by labelText
  const checkBoxLabel = screen.getByLabelText("Disable Button");

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBoxLabel);
  expect(colorButton).toBeEnabled();
});

test("Flow 1 - disable button, button grey. enable button, button red", () => {
  render(<App />);

  const colorButton = screen.getByRole("button");
  const checkBox = screen.getByLabelText("Disable Button");

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({
    backgroundColor: "gray",
  });

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({
    backgroundColor: "red",
  });
});

test("Flow 2 - change color, disable button, button gray", () => {
  render(<App />);

  const colorButton = screen.getByRole("button");
  const checkBox = screen.getByLabelText("Disable Button");

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({
    background: "blue",
  });

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({
    backgroundColor: "gray",
  });

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({
    backgroundColor: "blue",
  });
});

describe("Adding spaces to camel case strings", () => {
  test("works for color names without inner capital letters", () => {
    expect(replaceCamelWithSpace("red")).toBe("red");
  });
  test("Works for colors names with one inner capital letter", () => {
    expect(replaceCamelWithSpace("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpace("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
