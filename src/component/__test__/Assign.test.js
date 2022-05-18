import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  getByRole,
  getByTestId,
  getByText,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import { async } from "regenerator-runtime";
import { Select } from "react-select";
import selectEvent from "react-select-event";
import AssignDriversToBuses from "../../views/operator/Assign";

describe("<AssignDriversToBuses />", () => {
  it("render route", async () => {
    await act(async () => {
      render(
        <Router>
          <AssignDriversToBuses />
        </Router>
      );
    });

    await waitFor(() => {
      const divEl1 = screen.getAllByTestId("route-id");
      const divEl2 = screen.getAllByTestId("driver-email");
      const divEl3 = screen.getAllByTestId("route-route");
      const divEl4 = screen.getAllByTestId("bus-plate");

      expect(divEl1.length).toBeGreaterThanOrEqual(1);
      expect(divEl2.length).toBeGreaterThanOrEqual(1);
      expect(divEl3.length).toBeGreaterThanOrEqual(1);
      expect(divEl4.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("render title", async () => {
    await act(async () => {
      render(
        <Router>
          <AssignDriversToBuses />
        </Router>
      );
    });
    await waitFor(() => {
      const titleEl = screen.queryByText(/OPERATOR-DASHBOARD/i);
      expect(titleEl).toBeInTheDocument();
    });
  });

  it("should render button to submit", async () => {
    await act(async () => {
      render(
        <Router>
          <AssignDriversToBuses />
        </Router>
      );
    });

    await waitFor(() => {
      const submitbtnEl = screen.getAllByRole("button", { name: "Assign" });
      expect(submitbtnEl).toBeTruthy();
      expect(submitbtnEl.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("should correctly set default option", async () => {
    await act(async () => {
      render(
        <Router>
          <AssignDriversToBuses />
        </Router>
      );
    });

    await waitFor(() => {
      expect(screen.getAllByRole("option", { name: "Driver email" }).selected)
        .toBeTruthy;

      expect(screen.getAllByRole("option", { name: "Bus plate" }).selected)
        .toBeTruthy;
      expect(screen.getAllByRole("option").length).toBeGreaterThanOrEqual(1);
    });
  });

  it("should allow user to change option", async () => {
    await act(async () => {
      render(
        <Router>
          <AssignDriversToBuses />
        </Router>
      );
    });
    await waitFor(() => {
      selectEvent.select(getByRole("option", { name: "Driver email" }));
      expect(screen.getAllByTestId("form")).toHaveFormValues({
        driver: ["driver1@gmail.com"],
      });
    });
  });
});
