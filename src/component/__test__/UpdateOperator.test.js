import UpdateOperator from "../../views/operator/UpdateOperator";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { MemoryRouter as Router } from "react-router-dom";
jest.spyOn(console, 'error').getMockImplementation(()=>{});

describe('visibility of elements', () => {
    it('should see if the input is visible to the user', () => {
        render(
        <Router >
        <UpdateOperator />
        </Router>
        );
        const input = screen.getByTitle("input");
        expect(input).toBeVisible
    });
    it('should see if the input is visible to the user', () => {
        render(
            <Router >
            <UpdateOperator />
            </Router>
        );
        const input2 = screen.getByTitle("input2");
        expect(input2).toBeVisible
    });
    it('should see if the input is visible to the user', () => {
        render(
            <Router >
            <UpdateOperator />
            </Router>
        );
        const button = screen.getByTitle("button");
        expect(button).toBeVisible
    });
});
describe('what are in the document', () => {
    it("should render something which is not in react page",  () => {
        render(
            <Router >
            <UpdateOperator />
            </Router>
        );
        const headingelement = screen.queryByText(/dogs/i)
        expect(headingelement).not.toBeInTheDocument;
    });
    it("should render something which is not in react page",  () => {
        render(
            <Router >
            <UpdateOperator />
            </Router>
        );
        const headingelements = screen.getAllByRole("heading")
        expect(headingelements.length).toBe(2);
    });
    it("should render something if it visible to the user",  () => {
        render(
            <Router >
            <UpdateOperator />
            </Router>
        );
        const headingelements = screen.getByTestId("head1")
        expect(headingelements).toBeVisible
    });
    it("should render something if it visible to the user",  () => {
        render(
            <Router >
            <UpdateOperator />
            </Router>
        );
        const headingelements = screen.getByTestId("head2")
        expect(headingelements).toBeVisible
    });
});
describe('to test the user event in the document', () => {
    it("should accepts username input value more than 3 character",async () => {
        await act(async()=>{ render(
            <Router >
            <UpdateOperator />
            </Router>
        );
        });
         const inputEl = screen.getByPlaceholderText("Username...");
         fireEvent.change(inputEl, { target: { value: "kati" } });
         await waitFor(() => {
         expect(inputEl.value).toBe("kati");
         expect(inputEl.value.length).toBeGreaterThan(3);
         expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
       });
     });
     it("should validate form", async () => {
        const handleSubmit = jest.fn();
        await act(async () => {
          render(
            <Router >
            <UpdateOperator onSubmit={handleSubmit}/>
            </Router>
            );
        });
        const user = userEvent.setup();
        const username = screen.getByTestId("username-input");
        const password = screen.getByTestId("password-input");
        user.click(screen.getByTestId("submit-form"));
        fireEvent.blur(username);
        fireEvent.blur(password);
        await waitFor(() => {
          expect(screen.getByText("Username Required")).toBeInTheDocument();
          expect(screen.getByText("Password is Required")).toBeInTheDocument();
        });
      });
});
