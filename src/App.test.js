import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("display on landing page", () => {
  it("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/contact us| login/i);
    expect(linkElement).toBeInTheDocument();
  });
});
