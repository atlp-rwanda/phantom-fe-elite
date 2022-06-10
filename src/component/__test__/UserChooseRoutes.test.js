import React from "react";
import { render, waitFor } from "@testing-library/react";
import UserChooseRoutes from "../../user-view-stuff/UserChooseRoutes"


it("render operators' name at each row", async () => {

  const { findByTestId } = render(<UserChooseRoutes />);
 const mainFile = await findByTestId("map-render");
 await waitFor(()=> {
   expect(mainFile).toBeInTheDocument();
 })
});