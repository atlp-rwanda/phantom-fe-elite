import React from "react";
import { fireEvent, getByPlaceholderText, getByText, render, screen } from "@testing-library/react";
import Register from "../../Routes/RegisterPage"

describe("display on Register page", () => {
  it("should check if input email placeholder is Email...", () => {
    render(<Register title="RegisterPage"/>);
    const headingElement = screen.getByPlaceholderText(/Email.../i);
    expect(headingElement).toBeInTheDocument();
  });
  it("should check if input password placeholder is password...", () => {
    render(<Register title="RegisterPage"/>);
    const headingElement = screen.getByPlaceholderText(/password.../i);
    expect(headingElement).toBeInTheDocument();
  });
  it("should check return the heading of RegisterPage", () => {
    render(<Register title="RegisterPage"/>);
    const RegisterElement = screen.getByRole(/heading/i);
    expect(RegisterElement).toBeInTheDocument();
  });
 
  it("should check return if of RegisterPage", async () => {
    render(<Register title="Register"/>);
    const RegisterElement = screen.queryByText(/cats/i);
    expect(RegisterElement).not.toBeInTheDocument();
  });

  it("should check return the the link forgot password of RegisterPage", async () => {
    render(<Register title="Register"/>);
    const RegisterElement = screen.queryByText(/Reset Password/i);
    expect(RegisterElement).toBeInTheDocument();
  });
 
  it("should check if our Button are available in our RegisterPage", async () => {
    render(<Register/>);
    const RegisterButton = screen.getByRole('button');
    expect(RegisterButton).toBeInTheDocument();
  });

  it("should check if our link called Reset Password is avilable in our RegisterPage", async () => {
    render(<Register/>);
    const RegisterButton = screen.getByRole('link',{name:'Reset Password'});
    expect(RegisterButton).toBeInTheDocument();
  });
  it("should check if the email should recieve the text value", () => {
    render(<Register title="RegisterPage"/>);
    const headingElement = screen.getByPlaceholderText(/Email.../i);
    expect(headingElement.value).toMatch("");
    fireEvent.change(headingElement,{ target: {value:"testing"}});
    expect(headingElement.value).toMatch("testing");
   });

   it("should che if the password could accept the input text", () => {
    render(<Register title="RegisterPage"/>);
    const checkPassword = screen.getByPlaceholderText(/password.../i);
    expect(checkPassword.value).toMatch("");
    fireEvent.change(checkPassword,{target: {value:"testingPassword"}});
    expect(checkPassword.value).toMatch("testingPassword");

  });
  it("render email input", () => {
    render(<Register />);
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });
  it("pass valid email to test email input field", () => {
    render(<Register />);

    const inputEl = screen.getByTestId("email-input");
    fireEvent.change(inputEl, { target: { value: "test@mail.com" } });

    expect(inputEl.value).toBe("test@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
  it("should accepts password input value more than 3 character", () => {
    render(<Register />);
    const inputEl = screen.getByPlaceholderText("Password...");
    fireEvent.change(inputEl, { target: { value: "hodal123" } });

    expect(inputEl.value).toBe("hodal123");
    expect(inputEl.value.length).toBeGreaterThan(3);
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
});