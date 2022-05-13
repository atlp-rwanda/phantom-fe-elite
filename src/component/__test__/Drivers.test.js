import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import UpdateDriver from "../../views/Driver/CreateDriver";
import { render, screen, fireEvent,  waitFor, getByTitle, getByRole } from "@testing-library/react";
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import { async } from "regenerator-runtime";



describe('Displayed how Look at Dashboard of Admin to Add Driver Information',()=>{
    it('It should display the header of page',()=>{
        const{ getByText}= render(
            <Router>
                <UpdateDriver/>
            </Router>
        );
        const headingelements = screen.getByTestId("head")
        expect(headingelements).toBeVisible
    })
    it('It should display the table name of column of page',()=>{
        const{ getByText}= render(
            <Router>
                <UpdateDriver/>
            </Router>
        );
        const linkElement = getByText("No");
    expect(linkElement).toBeInTheDocument();
    });
    it('',()=>{
     const{ getByText} =  render(
            <Router>
            <UpdateDriver/>
        </Router>
        )
        const tresy = getByText("Name");
        expect(tresy).toBeInTheDocument();
    });
    
})

describe('',()=>{
    it('should see if the input is visible to the user', () => {
        render(
        <Router>
            <UpdateDriver />
        </Router>
        );
        const input = screen.getByTitle("input");
        expect(input).toBeVisible
    });
    it('should see if the input is visible to the user', () => {
        render(  <Router>
            <UpdateDriver />
        </Router>);
        const button = screen.getByTitle("button");
        expect(button).toBeVisible
    });
});

describe("AddInput", () => {
    it("render email input", async () => {
      await act(async () => {
        render(
          <Router>
            <UpdateDriver />
          </Router>
        );
      });
      const inputEl = screen.getByPlaceholderText(/Search/i);
   
      await waitFor(() => {
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "text");
      });
    });
   
     it("should accepts username input value more than 3 character", async () => {
       await act(async () => {
         render(
           <Router>
             <UpdateDriver />
           </Router>
         );
       });
       const inputEl = screen.getByPlaceholderText("Search");
       fireEvent.click(inputEl);
       fireEvent.change(inputEl, { target: { value: "kati" } });
   
       await waitFor(() => {
         expect(inputEl.value).toBe("kati");
       });
     });
   
   });