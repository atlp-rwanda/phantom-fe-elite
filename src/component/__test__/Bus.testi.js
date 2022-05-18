// /** @format */

// import React from "react";
// import "@testing-library/jest-dom";
// import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import { act } from "react-dom/test-utils";
// import { MemoryRouter as Router } from "react-router-dom";
// import Bus from "../../views/operator/Bus";

// describe("Testing Operator Bus page", () => {
// 	it("should render the heading of the page if it visible to the user", () => {
// 		render(
// 			<Router>
// 				<Bus />
// 			</Router>
// 		);
// 		const headingelements = screen.getByTestId("head1");
// 		expect(headingelements).toBeVisible;
// 	});
// });

// describe("to test the user event on modal", () => {
	
// 	it("should open new bus modal", () => {
// 		const toggleModal = jest.fn();
// 		act(() => {
// 			render(
// 				<Router>
// 					<Bus toggleModal={toggleModal} />
// 				</Router>
// 			);
// 		});
// 		const newBus = screen.getByTestId("newBusBtn");
// 		fireEvent.click(newBus);
// 	});
// 	it("should open edit bus modal", () => {
// 		const toggleEditModal = jest.fn();
// 		act(() => {
// 			render(
// 				<Router>
// 					<Bus toggleEditModal={toggleEditModal} />
// 				</Router>
// 			);
// 		});
// 		const editBus = screen.getByTestId("editBusBtn");
// 		fireEvent.click(editBus);
// 	});
// });




// 57 lines (51 sloc)  1.64 KB
   
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from "../Todo"
import { BrowserRouter } from "react-router-dom"

const MockTodo = () => {
    return (
        <BrowserRouter>
          <Todo/>
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i} );
    tasks.forEach((task) => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    })
}

it('should be able to type into input', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument()
});

it('should render multiple items', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping", "Go Grocery Shopping", "Go Grocery Shopping"])
    const divElements = screen.queryAllByText(/Go Grocery Shopping/i);
    expect(divElements.length).toBe(3)
});

it('task should not have complete class when initally rendered', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active")
});

it('task should have complete class when clicked', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active")
});