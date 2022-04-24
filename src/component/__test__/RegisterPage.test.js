import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterPage from "../RegisterPage";

describe("<RegisterPage />", () => {
  it("render email input", () => {
    render(<RegisterPage />);
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });

  test("pass valid email to test email input field", () => {
    render(<RegisterPage />);

    const inputEl = screen.getByTestId("email-input");
    fireEvent.change(inputEl, { target: { value: "test@mail.com" } });

    expect(inputEl.value).toBe("test@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });

  it("render input username", () => {
    render(<RegisterPage />);
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    render(<RegisterPage />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should accepts username inputs more than 3 character", () => {
    render(<RegisterPage />);
    const inputEl = screen.getByPlaceholderText("Username");
    fireEvent.change(inputEl, { target: { value: "kati" } });

    expect(inputEl.value).toBe("kati");
    expect(inputEl.value.length).toBeGreaterThan(3);
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
  it("should accepts password inputs more than 3 character", () => {
    render(<RegisterPage />);
    const inputEl = screen.getByPlaceholderText("Password");
    fireEvent.change(inputEl, { target: { value: "kati12" } });

    expect(inputEl.value).toBe("kati12");
    expect(inputEl.value.length).toBeGreaterThan(3);
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });

  //   it("pass invalid email to test email input field", async () => {
  //     render(<RegisterPage />);

  //     const inputEl = screen.getByTestId("email-input");
  //     fireEvent.change(inputEl, { target: { value: "test" } });

  //     expect(inputEl.value).toBe("test");
  //     fireEvent.blur(inputEl.value);

  //     expect(screen.queryByRole("error-msg")).toHaveTextContent(
  //       "Invalid email address"
  //     );
  //   });

  it("should accepts username inputs more than 3 character", () => {
    render(<RegisterPage />);
    const errorMessageNode = screen.queryByTestId("error-msg");
    const inputEl = screen.getByPlaceholderText("Username");

    expect(inputEl).toHaveValue("");
    expect(inputEl.value.length).toEqual(0);
    expect(errorMessageNode).textContent.toBe("Username is required");
  });
});
