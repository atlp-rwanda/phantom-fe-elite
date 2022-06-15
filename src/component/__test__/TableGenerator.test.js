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
import TableGenerator from "../../admin/TableGenerator";

it("should popup the delete modal component when button is clicked ", async () => {
  const mockFn = jest.fn();

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
  await act(async () => {
    render(
      <Router>
        <TableGenerator
          handleDelete={mockFn}
          openDeleteModal={mockFn}
          setOpenModal={mockFn}
          Data={fakeData}
          loading={false}
          error={{
            message: "",
            isError: false,
          }}
        />
      </Router>
    );
  });
  console.log(screen.findByTestId("delete-low-1"));
  const idToDelete = await waitFor(() => screen.findByTestId("delete-low-1"));

  await waitFor(() => fireEvent.click(idToDelete));
  // expect(screen.getByTestId("delete-modal")).toHaveBeenCalledTimes(1);

  // const closedeleteModal = screen.getByTestId("remove-modal");

  // expect(closedeleteModal).toBeInTheDocument();
  // global.fetch.mockRestore();
});
