import { getByTestId, render } from "@testing-library/react";
import React from "react";
import AboutTest from "../../views/AboutPage";


describe("",()=>{
    it("renders on Reset page", () => {
        const { getByText } = render(
            <AboutTest />
         
        );
        const linkElement = getByText("HELLO FROM ABOUT PAGE !!!");
        expect(linkElement).toBeInTheDocument();
      });
})