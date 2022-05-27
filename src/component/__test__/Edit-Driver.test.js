import React from "react";
import { fireEvent, render, waitFor, screen } from "@testing-library/react";
// import "jest-dom/extend-expect";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import AdminDriver from "../../views/Driver/Admin-Driver";
import "./matchMedia.mock";
jest.spyOn(console, 'error').getMockImplementation(()=>{});

afterEach(() => {
  axios.get.mockClear();
  axios.post.mockClear();
  axios.put.mockClear();
});

 const operatorsArray = [
   {
    name: "Junior",
    driverId: "099999",
    license: "86556",
      mobileNumber: "0788856",
      role: "driver",
      id: "c666e33a-efc0-4e55-834b-a4863807efc7"
   },
   {
    name: "Kamali",
      driverId: "099999",
      license: "86556",
      mobileNumber: "0788856",
      role: "driver",
      id: "c666e33a-efc0-4e55-834b-a4863807efc7"
   },
   {
    name: "Remmy",
    driverId: "099999",
    license: "86556",
    mobileNumber: "0788856",
    role: "driver",
    id: "c666e33a-efc0-4e55-834b-a4863807efc7"
   },
 ];

function mockCall() {
  axios.get.mockResolvedValue({
    data: operatorsArray,
  });
}

describe("Integration test of Editing the row and Deleting the row", () => {
test('show loader when it"s fetching data', () => {
  mockCall();

  const { getByText } = render(
    <BrowserRouter>
      <AdminDriver />
    </BrowserRouter>
  );
  expect(getByText(/loading.../i)).toBeInTheDocument();
});

test("render operators' name at each row", async () => {
  mockCall();

  const { getAllByTestId } = render(
    <BrowserRouter>
      <AdminDriver />
    </BrowserRouter>
  );
  //check what's rendered in the row
  const rowValues = await waitFor(() =>
    getAllByTestId("row-name").map((row) => row.textContent)
  );
  expect(rowValues).toEqual(["Junior", "Kamali", "Remmy"]);
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith("http://localhost:7000/driver");
});
it("should call delete handler when delete button is clicked", async () => {
  mockCall();
  const id = "c666e33a-efc0-4e55-834b-a4863807efc7";
  axios.delete.mockResolvedValue({
    id: id,
  });
  const { getByTestId } = render(
    // the component which includes link element from react-router-dom should be wrapped into
    // into the browser router component to mimic that behaviour in the test but where there is not the link
    // it does not matter to include browserRouter
    <BrowserRouter>
      <AdminDriver />
    </BrowserRouter>
  );
  const Element = await waitFor(() => getByTestId("row-delete-1"));
  await waitFor(() => {
    fireEvent.click(Element);
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith(
      `http://localhost:7000/driver/${id}`
    );
  });
});

it("should popup the edit form modal component when edit button is clicked and prefill the data into it ", async () => {
  mockCall();
  const { findByTestId, getByTestId } = render(
    <BrowserRouter>
      <AdminDriver />
    </BrowserRouter>
  );
  const ElementEdit = await findByTestId("row-edit-3");
  fireEvent.click(ElementEdit);
  await waitFor(() => expect(getByTestId("edit-form")).toBeInTheDocument());
  const inputEl1 = await screen.findByPlaceholderText("Driver Name");
  const inputEl2 = await screen.findByPlaceholderText("Driver Id");
  const inputEl3 = await screen.findByPlaceholderText("Mobile number");
  const inputEl4 = await screen.findByPlaceholderText("Driver License");
  expect(inputEl1.value).toBe("Remmy");
  expect(inputEl2.value).toBe("099999");
  expect(inputEl3.value).toBe("0788856");
  expect(inputEl4.value).toBe("86556");
});

it("Should allow edit form to be typed and submitted with new data.", async () => {
  mockCall();
  const id = "c666e33a-efc0-4e55-834b-a4863807efc7";
  axios.put.mockResolvedValue({
    id: id,
  });
  const { findByTestId, getByTestId, queryByTestId } = render(
    <BrowserRouter>
      <AdminDriver />
    </BrowserRouter>
  );
  const ElementEdit = await findByTestId("row-edit-3");
  fireEvent.click(ElementEdit);
  await waitFor(() => expect(getByTestId("edit-form")).toBeInTheDocument());
  const inputEl1 = await screen.findByPlaceholderText("Driver Name");
  const inputEl2 = await screen.findByPlaceholderText("Driver Id");
  const inputEl3 = await screen.findByPlaceholderText("Mobile number");
  const inputEl4 = await screen.findByPlaceholderText("Driver License");
  const saveButtonEl = screen.getByRole("button", { name: "Save Driver" });
  fireEvent.change(inputEl2, { target: { value: "099999" } });
  fireEvent.change(inputEl1, { target: { value: "Remmy" } });
  expect(inputEl1.value).toBe("Remmy");
  expect(inputEl2.value).toBe("099999");
  expect(inputEl3.value).toBe("0788856");
  expect(inputEl4.value).toBe("86556");
  fireEvent.click(saveButtonEl);
  await waitFor(() => {
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      `http://localhost:7000/driver/${id}`,
      {
        id: id,
        name: "Remmy",
        driverId: "099999",
        license: "86556",
       mobileNumber: "0788856",
       role: "driver",
      });
  });
  expect(queryByTestId("edit-form")).not.toBeInTheDocument();
});
})

