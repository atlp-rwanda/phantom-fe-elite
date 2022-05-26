import React from "react";
import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import RouteLines from "../../views/operator/RouteLines";
import "./matchMedia.mock";

afterEach(() => {
  axios.get.mockClear();
  axios.post.mockClear();
  axios.patch.mockClear();
});

 const operatorsArray = [
    {
        id: 1,
        origin: "Jabana",
        destination: "Kacyiru"
      },
      {
        id: 2,
        origin: "Jabana",
        destination: "Kacyiru"
      },
      {
        id: 3,
        origin: "Jabana",
        destination: "Kacyiru"
      }
 ];

function mockCall() {
  axios.get.mockResolvedValue({
    data: operatorsArray,
  });
}

describe("Integration test of Editing the row and Deleting the row", () => {

test("render operators' name at each row", async () => {
  mockCall();

  const { getAllByTestId } = render(
    <BrowserRouter>
      <RouteLines />
    </BrowserRouter>
  );
  //check what's rendered in the row
  const rowValues = await waitFor(() =>
    getAllByTestId("row-name").map((row) => row.textContent)
  );
  expect(rowValues).toEqual(["Kacyiru", "Kacyiru", "Kacyiru"]);
  expect(axios.get).toHaveBeenCalledTimes(2);
  expect(axios.get).toHaveBeenCalledWith("http://localhost:7000/routes");
});

it("should call delete handler when delete button is clicked", async () => {
  mockCall();
  const id = 3;
  axios.delete.mockResolvedValue({
    id: id,
  });
  const { getByTestId } = render(

    <BrowserRouter>
      <RouteLines />
    </BrowserRouter>
  );
  const Element = await waitFor(() => getByTestId("row-delete-3"));
  await waitFor(() => {
    fireEvent.click(Element);
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith(
      `http://localhost:7000/routes/${id}`
    );
  });
});

it("Should allow edit form to be typed and submitted with new data.", async () => {
  mockCall();
  const id = 3;
  axios.patch.mockResolvedValue({
    id: id,
  });
  const { findByTestId, getByTestId, queryByTestId } = render(
    <BrowserRouter>
      <RouteLines />
    </BrowserRouter>
  );
  const ElementEdit = await findByTestId("row-edit-3");
  fireEvent.click(ElementEdit);
  await waitFor(() => expect(getByTestId("UpdateRouteLine")).toBeInTheDocument());
  const inputEl1 = await screen.findByPlaceholderText("Origin");
  const inputEl2 = await screen.findByPlaceholderText("Destination");
  expect(inputEl1.value).toBe("Jabana")
  expect(inputEl2.value).toBe("Kacyiru")
  const saveButtonEl = screen.getByRole("button", { name: "Update Route" });
  fireEvent.change(inputEl1, { target: { value: "Kibungo" } });
  fireEvent.change(inputEl2, { target: { value: "Rusizi" } });
  expect(inputEl1.value).toBe("Kibungo");
  expect(inputEl2.value).toBe("Rusizi");
  fireEvent.click(saveButtonEl);
  await waitFor(() => {
    expect(axios.patch).toHaveBeenCalledTimes(1);
    expect(axios.patch).toHaveBeenCalledWith(
      `http://localhost:7000/routes/${id}`,
      {
        origin: "Kibungo",
        destination: "Rusizi", 
      }
    );
  });
  expect(queryByTestId("UpdateRouteLine")).not.toBeInTheDocument();
});

it("should popup the new form modal component when new operator button is clicked ", () => {
  render(

    <BrowserRouter>
      <RouteLines />
    </BrowserRouter>
  );
  const buttonEl = screen.getByRole("button", { name: "Add New Route" });
  fireEvent.click(buttonEl);
  const newForm = screen.getByTestId("NewRouteModal");
  expect(newForm).toBeInTheDocument();
});

 it("the input element should be cleared if submit button is clicked", async() => {
  const data = {
    id: 3,
    origin: "Jabana",
    destination: "Kacyiru"
  }
      axios.post.mockResolvedValueOnce({
        data: data,
      });
    const { getByTestId } = render(
      <BrowserRouter>
        <RouteLines />
      </BrowserRouter>
    );
   const buttonEl = screen.getByRole("button", { name: "Add New Route" });
  fireEvent.click(buttonEl);
  const newForm = screen.getByTestId("NewRouteModal");
  expect(newForm).toBeInTheDocument();
    const inputEl1 =  await screen.findByPlaceholderText("Origin");
    const inputEl2 =  await screen.findByPlaceholderText("Destination");
    const buttonElSave = screen.getByRole("button", {name:"Save Route"});
    const backButtonEl = screen.getByRole("button", {name:"Back"});
    fireEvent.change(inputEl2, { target: { value: "Kimironko" } });
    fireEvent.change(inputEl1, { target: { value: "Kabuye" } });
    expect(inputEl1.value).toBe("Kabuye");
    expect(inputEl2.value).toBe("Kimironko");
    fireEvent.click(buttonElSave);
     await waitFor(() => {
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      `http://localhost:7000/routes`,
      {
        id: 1,
        origin: "Kabuye",
        destination: "Kimironko", 
      }
    );
  });

  });

})