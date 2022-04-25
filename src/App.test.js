import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import InputForm from "./Routes/InputForm";
import AboutPage from "./Routes/AboutPage";
import Reset from "./Routes/Reset";

describe("display on landing page", () => {
  test("renders learn react link", () => {
    const { getByText } = render(<InputForm />);
    const linkElement = getByText("HELLO FROM Login Form");
    expect(linkElement).toBeInTheDocument();
  });
  test('renders on about page',() => {
    const { getByText } = render(<AboutPage />);
    const linkElement = getByText("HELLO FROM ABOUT PAGE !!!");
    expect(linkElement).toBeInTheDocument()
  })
  it('renders on Reset page',() => {
    const { getByText } = render(<Reset />);
    const linkElement = getByText("RESET PASSWORD");
    expect(linkElement).toBeInTheDocument()
  })
});
describe("Reset page uses to rest password", () => {
  it("render email input", () => {
    render(<Reset />);
    const inputEl = screen.getByTestId("emailInput");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });
  it("If you use invalid email can  not work", () => {
    render(<Reset />);

    const inputEl = screen.getByTestId("emailInput");
    fireEvent.change(inputEl, { target: { value: "example@mail.com" } });

    expect(inputEl.value).toBe("example@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
  it("Should get a submit button", () => {
    render(<Reset />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
//add screen
//try to test all function

