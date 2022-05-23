import React from "react";
import { render, screen } from "@testing-library/react";
import MapView from "../MapView.js";

describe("check if use see the element  ",()=>{
    it("it should check if text buses is in the document",()=>{
        render(<MapView />);
        const element = screen.getByTitle("mapview");
        expect(element).toBeInTheDocument();
    })
})