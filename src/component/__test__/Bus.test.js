/** @format */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import Bus from "../../views/operator/Bus";

describe("Testing Operator Bus page", () => {
	test("It should display the the text of the heading of the page ", () => {
		render(<Bus />);
		const Title = screen.getByText(/Bus/i);
		expect(Title).toBeInTheDocument();
	});
});
