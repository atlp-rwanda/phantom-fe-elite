import React from "react";
import { fireEvent, getByPlaceholderText, getByText, render, screen } from "@testing-library/react";
import Login from "../login"

describe("display on Login page", () => {
  it("should check if input email placeholder is Email...", () => {
    render(<Login title="loginPage"/>);
    const headingElement = screen.getByPlaceholderText(/Email.../i);
    expect(headingElement).toBeInTheDocument();
  });
  it("should check if input password placeholder is password...", () => {
    render(<Login title="loginPage"/>);
    const headingElement = screen.getByPlaceholderText(/password.../i);
    expect(headingElement).toBeInTheDocument();
  });
  it("should check return the heading of loginPage", () => {
    render(<Login title="loginPage"/>);
    const loginElement = screen.getByRole(/heading/i);
    expect(loginElement).toBeInTheDocument();
  });
 
  it("should check return if of loginPage", async () => {
    render(<Login title="Login"/>);
    const loginElement = screen.queryByText(/cats/i);
    expect(loginElement).not.toBeInTheDocument();
  });
  it("should check return the the link Reset Password of loginPage", async () => {
    render(<Login title="Login"/>);
    const loginElement = screen.queryByText(/forget password/i);
    expect(loginElement).toBeInTheDocument();
  });
  it("should check return the the link forgot password of loginPage", async () => {
    render(<Login title="Login"/>);
    const loginElement = screen.queryByText(/Reset Password/i);
    expect(loginElement).toBeInTheDocument();
  });
  it("should check if text Don't remember Password? apear in  loginPage", async () => {
    render(<Login title="Login"/>);
    const loginElement = screen.queryByText(/Don't remember Password?/i);
    expect(loginElement).toBeInTheDocument();
  });
 
  it("should check if our Button are available in our loginPage", async () => {
    render(<Login/>);
    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeInTheDocument();
  });

  it("should check if our link called forget password is avilable in our loginPage", async () => {
    render(<Login/>);
    const loginButton = screen.getByRole('link',{name:'Forget Password'});
    expect(loginButton).toBeInTheDocument();
  });
  it("should check if our link called Reset Password is avilable in our loginPage", async () => {
    render(<Login/>);
    const loginButton = screen.getByRole('link',{name:'Reset Password'});
    expect(loginButton).toBeInTheDocument();
  });
  it("should check if the email should recieve the text value", () => {
    render(<Login title="loginPage"/>);
    const headingElement = screen.getByPlaceholderText(/Email.../i);
    expect(headingElement.value).toMatch("");
    fireEvent.change(headingElement,{ target: {value:"testing"}});
    expect(headingElement.value).toMatch("testing");
   });

   it("should che if the password could accept the input text", () => {
    render(<Login title="loginPage"/>);
    const checkPassword = screen.getByPlaceholderText(/password.../i);
    expect(checkPassword.value).toMatch("");
    fireEvent.change(checkPassword,{target: {value:"testingPassword"}});
    expect(checkPassword.value).toMatch("testingPassword");

  });
  it("render email input", () => {
    render(<Login />);
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });
  it("pass valid email to test email input field", () => {
    render(<Login />);

    const inputEl = screen.getByTestId("email-input");
    fireEvent.change(inputEl, { target: { value: "test@mail.com" } });

    expect(inputEl.value).toBe("test@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
  it("should accepts password input value more than 3 character", () => {
    render(<Login />);
    const inputEl = screen.getByPlaceholderText("Password...");
    fireEvent.change(inputEl, { target: { value: "hodal123" } });

    expect(inputEl.value).toBe("hodal123");
    expect(inputEl.value.length).toBeGreaterThan(3);
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
});