import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import App from "./App";
import FooterBlock from "../src/component/footer-and-nav-template/FooterBlock"

describe("display on landing page", () => {
  test("renders learn react link", () => {
    const { getByText } = render(<App />);
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

//test footer 

describe("render footer block",()=>{
  test("should check if the footer is available",()=>{
    const {getByText}=render(<FooterBlock/>);

  });
  it("should check if the footer block has subtitle ",()=>{
    render(<FooterBlock/>);
    const checkSubTitle=screen.getByText("Partners");
    expect(checkSubTitle).toBeInTheDocument();
  });
})
