import { getByTestId, render } from "@testing-library/react";
import React from "react";
import DriverView from "../../views/Driver/DriverView";


describe("",()=>{
    it("renders on Reset page", () => {
        const { getByText } = render(
            <DriverView />
         
        );
        const linkElement = getByText("Simulate Bus Motion");
        expect(linkElement).toBeInTheDocument();
      });
})