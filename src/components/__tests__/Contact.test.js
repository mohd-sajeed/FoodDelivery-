import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  test("Should load Contact Us Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact Component", () => {
    render(<Contact />);

    //Quering
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length);

    expect(inputBoxes.length).toBe(2);
  });
});
