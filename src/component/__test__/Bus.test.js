/** @format */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import { MemoryRouter as Router } from "react-router-dom";
import Bus from "../../views/operator/Bus";

describe("Testing Operator Bus page", () => {
  it("should render the heading of the page if it visible to the user", () => {
    render(
      <Router>
        <Bus />
      </Router>
    );
    const headingelements = screen.getByTestId("head1");
    expect(headingelements).toBeVisible;
  });
});

describe("to test the user event on modal", () => {
  it("should open new bus modal", () => {
    const toggleModal = jest.fn();
    act(() => {
      render(
        <Router>
          <Bus toggleModal={toggleModal} />
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
          <Bus toggleEditModal={toggleEditModal} />
        </Router>
      );
    });
    const editBus = screen.getByTestId("editBusBtn");
    fireEvent.click(editBus);
  });
});

