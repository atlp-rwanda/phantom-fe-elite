import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AdminOperator from "../../views/Admin-operator";
import { MemoryRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";



// const mockedSetTodo = jest.fn();

describe("AddInput", () => {
 it("render email input", async () => {
   await act(async () => {
     render(
       <Router>
         <AdminOperator />
       </Router>
     );
   });
   const inputEl = screen.getByPlaceholderText(/Search/i);

   await waitFor(() => {
     expect(inputEl).toBeInTheDocument();
     expect(inputEl).toHaveAttribute("type", "text");
   });
 });

  it("should accepts username input value more than 3 character", async () => {
    await act(async () => {
      render(
        <Router>
          <AdminOperator />
        </Router>
      );
    });
    const inputEl = screen.getByPlaceholderText("Search");
    fireEvent.click(inputEl);
    fireEvent.change(inputEl, { target: { value: "kati" } });

    await waitFor(() => {
      expect(inputEl.value).toBe("kati");
    });
  });

});
