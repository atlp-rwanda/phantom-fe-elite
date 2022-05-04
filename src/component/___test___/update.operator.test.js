import UpdateOperator from "../../Routes/UpdateOperator";
import { render, screen } from "@testing-library/react";

it('should see if the input is visible to the user', () => {
    render(<UpdateOperator />);
    const input = screen.getByTitle("input");
    expect(input).toBeVisible
});
it('should see if the input is visible to the user', () => {
    render(<UpdateOperator />);
    const input2 = screen.getByTitle("input2");
    expect(input2).toBeVisible
});
it('should see if the input is visible to the user', () => {
    render(<UpdateOperator />);
    const button = screen.getByTitle("button");
    expect(button).toBeVisible
});