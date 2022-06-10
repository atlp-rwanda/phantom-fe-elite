import React from "react";
import { render, waitFor } from "@testing-library/react";
import UserView from "../../user-view-stuff/UserView";


it("render operators' name at each row", async () => {

  const { findByTestId } = render(<UserView />);
 const mainFile = await findByTestId("map-rendering");
 await waitFor(()=> {
   expect(mainFile).toBeInTheDocument();
 })
});