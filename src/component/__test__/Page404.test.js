import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import PageNotFound from "../../views/PageNotFound";

jest.spyOn(console, 'error').getMockImplementation(()=>{});

describe("rendering of the page not found page", () => {
  test("It should display the 404 page and page not found message", () => {
    render(<PageNotFound />);
    let Page404 = PageNotFound()
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0.yRQYnWzskCZUxPwaQupWkiUzKELZ49eM7oWxAQK_ZXw"
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
