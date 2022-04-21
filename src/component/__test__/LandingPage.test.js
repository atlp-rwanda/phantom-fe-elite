import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "../../Routes/LandingPage";

describe("display on landing page", () => {
  test("It should display the ", () => {
    render(<LandingPage />);
    const linkElement = screen.getByText(/Track bus movements/i);
    expect(linkElement).toBeInTheDocument();
  });
});
