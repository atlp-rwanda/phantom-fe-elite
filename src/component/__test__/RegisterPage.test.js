import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  getByRole,
  getByTestId,
  getByText,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import RegisterPage from "../RegisterPage";

describe("<RegisterPage />", () => {
  it("render email input", () => {
    render(<RegisterPage />);
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });

  it("pass valid email to test email input field", () => {
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

  it("should accepts username input value more than 3 character", () => {
    render(<RegisterPage />);
    const inputEl = screen.getByPlaceholderText("Username");
    fireEvent.change(inputEl, { target: { value: "kati" } });

    expect(inputEl.value).toBe("kati");
    expect(inputEl.value.length).toBeGreaterThan(3);
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
  it("should accepts password input value more than 3 character", () => {
    render(<RegisterPage />);
    const inputEl = screen.getByPlaceholderText("Password");
    fireEvent.change(inputEl, { target: { value: "kati12" } });

    expect(inputEl.value).toBe("kati12");
    expect(inputEl.value.length).toBeGreaterThan(3);
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });

  it("should validate form", async () => {
    const handleSubmit = jest.fn();
    await act(async () => {
      render(<RegisterPage onSubmit={handleSubmit} />);
    });
    const user = userEvent.setup();

    const email = screen.getByTestId("email-input");
    const username = screen.getByTestId("username-input");
    const password = screen.getByTestId("password-input");

    user.click(screen.getByTestId("submit-form"));

    fireEvent.blur(email);
    fireEvent.blur(username);
    fireEvent.blur(password);

    await waitFor(() => {
      expect(screen.getByText("Email is Required")).toBeInTheDocument();
      expect(screen.getByText("Username is Required")).toBeInTheDocument();
      expect(screen.getByText("password is Required")).toBeInTheDocument();
    });
  });

  it("Test form submit and validation", async () => {
    const onSubmit = jest.fn();
    render(<RegisterPage handleSubmit={onSubmit} />);

    const user = userEvent.setup();

    await user.type(screen.getByTestId("email-input"), "rachel@blbla.com");
    await user.type(screen.getByTestId("username-input"), "Rachel");
    await user.type(screen.getByTestId("password-input"), "N#@!Pass");

    await user.click(screen.getByTestId("submit-form"));

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        email: "rachel@blbla.com",
        username: "Rachel",
        password: "N#@!Pass",
      })
    );
  });
});
