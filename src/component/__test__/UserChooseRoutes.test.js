import UserChooseRoutes from "../../user-view-stuff/UserChooseRoutes";
import { render, screen } from "@testing-library/react";
import React from "react";

test("It should display the image on the landing page ", () => {
    render(<UserChooseRoutes />);
    const image = screen.getByRole("image");
    expect(image).toBeInTheDocument();
});