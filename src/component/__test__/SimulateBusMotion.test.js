import React from "react";
import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import BusMotion from "../../views/Driver/BusMotion";
import "./matchMedia.mock";
jest.spyOn(console, 'error').mockImplementation(()=>{});

afterEach(() => {
  axios.get.mockClear();
  axios.post.mockClear();
  axios.patch.mockClear();
});


const userRoutes = [
    {
        id: 9,
        coming: "Kanombe",
        destination: "Gishushu",
        seats: 1,
        bus_stop: "Downtown",
        speed_status: "Slow",
        description: "400m away from you",
        journey_status: 0
      },
      {
        id: 9,
        coming: "Kanombe",
        destination: "Gishushu",
        seats: 1,
        bus_stop: "Downtown",
        speed_status: "Slow",
        description: "400m away from you",
        journey_status: 0
      },
      {
        id: 9,
        coming: "Kanombe",
        destination: "Gishushu",
        seats: 1,
        bus_stop: "Downtown",
        speed_status: "Slow",
        description: "400m away from you",
        journey_status: 0
      }
 ];

 function mockCall() {
    axios.get.mockResolvedValue({
      data: userRoutes,
    });
  }
  jest.spyOn(console, 'error').mockImplementation(()=>{});

  describe("Testing Bus Simulation page", () => {
	it("should render the heading of the page if it visible to the user", () => {
		render(
			<BrowserRouter>
				<BusMotion />
			</BrowserRouter>
		);
		const headingelements = screen.getByTestId("head1");
		expect(headingelements).toBeVisible;
	});
});
describe("to test bus motion functions", () => {
	it("should submit new journey and change the form", () => {
		const data = {
                driver_id: 20,
                coming: "Kanombe",
                destination: "Gishushu",
                seats: 20,
                bus_stop: "",
                speed_status: "Normal",
                description: "400m away from you",
                journey_status: 1,
                
          }
              axios.post.mockResolvedValueOnce({
                data: data,
              });
            render(
              <BrowserRouter>
                <BusMotion />
              </BrowserRouter>
            );
        const inputEl1 =  screen.getByTestId("busFrom-input");
        const inputEl2 =  screen.getByTestId("busTo-input");
        
        fireEvent.change(inputEl1, { target: { value: "Kanombe" } });
        fireEvent.change(inputEl2, { target: { value: "Gishushu" } });
        expect(inputEl1.value).toBe("Kanombe");
        expect(inputEl2.value).toBe("Gishushu");
		const startTrip = screen.getByTestId("submit-start");
        // const saveBtn = screen.getByTestId('submit-save');

		fireEvent.click(startTrip);
        waitFor(() => {
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(axios.post).toHaveBeenCalledWith(
            `http://localhost:7000/userroutes`,
            data
          );
        const newForm =  screen.getByTestId("second-form");
        // const saveBtn = await findByTestId("submit-save");

        expect(newForm).toBeInTheDocument();
  

        })
	});
	it("Should save the current data", async () => {
        mockCall();
        const id = 9;
        axios.patch.mockResolvedValue({
          id: id,
        });
        const { findByTestId, getByTestId, queryByTestId } = render(
          <BrowserRouter>
            <BusMotion />
          </BrowserRouter>
        );
        const saveBtn =  findByTestId("submit-save");

        // fireEvent.click(saveBtn);
        // waitFor(() => {
        // expect(axios.patch).toHaveBeenCalledTimes(1);
        // });
    });
});