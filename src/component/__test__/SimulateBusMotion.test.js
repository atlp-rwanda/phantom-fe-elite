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
	it("should submit new journey and change the form", async () => {
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
    const { findByTestId, getByTestId, queryByTestId, getByText } =  render(
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
    // waitFor(() => expect(getByTestId("submit-save")).toBeInTheDocument());
    mockCall();
    const id = 9;
    axios.patch.mockResolvedValue({
      id: id,
    });
    const busStop = await screen.findByTestId("busStop-input");
    const inPass = await screen.findByTestId("inPassenger-input");
    const outPass = await screen.findByTestId("outPassenger-input");
    expect(busStop.value).toBe("");
    expect(inPass.value).toBe("0");
    expect(outPass.value).toBe("0");

    fireEvent.change(busStop, { target: { value: "Downtown" } });
    fireEvent.change(inPass, { target: { value: "5" } });
    fireEvent.change(outPass, { target: { value: "4" } });

    expect(busStop.value).toBe("Downtown");
    expect(inPass.value).toBe("5");
    expect(outPass.value).toBe("4");
    await waitFor(() =>{ fireEvent.click(getByTestId("submit-save"));
    expect(axios.patch).toHaveBeenCalledTimes(1);
  });
  fireEvent.click(getByTestId("submit-slow"))
  await waitFor(() => {
    expect(axios.patch).toHaveBeenCalledTimes(3);
    expect(axios.patch).toHaveBeenCalledWith(
      `http://localhost:7000/userroutes/${id}`,
      { speed_status: "Slow" }
    );
  });
  fireEvent.click(getByTestId("submit-speed"))
  fireEvent.click(getByTestId("submit-jam"))
  fireEvent.click(getByTestId("submit-stop"))
  fireEvent.click(getByTestId("submit-end"))
	});
	
}); 