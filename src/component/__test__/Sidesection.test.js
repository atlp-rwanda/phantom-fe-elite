import React from "react";
import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import "./matchMedia.mock";
import DataFromServer from"../../user-view-stuff/TemplateComponent/DataFromServer"

afterEach(() => {
  axios.get.mockClear();
  axios.post.mockClear();
  axios.patch.mockClear();
});
 const userroutes= [
    {
      descrption: "400m away from you",
      seats: "4seats remaining",
      status: "slow"
    },
    {
      descrption: "600m away from you",
      seats: "6seats remaining",
      status: "speed"
    }
  ]
function mockCall() {
  axios.get.mockResolvedValue({
    data: userroutes,
  });
}

describe("Integration test of Editing the row and Deleting the row", () => {

test("render operators' name at each row", async () => {
  mockCall();
  render(<DataFromServer />);
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith("http://localhost:7000/userroutes");
})
})