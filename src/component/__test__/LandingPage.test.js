import React from "react";
import { render, screen } from "@testing-library/react";
import App from '../../App'
import { MemoryRouter as Router } from "react-router-dom";

describe("rendering of the landing page", () => {
  test("It should display the the text of the heading pf the page ", () => {
    render(
      <Router>
        <App/>
      </Router>
      );
    const Title = screen.getByText(/Track bus movements/i);
    expect(Title).toBeInTheDocument();
  });

  test("It should display the image on the landing page ", () => {
    render(
      <Router>
        <App/>
      </Router>
      );
    const imag = screen.getByRole("image");
    expect(imag).toBeInTheDocument();
  });

  test("It should display NavBar components", () => {
    render(
      <Router>
        <App/>
      </Router>
      );
      const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();


  })
  test("It should display footer components", () => {
    render(
      <Router>
        <App/>
      </Router>
      );
    const footer = screen.getByRole("footer");
    expect(footer).toBeInTheDocument();
    });

  test("It should display form on landing page", () => {
    render(
      <Router>
        <App/>
      </Router>
      );
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
      });
    })
import LandingPage from "../LandingPage";
import { Router } from "react-router";

describe("display on landing page", () => {
  it("renders learn react link", () => {
    render(
      <Router>
        <LandingPage />
      </Router>
      );
    const linkElement = screen.getByText(/Track bus movements/i);
    expect(linkElement).toBeInTheDocument();
  });
})
