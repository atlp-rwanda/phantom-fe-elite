import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "./matchMedia.mock";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import Login from "./../../views/login"
jest.spyOn(console, "error").mockImplementation(()=>{});

describe("display on Login page", () => {
  it("should check if input email placeholder is Email...", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const headingElement = screen.getByPlaceholderText(/Email.../i);
    expect(headingElement).toBeInTheDocument();
  });
  it("should check if input password placeholder is password...", () => {
    render(
      <Router>
        <Login title="loginPage" />
      </Router>
    );
    const headingElement = screen.getByPlaceholderText(/password.../i);
    expect(headingElement).toBeInTheDocument();
  });
  it("should check return the heading of loginPage", () => {
    render(
      <Router>
        <Login title="loginPage" />
      </Router>
    );
    const loginElement = screen.getByText("LOGIN");
    expect(loginElement).toBeInTheDocument();
  });

  it("should check return if of loginPage", async () => {
    render(
      <Router>
        <Login title="Login" />
      </Router>
    );
    const loginElement = screen.queryByText(/cats/i);
    expect(loginElement).not.toBeInTheDocument();
  });
  it("should check return the the link Reset Password of loginPage", async () => {
    render(
      <Router>
        <Login title="Login" />
      </Router>
    );
    const loginElement = screen.queryByText(/forget password/i);
    expect(loginElement).toBeInTheDocument();
  });
  it("should check return the the link forgot password of loginPage", async () => {
    render(
      <Router>
        <Login title="Login" />
      </Router>
    );
    const loginElement = screen.queryByText(/Reset Password/i);
    expect(loginElement).toBeInTheDocument();
  });
  it("should check if text Don't remember Password? apear in  loginPage", async () => {
    render(
      <Router>
        <Login title="Login" />
      </Router>
    );
    const loginElement = screen.queryByText(/Don't remember Password?/i);
    expect(loginElement).toBeInTheDocument();
  });

  it("should check if our Button are available in our loginPage", async () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
  });

  it("should check if our link called forget password is avilable in our loginPage", async () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const loginButton = screen.getByRole("link", { name: "Forget Password" });
    expect(loginButton).toBeInTheDocument();
  });
  it("should check if our link called Reset Password is avilable in our loginPage", async () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const loginButton = screen.getByRole("link", { name: "Reset Password" });
    expect(loginButton).toBeInTheDocument();
  });
  it("should check if the email should recieve the text value", () => {
    render(
      <Router>
        <Login title="loginPage" />
      </Router>
    );
    const headingElement = screen.getByPlaceholderText(/Email.../i);
    expect(headingElement.value).toMatch("");
    fireEvent.change(headingElement, { target: { value: "testing" } });
    expect(headingElement.value).toMatch("testing");
  });

  it("should che if the password could accept the input text", () => {
    render(
      <Router>
        <Login title="loginPage" />
      </Router>
    );
    const checkPassword = screen.getByPlaceholderText(/password.../i);
    expect(checkPassword.value).toMatch("");
    fireEvent.change(checkPassword, { target: { value: "testingPassword" } });
    expect(checkPassword.value).toMatch("testingPassword");
  });
  it("render email input", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });
  it("pass valid email to test email input field", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    const inputEl = screen.getByTestId("email-input");
    fireEvent.change(inputEl, { target: { value: "test@mail.com" } });

    expect(inputEl.value).toBe("test@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
  it("should accepts password input value more than 3 character", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const inputEl = screen.getByPlaceholderText("Password...");
    fireEvent.change(inputEl, { target: { value: "hodal123" } });

    expect(inputEl.value).toBe("hodal123");
    expect(inputEl.value.length).toBeGreaterThan(3);
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
  it("Test form submit and validation", async () => {
    const handleSubmit = jest.fn();
    render(
      <Router>
        <Login onSubmit={handleSubmit} />
      </Router>
    );

    // const user = userEvent.setup();
    // await user.type(screen.getByTestId("email-input"), "rachel@blbla.com");
    // await user.type(screen.getByTestId("password-input"), "N#@!Pass");

    // await user.click(screen.getByTestId("submit-form"));

    // await waitFor(() =>
    //   expect(handleSubmit).toHaveBeenNthCalledWith({
    //     email: "rachel@blbla.com",
    //     password: "N#@!Pass",
    //   })
    // );
  });
});
