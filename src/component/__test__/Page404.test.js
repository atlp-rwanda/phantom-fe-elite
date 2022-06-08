import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import PageNotFound from "../../views/PageNotFound";

jest.spyOn(console, 'error').getMockImplementation(()=>{});

describe("rendering of the page not found page", () => {
  test("It should display the 404 page and page not found message", () => {
    render(<PageNotFound />);
  });


  test("It should display NavBar components", () => {
    render(<App />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
  
  test("It should display footer components", () => {
    render(<App />);
    const footer = screen.getByRole("footer");
    expect(footer).toBeInTheDocument();
  });

});
