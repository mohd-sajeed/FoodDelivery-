import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  // beforeAll(() => {
  //   console.log('Before All');
  // });
  // afterAll(() => {
  //   console.log("after All");
  // });

  // afterEach(() => {
  //   console.log("After Each ");
  // });

  // beforeEach(() => {
  //   console.log('Before Each');
  // });

  test("Should load Contact Us Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    // * Assertion
    expect(button).toBeInTheDocument();
  });

  // * Note: test() or it() both are same
  test("Should load input name inside Component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact Component", () => {
    render(<Contact />);

    //Quering
    const inputBoxes = screen.getAllByRole("textbox"); // getAllByRole - returns multiple elements
    // console.log(inputBoxes.length); // returns jsx element

    // * Assertion
    // expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3); // not here means inverse
  });
});
