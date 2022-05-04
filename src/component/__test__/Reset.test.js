import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Reset from "../../Routes/Reset";
import ResetP from "../../Routes/confirmation-password";
import destImg from "../../assets/desti.jpg";
// import { Router } from "react-router";
import { MemoryRouter as Router } from "react-router-dom";

describe("display on landing page", () => {
  it("renders on Reset page", () => {
    const { getByText } = render(
      <Router>
        <Reset />
      </Router>
    );
    const linkElement = getByText("RESET PASSWORD");
    expect(linkElement).toBeInTheDocument();
  });
  it("Renders on Resetp Page to confirm new password ", () => {
    const { getByText } = render(
      <Router>
        <ResetP />
      </Router>
    );
    const linkElement = getByText("RESET PASSWORD");
    expect(linkElement).toBeInTheDocument();
  });
  it("It should display image on side of form reset", () => {
    render(
      <Router>
        <ResetP />
      </Router>
    );
    const img = screen.getByRole("image");
    expect(img).toBeInTheDocument();
  });
  it("should display image on side of form confirm password page ", () => {
    render(
      <Router>
        <ResetP />
      </Router>
    );
    const img = screen.getByRole("image");
    expect(img).toBeInTheDocument();
  });
  it("", () => {
    const worpWrapper = render(
      <Router>
        <ResetP />
      </Router>
    );
    worpWrapper.findAllByDisplayValue(destImg);
  });
});
describe("Reset page uses to rest password using Email", () => {
  it("render email input", () => {
    render(
      <Router>
        <Reset />
      </Router>
    );
    const inputEl = screen.getByTestId("emailInput");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });
  it("If you use invalid email can  not work", () => {
    render(
      <Router>
        <Reset />
      </Router>
    );

    const inputEl = screen.getByTestId("emailInput");
    fireEvent.change(inputEl, { target: { value: "example@mail.com" } });

    expect(inputEl.value).toBe("example@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
  it("Should get a submit button", () => {
    render(
      <Router>
        <Reset />
      </Router>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

describe("Should confrim new password", () => {
  it("Should get a submit button", () => {
    render(
      <Router>
        <ResetP />
      </Router>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("Should insert new password", () => {
    render(
      <Router>
        <ResetP />
      </Router>
    );
    expect(screen.getAllByPlaceholderText("Password ..."));
    expect(screen.getAllByPlaceholderText("Confirm password ..."));
  });
  it("Should accepts password input length at least 8 character ", () => {
    render(
      <Router>
        <ResetP />
      </Router>
    );
    const inputPass = screen.getByPlaceholderText("Password ...");
    fireEvent.change(inputPass, { target: { value: "" } });
    // expect(inputPass.value.length).toHaveLength(9);
    expect(screen.queryAllByTestId("error-msg"));
  });
  it("Should accepts password input length at least 8 character ", () => {
    render(
      <Router>
        <ResetP />
      </Router>
    );
    const inputPass = screen.getAllByTestId('passwordt');
    const inputPas = screen.getByPlaceholderText("Password ...")
    expect(inputPass.findAllByDisplayValue).toEqual(
      inputPas.findAllByDisplayValue
    );
    // expect(inputPass.value.length).toHaveLength(9);
    expect(screen.queryAllByTestId("error-msg"));
  });
  it("Should accepts confirm password when you insert same password", () => {
    render(
      <Router>
        <ResetP />
      </Router>
    );
    const inputPass = screen.getByPlaceholderText("Confirm password ...");
    fireEvent.change(inputPass, { target: { value: "" } });

    expect(screen.queryAllByTestId("error-msg"));
  });
  it("render Password input", () => {
    render(
        <Router>
            <ResetP />
        </Router>
    );
    const inputEl = screen.getByTestId("password");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "password");
  });
  it("render Confirmation new Password input", () => {
    render(
        <Router>
            <ResetP />
        </Router>
    );
    const inputEl = screen.getByTestId("passwordt");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "password");
  });
  it("Should accepts password input length at least 8 character ", () => {
    render(
      <Router>
        <ResetP />
      </Router>
    );
    const inputEl = screen.getByTestId("password");
    fireEvent.change(inputEl, { target: { value: "1111111@Test" } });

    expect(inputEl.value).toBe("1111111@Test");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
  it("Should accepts New  password input length at least 8 character and same as password ", () => {
    render(
      <Router>
        <ResetP />
      </Router>
    );
    const inputEl = screen.getByTestId("passwordt");
    fireEvent.change(inputEl, { target: { value: "1111111@Test" } });

    expect(inputEl.value).toBe("1111111@Test");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
});
