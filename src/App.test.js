import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import App from "./App";
import FooterBlock from "../src/component/footer-and-nav-template/FooterBlock"

describe("display on landing page", () => {
  it("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/contact us| login/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('should render if it is available in the document',()=>{
    render(<App title="Login"/>);
    const headingElement = screen.getByText(/sign in/i);
    expect(headingElement).toBeInTheDocument();
});
it('should render if it is available in the document',()=>{
  render(<App title="Login"/>);
  const headingElement = screen.getByText(/sign UP/i);
  expect(headingElement).toBeInTheDocument();
});

it('should contain the Sign in obtion in the landig page',()=>{
  render(<App title="Login"/>);
  const headingElement = screen.queryAllByText(/Sign in/i);
  expect(headingElement).toBeTruthy();
});
it('should render The number of element  passed into title Loggin',async()=>{
      render(<App title="My Login"/>);
      const headingElement = screen.queryAllByText(/Login/i);
      expect(headingElement.length).toBe(0);
  });

  it('should render The number of element  passed into title Loggin',async()=>{
    render(<App title="My Login"/>);
    const headingElement = screen.queryAllByText(/Sign in/i);
    expect(headingElement.length).toEqual(1)
});
it('should render Partners if it is available in the document',()=>{
  render(<App title="Login"/>);
  const headingElement = screen.getByText(/Partners/i);
  expect(headingElement).toBeInTheDocument();
});
it('should render Contact Us if it is available in the document',()=>{
  render(<App title="Login"/>);
  const headingElement = screen.getByText(/Contact Us/i);
  expect(headingElement).toBeInTheDocument();
});
});
