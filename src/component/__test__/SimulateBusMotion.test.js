/** @format */

import BusMotion from "../../views/Driver/BusMotion";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import { MemoryRouter as Router } from "react-router-dom";

describe("Testing Bus Simulation page", () => {
	it("should render the heading of the page if it visible to the user", () => {
		render(
			<Router>
				<BusMotion />
			</Router>
		);
		const headingelements = screen.getByTestId("head1");
		expect(headingelements).toBeVisible;
	});
});

describe("to test bus motion functions", () => {
	it("should submit new journey and change the form", () => {
		const startJourney = jest.fn();
		act(() => {
			render(
				<Router>
					<BusMotion startJourney={startJourney} />
				</Router>
			);
		});
		const newBus = screen.getByTestId("newBusBtn");
		fireEvent.click(newBus);
	});
	it("should open edit bus modal", () => {
		const toggleEditModal = jest.fn();
		act(() => {
			render(
				<Router>
					<BusMotion toggleEditModal={toggleEditModal} />
				</Router>
			);
		});
		const editBus = screen.getByTestId("editBusBtn");
		fireEvent.click(editBus);
	});
});
