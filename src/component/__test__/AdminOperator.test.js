import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AdminOperator from "../../views/Admin-operator";
import { MemoryRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";



// const mockedSetTodo = jest.fn();

describe("AddInput", () => {
//   it("should render input element", () => {
//     render(<AdminOperator />);
//     const inputElement = screen.getByPlaceholderText(/Search/i);
//     expect(inputElement).toBeInTheDocument();
//   });

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
      expect(inputEl.value.length).toBeGreaterThan(3);
      expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });
  });

//   it("should be able to type into input", () => {
//     render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
//     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
//     fireEvent.click(inputElement);
//     fireEvent.change(inputElement, {
//       target: { value: "Go Grocery Shopping" },
//     });
//     expect(inputElement.value).toBe("Go Grocery Shopping");
//   });

//   it("should be able to type into input", () => {
//     render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
//     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
//     fireEvent.click(inputElement);
//     fireEvent.change(inputElement, {
//       target: { value: "Go Grocery Shopping" },
//     });
//     const buttonElement = screen.getByRole("button", { name: /Add/i });
//     fireEvent.click(buttonElement);
//     expect(mockedSetTodo).toBeCalled();
//   });

//   it("should have empty input when add button is cliked", () => {
//     render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
//     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
//     fireEvent.change(inputElement, {
//       target: { value: "Go Grocery Shopping" },
//     });
//     const buttonElement = screen.getByRole("button", { name: /Add/i });
//     fireEvent.click(buttonElement);
//     expect(inputElement.value).toBe("");
//   });
});
