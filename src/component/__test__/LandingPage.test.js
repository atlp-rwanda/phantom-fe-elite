import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "../LandingPage";

describe("display on landing page", () => {
  it("renders learn react link", () => {
    render(<LandingPage />);
    const linkElement = screen.getByText(/Track bus movements/i);
    expect(linkElement).toBeInTheDocument();
  });
});
