import React from "react";
import { fireEvent, render, waitFor, screen } from "@testing-library/react";
// import "jest-dom/extend-expect";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import AdminOperator from "../../views/Admin-operator";
import "./matchMedia.mock";
jest.spyOn(console, 'error').getMockImplementation(()=>{});

afterEach(() => {
  axios.get.mockClear();
  axios.post.mockClear();
  axios.put.mockClear();
});

 const operatorsArray = [
   {
     name: "message",
     email: "eric@gmail.com",
     role: "Operator",
     id: "78015c34-cdc9-4ecc-a432-0ce82400f3a8",
   },
   {
     name: "niyibizi",
     email: "fabrice6@gmail.com",
     role: "Operator",
     id: "2e1fb644-f6d4-4324-801e-00390c7c2b15",
   },
   {
     name: "sylvain",
     email: "winfield@gmail.com",
     role: "Operator",
     id: "868d42ef-7da3-4ef2-9d54-48806cfda56a",
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
      <AdminOperator />
    </BrowserRouter>
  );
  expect(getByText(/loading.../i)).toBeInTheDocument();
});

test("render operators' name at each row", async () => {
  mockCall();

  const { getAllByTestId } = render(
    <BrowserRouter>
      <AdminOperator />
    </BrowserRouter>
  );
  //check what's rendered in the row
  const rowValues = await waitFor(() =>
    getAllByTestId("row-name").map((row) => row.textContent)
  );
  expect(rowValues).toEqual(["message", "niyibizi", "sylvain"]);
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith("http://localhost:7000/operator");
});

it("should call delete handler when delete button is clicked", async () => {
  mockCall();
  const id = "78015c34-cdc9-4ecc-a432-0ce82400f3a8";
  axios.delete.mockResolvedValue({
    id: id,
  });
  const { getByTestId } = render(
    // the component which includes link element from react-router-dom should be wrapped into
    // into the browser router component to mimic that behaviour in the test but where there is not the link
    // it does not matter to include browserRouter
    <BrowserRouter>
      <AdminOperator />
    </BrowserRouter>
  );
  const Element = await waitFor(() => getByTestId("row-delete-1"));
  await waitFor(() => {
    fireEvent.click(Element);
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith(
      `http://localhost:7000/operator/${id}`
    );
  });
});

it("should popup the edit form modal component when edit button is clicked and prefill the data into it ", async () => {
  mockCall();
  const { findByTestId, getByTestId } = render(
    <BrowserRouter>
      <AdminOperator />
    </BrowserRouter>
  );
  const ElementEdit = await findByTestId("row-edit-3");
  fireEvent.click(ElementEdit);
  await waitFor(() => expect(getByTestId("edit-form")).toBeInTheDocument());
  const inputEl1 = await screen.findByPlaceholderText("Operator Email");
  const inputEl2 = await screen.findByPlaceholderText("Operator Name");
  expect(inputEl1.value).toBe("winfield@gmail.com");
  expect(inputEl2.value).toBe("sylvain");
});

it("Should allow edit form to be typed and submitted with new data.", async () => {
  mockCall();
  const id = "868d42ef-7da3-4ef2-9d54-48806cfda56a";
  axios.put.mockResolvedValue({
    id: id,
  });
  const { findByTestId, getByTestId, queryByTestId } = render(
    <BrowserRouter>
      <AdminOperator />
    </BrowserRouter>
  );
  const ElementEdit = await findByTestId("row-edit-3");
  fireEvent.click(ElementEdit);
  await waitFor(() => expect(getByTestId("edit-form")).toBeInTheDocument());
  const inputEl1 = await screen.findByPlaceholderText("Operator Email");
  const inputEl2 = await screen.findByPlaceholderText("Operator Name");
  const saveButtonEl = screen.getByRole("button", { name: "Save Operator" });
  fireEvent.change(inputEl2, { target: { value: "eric" } });
  fireEvent.change(inputEl1, { target: { value: "themaster@gmail.com" } });
  expect(inputEl1.value).toBe("themaster@gmail.com");
  expect(inputEl2.value).toBe("eric");
  fireEvent.click(saveButtonEl);
  await waitFor(() => {
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      `http://localhost:7000/operator/${id}`,
      {
        id: id,
        name: "eric",
        email: "themaster@gmail.com",
        role: "operator",
      }
    );
  });
  expect(queryByTestId("edit-form")).not.toBeInTheDocument();
});
})

