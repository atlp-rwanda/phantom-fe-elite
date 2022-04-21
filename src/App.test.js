import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("display on landing page", () => {
  it("Should render footer correctly", () => {
    render(<App />);
    const linkElement = screen.getByText(/contact us| login/i);
    expect(linkElement).toBeInTheDocument();
  });
});
