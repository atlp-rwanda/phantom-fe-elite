import React from 'react'
import BusRoutedata from '../BusRoutedata';
import MapView from '../MapView';
import Topview from '../Topview';
import Footer from "../../../component/dash/Footer"
import AdminView from '../AdminView';
import MobileHeader from '../../../component/dash/MobileHeader';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

jest.spyOn(console, "error").mockImplementation(()=>{});

describe('visibility of Bus , Routes Data elements', () => {
    it('should see if the input is visible to the user', () => {
        render(<BusRoutedata />);
        const BusTitle = screen.getByTitle("Bus , Routes Data");
        expect(BusTitle).toBeVisible
    });
    it('should see if the input is visible to the user', () => {
        render(<BusRoutedata />);
        const input2 = screen.getByText("Task");
        expect(input2).toBeVisible
    });
    it('should see if the input is visible to the user', () => {
        render(<BusRoutedata />);
        const input2 = screen.getByText("Task");
        expect(input2).toBeVisible
    });
    it('should see if the input is visible to the user', () => {
        render(<BusRoutedata />);
        const input2 = screen.getByText("Bus No");
        expect(input2).toBeVisible
    });
    it('should see if the input is visible to the user', () => {
        render(<BusRoutedata />);
        const input2 = screen.getByText("Seats");
        expect(input2).toBeVisible
    });
    it('should see if the input is visible to the user', () => {
        render(<BusRoutedata />);
        const input2 = screen.getByText("Routes");
        expect(input2).toBeVisible
    });
    it('should see if the input is visible to the user', () => {
        render(<BusRoutedata />);
        const input2 = screen.getByText("Drivers");
        expect(input2).toBeVisible
    });
    it('should see if the input is visible to the user', () => {
        render(<BusRoutedata />);
        const input2 = screen.getByText("Current Status");
        expect(input2).toBeVisible
    });
    it('should see if the input is visible to the user', () => {
        render(<BusRoutedata />);
        const input2 = screen.getByText("ETA");
        expect(input2).toBeVisible
    });
});
describe('show component MapView in the document', () => {
    it("should render something which is not in react page",  () => {
        render(<MapView title="MapView"/>);
        const headingelement = screen.queryByTestId("Map")
        expect(headingelement).toBeVisible
    });
    it("should render something which is not in react page",  () => {
        render(<MapView />);
        const headingelement = screen.queryByTestId("google-map-script")
        expect(headingelement).toBeVisible
    });
   
});
describe('what are in the document', () => {
    it("should render something which is not in react page",  () => {
        render(<Topview title=""/>);
        const headingelement = screen.queryByTestId("Topview")
        expect(headingelement).toBeVisible
    });
   
});
 describe('the MobileHeader in the document', () => {
    it("should render something which in react page",  () => {
        render(<MobileHeader title=""/>);
        const headingelement = screen.queryByTestId("header")
        expect(headingelement).toBeVisible
    });
});
describe('the AdminView in the document', () => {
    it("should render something which in react page",  () => {
        render(<Footer title=""/>);
        const headingelement = screen.queryByTestId("footer")
        expect(headingelement).toBeVisible
    });
    it("should render something which in react page",  () => {
        render(<Footer title=""/>);
        const headingelement = screen.queryByTestId("footer")
        expect(headingelement).not.toBeInTheDocument();
    });  
});
describe('the AdminView in the document', () => {
    it("should render something which in react page",  () => {
        render(<AdminView title=""/>);
        const headingelement = screen.queryByTestId("admin")
        expect(headingelement).toBeInTheDocument();
    });
    it("should render something which in react page", async () => {
        render(<AdminView title="mobile"/>);
        const headingelement = await screen.queryAllByAltText("Map overview")
        expect(headingelement).not.toBeInTheDocument();
    });  
});

describe('the AdminView in the document', () => {
    it("should render something which in react page",  () => {
        render(<AdminView title=""/>);
        const headingelement = screen.queryByTestId("admin")
        expect(headingelement).toBeInTheDocument();
    }); 
});
