/** @format */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import { MemoryRouter as Router } from "react-router-dom";
import RouteLines from "../../views/operator/RouteLines";
import NewRouteModal from "../NewRouteModal";
import UpdateRouteModal from "../UpdateRouteModal";


describe("Testing Operator CRUD Routes Page", () => {
	it("should render the heading of the page if it is visible to the user", () => {
		render(
			<Router>
				<RouteLines />
			</Router>
		);
		const headingElements = screen.getByTestId("head1");
		expect(headingElements).toBeVisible;
	});
});
describe("to test the user event on modal", () => {
	
	it("should open Register new Route modal", () => {
		const toggleModal = jest.fn();
		act(() => {
			render(
				<Router>
					<RouteLines toggleModal={toggleModal} />
				</Router>
			);
		});
		const newRoute = screen.getByTestId("newRouteBtn");
		fireEvent.click(newRoute);
	});
	it("should open update Route modal", () => {
		const toggleUpdate = jest.fn();
		act(() => {
			render(
				<Router>
					<RouteLines toggleUpdate={toggleUpdate} />
				</Router>
			);
		});
		const updateRoute = screen.getByTestId("updateRouteBtn");
		fireEvent.click(updateRoute);
	});
});

describe("testing the new Route modal", ()=>{
    it("should close the new route Modal", ()=>{
        const toggleModal = jest.fn();
        act(() => {
			render(
                <NewRouteModal toggleModal={toggleModal} />
                
			);
		});
        const closeSaveModal= screen.getByTestId("backBtn");
		fireEvent.click(closeSaveModal);

        const saveModal= screen.getByTestId("saveBtn");
		fireEvent.click(saveModal);
    })
});


describe("testing the new Route modal", ()=>{
    it("should close the new route Modal", ()=>{
        const toggleUpdate = jest.fn();
        act(() => {
			render(
                <UpdateRouteModal toggleUpdate={toggleUpdate} />
                
			);
		});
        const closeUpdateModal= screen.getByTestId("backBtn");
		fireEvent.click(closeUpdateModal);

        const saveUpdateModal= screen.getByTestId("updateBtn");
		fireEvent.click(saveUpdateModal);
    })
});