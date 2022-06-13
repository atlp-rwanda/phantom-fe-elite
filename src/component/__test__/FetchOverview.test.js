import React from "react";
import {render, waitFor } from "@testing-library/react";
import axios from "axios";
import {jest} from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import AdminView from "../../views/user/AdminView";
import "./matchMedia.mock";
jest.mock('axios');
jest.mock('leaflet')

afterEach(() => {
  axios.get.mockClear();
  axios.post.mockClear();
  axios.put.mockClear();
});

 const user = [ {
      id: 1,
      busNo: "bus-009",
      seats:"20-remaining",
      routes: "Kimironko - Downtown",
      drivers: "Andela Rwanda",
      current_status: "Near Kicukiro",
      Eta: "20 min"
    },
    {
      id: 2,
      busNo: "buss-35",
      seats:"20-remaining",
      routes: "Kimironko - Downtown",
      drivers: "Andela Rwanda",
      current_status: "Near Kicukiro",
      Eta: "20 min"
    },
    {
      id: 3,
      busNo: "buss-45",
      seats:"20-remaining",
      routes: "Kimironko - Downtown",
      drivers: "Andela Rwanda",
      current_status: "Near Kicukiro",
      Eta: "20 min"
    },
    {
      id: 4,
      busNo: "buss-35",
      seats:"20-remaining",
      routes: "Kimironko - Downtown",
      drivers: "Andela Rwanda",
      current_status: "Near Kicukiro",
      Eta: "20 min"
    },
    {
      id: 5,
      busNo: "buss-55",
      seats:"20-remaining",
      routes: "Kimironko - Downtown",
      drivers: "Andela Rwanda",
      current_status: "Near Kicukiro",
      Eta: "20 min"
    }]


function mockCall() {
  axios.get.mockResolvedValue({
    data: user,
  });
}


test("render operators' name at each row", async () => {
  mockCall();

  const { getAllByTestId } = render(
    <BrowserRouter>
      <AdminView />
    </BrowserRouter>
  );
  //check what's rendered in the row
  const rowValues = await waitFor(() =>
    getAllByTestId("drivers").map((row) => row.textContent)
  );
  expect(rowValues).toEqual(["Andela Rwanda", "Andela Rwanda", "Andela Rwanda", "Andela Rwanda", "Andela Rwanda"]);
  // expect(axios.get).toHaveBeenCalledTimes(1);
  // expect(axios.get).toHaveBeenCalledWith("http://localhost:7000/user");
});