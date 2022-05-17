import React from 'react'
import BusRoutedata from '../../views/admin/BusRoutedata'
import MapView from '../../views/admin/MapView'
import AboutPage from '../../Routes/AboutPage'
import Header from "../dash/Header"
import Topview from '../../views/admin/Topview'
// import AdminView from '../../views/admin/AdminView'
// import Footer from "../../component/dash/Footer"
// import MobileHeader from '../../component/dash/MobileHeader';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// jest.spyOn(console, "error").mockImplementation(()=>{});

// describe('visibility of Bus , Routes Data elements', () => {
//     it('should see if the input is visible to the user', () => {
//         render(<BusRoutedata />);
//         const BusTitle = screen.getByTitle("Bus , Routes Data");
//         expect(BusTitle).toBeVisible
//     });
//     it('should see if the input is visible to the user', () => {
//         render(<BusRoutedata />);
//         const input2 = screen.getByText("Task");
//         expect(input2).toBeVisible
//     });
//     it('should see if the input is visible to the user', () => {
//         render(<BusRoutedata />);
//         const input2 = screen.getByText("Task");
//         expect(input2).toBeVisible
//     });
//     it('should see if the input is visible to the user', () => {
//         render(<BusRoutedata />);
//         const input2 = screen.getByText("Bus No");
//         expect(input2).toBeVisible
//     });
//     it('should see if the input is visible to the user', () => {
//         render(<BusRoutedata />);
//         const input2 = screen.getByText("Seats");
//         expect(input2).toBeVisible
//     });
//     it('should see if the input is visible to the user', () => {
//         render(<BusRoutedata />);
//         const input2 = screen.getByText("Routes");
//         expect(input2).toBeVisible
//     });
//     it('should see if the input is visible to the user', () => {
//         render(<BusRoutedata />);
//         const input2 = screen.getByText("Drivers");
//         expect(input2).toBeVisible
//     });
//     it('should see if the input is visible to the user', () => {
//         render(<BusRoutedata />);
//         const input2 = screen.getByText("Current Status");
//         expect(input2).toBeVisible
//     });
//     it('should see if the input is visible to the user', () => {
//         render(<BusRoutedata />);
//         const input2 = screen.getByText("ETA");
//         expect(input2).toBeVisible
//     });
// });
// describe('show component MapView in the document', () => {
//     it("should render something which is not in react page",  () => {
//         render(<MapView title="MapView"/>);
//         const headingelement = screen.queryByTestId("Map")
//         expect(headingelement).toBeVisible
//     });
//     it("should render something which is not in react page",  () => {
//         render(<MapView />);
//         const headingelement = screen.queryByTestId("google-map-script")
//         expect(headingelement).toBeVisible
//     });
   
// });
// describe("It should render Header in the document ",()=>{
//     it("should check if the elementa are available in the document ",()=>{
//         render(<Header />);
//         const checkText=screen.getByText("EN");
//         expect(checkText).toBeVisible;
//     })
//     it("should check if the elementa are available in the document ",()=>{
//         render(<Header />);
//         const checkText1=screen.getByText("Andela Rwanda");
//         expect(checkText1).toBeVisible;
//         const checkText2=screen.getByText("User");
//         expect(checkText2).toBeVisible;
//     })

// })



// describe("It should render Header in the document ",()=>{
//     it("should check if the elementa are available in the document ",()=>{
//         render(<Header />);
//         const checkText=screen.getByText("EN");
//         expect(checkText).toBeVisible;
//     })

// })

// describe("It should render Header in the document ",()=>{
//     it("should check if the elementa are available in the document ",()=>{
//         render(<Topview />);
//         const checkText=screen.getByText("Router");
//         expect(checkText).toBeVisible;
//     })

// })
