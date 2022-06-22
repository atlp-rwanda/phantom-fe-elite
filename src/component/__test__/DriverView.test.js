import { getByTestId, render } from "@testing-library/react";
import React from "react";
import DriverView from "../../views/Driver/DriverView";
import { MemoryRouter as Router } from "react-router-dom";


describe("",()=>{
    it("renders on Reset page", () => {
        const { getByText } = render(
            <Router>

                <DriverView />
            </Router>
         
        );
        const linkElement = getByText("Simulate Bus Motion");
        expect(linkElement).toBeInTheDocument();
      });
})