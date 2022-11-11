import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

// components
import App from "./App";
const hello = "Hello World";

const newHello = document.getElementsByClassName("hello");
test("", () => {
  render(<App />);
  const linkElement = screen.getByText(hello); // the argument 'Hello World' is regular exp where it is case insensitive and could be string
  expect(linkElement).toBeInTheDocument();

  //* Better line
  expect(screen.getByText(hello)).toBeInTheDocument();
  expect(hello.textContent);
});
