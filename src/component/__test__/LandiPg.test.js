import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./../../Routes/LandingPage";
import { MemoryRouter as Router } from "react-router-dom";
jest.spyOn(console, 'error').getMockImplementation(()=>{});

describe("rendering of the landing page", () => {
  test("It should display the text of the heading pf the page ", () => {
    render(<Router>
        
        <App />
        </Router>
        );
    const Title = screen.getByText(/Track bus movements/i);
    expect(Title).toBeInTheDocument();
  });

  test("It should display the image on the landing page ", () => {
    render(<Router>
        
        <App />
        </Router>
        );
    const imag = screen.getByRole("image");
    expect(imag).toBeInTheDocument();
  });

  test("It should display NavBar components", () => {
    render(<Router>
        
        <App />
        </Router>);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
  test("It should display footer components", () => {
    render(<Router>
        
        <App />
        </Router>);
    const footer = screen.getByRole("footer");
    expect(footer).toBeInTheDocument();
  });

  test("It should display form on landing page", () => {
    render(<Router>
        <App />
        </Router>);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
});
