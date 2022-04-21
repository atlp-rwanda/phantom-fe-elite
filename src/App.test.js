import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import InputForm from "./Routes/InputForm";
import AboutPage from "./Routes/AboutPage";
import Home from "./Routes/Home";
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
  test('renders on Reset page',() => {
    const { getByText } = render(<Reset />);
    const linkElement = getByText("RESET PASSWORD");
    expect(linkElement).toBeInTheDocument()
  })
});

//add screen
//try to test all function
