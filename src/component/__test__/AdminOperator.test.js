import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AdminOperator from "../../views/Admin-operator";
import { MemoryRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";



// const mockedSetTodo = jest.fn();

describe("Renders the operator-admin page with all of the interaction", () => {
   it("renders a create operator button", async () => {
     await act(async () => {
       render(
         <Router>
           <AdminOperator />
         </Router>
       );
     });

     await waitFor(() => {
       expect(screen.getAllByRole("button")[0]).toBeInTheDocument();
     });
   });

 it("should render the input element ( text field )", async () => {
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

  it("When user types into the text field the value should change", async () => {
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
