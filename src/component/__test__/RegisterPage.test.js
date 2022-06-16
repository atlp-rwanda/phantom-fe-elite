import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import RegisterPage from "../../views/RegisterPage";
import { MemoryRouter as Router } from "react-router-dom";
import { async } from "regenerator-runtime";

jest.spyOn(console, "error").mockImplementation(()=>{});

describe("<RegisterPage />", () => {
  it("render email input", async () => {
    await act(async () => {
      render(
        <Router>
          <RegisterPage />
        </Router>
      );
    });
    const inputEl = screen.getByTestId("email-input");

    await waitFor(() => {
      expect(inputEl).toBeInTheDocument();
      expect(inputEl).toHaveAttribute("type", "email");
    });
  });

  it("pass valid email to test email input field", async () => {
    await act(async () => {
      render(
        <Router>
          <RegisterPage />
        </Router>
      );
    });
    const inputEl = screen.getByTestId("email-input");
    fireEvent.change(inputEl, { target: { value: "test@mail.com" } });

    await waitFor(() => {
      expect(inputEl.value).toBe("test@mail.com");
      expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });
  });

  it("render input username", async () => {
    await act(async () => {
      render(
        <Router>
          <RegisterPage />
        </Router>
      );
    });

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Username...")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Password...")).toBeInTheDocument();
    });
  });

  it("renders a create operator button", async () => {
    await act(async () => {
      render(
        <Router>
          <RegisterPage />
        </Router>
      );
    });

    await waitFor(() => {
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });
  it("should accepts username input value more than 3 character", async () => {
    await act(async () => {
      render(
        <Router>
          <RegisterPage />
        </Router>
      );
    });
    const inputEl = screen.getByPlaceholderText("Username...");
    fireEvent.change(inputEl, { target: { value: "kati" } });

    await waitFor(() => {
      expect(inputEl.value).toBe("kati");
      expect(inputEl.value.length).toBeGreaterThan(3);
      expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });
  });
  it("should accepts password input value more than 3 character", async () => {
    await act(async () => {
      render(
        <Router>
          <RegisterPage />
        </Router>
      );
    });

    const inputEl = screen.getByPlaceholderText("Password...");
    fireEvent.change(inputEl, { target: { value: "kati12" } });

    await waitFor(() => {
      expect(inputEl.value).toBe("kati12");
      expect(inputEl.value.length).toBeGreaterThan(3);
      expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });
  });
});