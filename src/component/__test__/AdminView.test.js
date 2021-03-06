import React from "react";
import Topview from "../Topview";
import BusRoutedata from "../BusRoutedata";
import AdminViewLayout from "../layout/AdminViewLayout";
import { render,waitFor, screen } from "@testing-library/react";

describe("should check on Topview component ",()=>{
    it("it should check if text buses is in the document",()=>{
        render(<Topview />);
        const element = screen.getByText("Buses");
        expect(element).toBeInTheDocument();
    })
    it("it should check if text buses is in the document",()=>{
        render(<Topview />);
        const element = screen.getByText("All drivers");
        expect(element).toBeInTheDocument();
    })
})
describe("check if use see the element  ",()=>{
    it("it should check if text buses is in the document",()=>{
        render(<Topview />);
        const element = screen.getByTitle("alltypes");
        expect(element).toBeInTheDocument();
    })
})

describe("should check on BusRoutedata component ",()=>{
    it("it should check if text buses is in the document",()=>{
        render(<BusRoutedata />);
        const element = screen.getByTitle("data");
        expect(element).toBeInTheDocument();
    })
    it("it should check if text buses is in the document",()=>{
        render(<BusRoutedata />);
        const element = screen.getByText("Bus No");
        expect(element).toBeVisible;
    })
    it("it should check if text buses is in the document",()=>{
        render(<BusRoutedata />);
        const element = screen.getByText("ETA");
        expect(element).toBeVisible;
    })
   
  
})


