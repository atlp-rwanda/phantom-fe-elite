import React from "react";
import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import "jest-dom/extend-expect";
import axios from "axios";
// import Users, { url } from "./Users";
import { BrowserRouter } from "react-router-dom";
import AdminOperator from "../../views/Admin-operator";

afterEach(() => {
  axios.get.mockClear();
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
function mockPost(dataPosted) {
  // [
  //      {
  //        name: "posted",
  //        email: "posted@gmail.com",
  //        role: "Operator",
  //        id: "78015c34",
  //      },
  //    ],
  axios.get.mockResolvedValueOnce({
    data: dataPosted,
  });
}

test('show loader when it"s fetching data', () => {
  mockCall();

  const { getByText } = render(
    <BrowserRouter>
      <AdminOperator />
    </BrowserRouter>
  );
  expect(getByText(/loading.../i)).toBeInTheDocument();
});

test("render users' name on rows", async () => {
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

 it("should popup the edit form modal component when new operator button is clicked ", async () => {
   mockCall();
   const id = "78015c34-cdc9-4ecc-a432-0ce82400f3a8"; 
   axios.delete.mockResolvedValue({
      id: id,
    });
   const { getAllByTestId, getByTestId } = render(
     // the component which includes link element from react-router-dom should be wrapped into
     // into the browser router component to mimic that behaviour in the test but where there is not the link
     // it does not matter to include browserRouter
     <BrowserRouter>
       <AdminOperator />
     </BrowserRouter>
   );
    const Element = await waitFor(() => getByTestId("row-delete-1"));
   await waitFor(() =>  {
fireEvent.click(Element);
       expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith(`http://localhost:7000/operator/${id}`)})
   ;
 });
