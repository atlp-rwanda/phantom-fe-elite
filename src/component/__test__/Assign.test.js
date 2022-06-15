import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  findByTestId,
  getByRole,
  getAllByTestId,
  getByText,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import { async } from "regenerator-runtime";
import { Select } from "react-select";
// import selectEvent from "react-select-event";
import { unmountComponentAtNode } from "react-dom";
import AssignDriversToBuses from "../../views/operator/Assign";

describe("<AssignDriversToBuses />", () => {
  it("render title", async () => {
    await act(async () => {
      render(
        <Router>
          <AssignDriversToBuses />
        </Router>
      );
    });
    await waitFor(() => {
      const titleEl = screen.getByText(/OPERATOR-DASHBOARD/i);
      const tableTitle1El = screen.getByText(/No/i);
      // const tableTitle2El = screen.queryAllByText(/Routes/i);
      const tableTitle3El = screen.getByText(/Driver Names/i);
      const tableTitle4El = screen.getByText(/Bus Plate/i);
      const tableTitle5El = screen.getByText(/Action/i);
      const displayformbtnEl = screen.getByTestId("display-form");
      expect(displayformbtnEl).toBeTruthy();
      expect(displayformbtnEl).toBeInTheDocument();
      expect(titleEl).toBeInTheDocument();
      expect(tableTitle1El).toBeInTheDocument();
      // expect(tableTitle2El).toBeInTheDocument();
      expect(tableTitle3El).toBeInTheDocument();
      expect(tableTitle4El).toBeInTheDocument();
      expect(tableTitle5El).toBeInTheDocument();
    });
  });

  it("should popup the form modal component when button is clicked ", async () => {
    await act(async () => {
      render(
        <Router>
          <AssignDriversToBuses />
        </Router>
      );
    });
    const displayformbtnEl = screen.getByTestId("display-form");
    fireEvent.click(displayformbtnEl);
    await waitFor(() =>
      expect(screen.getByTestId("data-form")).toBeInTheDocument()
    );
    const inputEl = screen.queryAllByPlaceholderText("Search");
    expect(inputEl.length).toBeGreaterThanOrEqual(1);

    const closeModalBtn = screen.getByTestId("close-modal");
    const submitBtn = screen.getByTestId("submit-value");

    expect(closeModalBtn).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  const fakeData = [
    {
      routes: "Kimironko - Ndera",
      names: "jacob",
      platenumber: "RAB3002",
      id: 10,
    },
    {
      routes: "Kimironko - Downtown",
      names: "peter",
      platenumber: "RAB3001",
      id: 11,
    },
    {
      routes: "Kimironko - Remera",
      names: "james",
      platenumber: "RAB3002",
      id: 12,
    },
    {
      routes: "Kimironko - Remera",
      names: "jean",
      platenumber: "RAB3001",
      id: 13,
    },
  ];

  it("it should render and display fetched data ", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeData),
      })
    );

    // await act(async () => {
    render(
      <Router>
        <AssignDriversToBuses />
      </Router>
    );

    const rowValues = await waitFor(() =>
      screen.getAllByTestId("column-name").map((row) => row.textContent)
    );
    expect(rowValues).toStrictEqual(["jacob", "peter", "james", "jean"]);
    global.fetch.mockRestore();
  });

  it("should popup the delete modal component when button is clicked ", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeData),
      })
    );

    // await act(async () => {
    render(
      <Router>
        <AssignDriversToBuses />
      </Router>
    );

    const button = await waitFor(() => screen.findByTestId("delete-low-1"));

    // const deleteMOdal = await waitFor(() =>
    //   screen.findByTestId("delete-modal")
    // );
    // expect(button).toHaveLength(1);
    // expect(deleteMOdal.prop("openDeleteModal")).toEqual(false);
    await waitFor(() => fireEvent.click(button));
    // screen.update();
    const closedeleteModal = await waitFor(() =>
      screen.findByTestId("delete-modal")
    );

    expect(closedeleteModal).toBeInTheDocument();
    // expect(deleteMOdal.prop("openDeleteModal")).toEqual(true);

    global.fetch.mockRestore();
  });

  // it("render route", async () => {
  //   await act(async () => {
  //     render(
  //       <Router>
  //         <AssignDriversToBuses />
  //       </Router>
  //     );
  //   });

  //   await waitFor(() => {
  //     const divEl1 = screen.getAllByTestId("route-id");
  //     const divEl2 = screen.getAllByTestId("driver-email");
  //     const divEl3 = screen.getAllByTestId("route-route");
  //     const divEl4 = screen.getAllByTestId("bus-plate");

  //     expect(divEl1.length).toBeGreaterThanOrEqual(1);
  //     expect(divEl2.length).toBeGreaterThanOrEqual(1);
  //     expect(divEl3.length).toBeGreaterThanOrEqual(1);
  //     expect(divEl4.length).toBeGreaterThanOrEqual(1);
  //   });
  // });

  // it("should correctly set default option", async () => {
  //   await act(async () => {
  //     render(
  //       <Router>
  //         <AssignDriversToBuses />
  //       </Router>
  //     );
  //   });

  //   await waitFor(() => {
  //     expect(screen.getAllByRole("option", { name: "Driver email" }).selected)
  //       .toBeTruthy;

  //     expect(screen.getAllByRole("option", { name: "Bus plate" }).selected)
  //       .toBeTruthy;
  //     expect(screen.getAllByRole("option").length).toBeGreaterThanOrEqual(1);
  //   });
  // });

  // it("should allow user to change option", async () => {
  //   await act(async () => {
  //     render(
  //       <Router>
  //         <AssignDriversToBuses />
  //       </Router>
  //     );
  //   });
  //   await waitFor(() => {
  //     selectEvent.select(getByRole("option", { name: "Driver email" }));
  //     expect(screen.getAllByTestId("form")).toHaveFormValues({
  //       driver: ["driver1@gmail.com"],
  //     });
  //   });
  // });
});
