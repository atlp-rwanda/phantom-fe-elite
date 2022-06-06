import React from "react";
import { render } from "@testing-library/react";
import UserView from "../../user-view-stuff/UserView";


fit("render operators' name at each row", async () => {

  const { findByTestId } = render(<UserView />);
 const mainFile = await findByTestId("map-rendering");
 expect(mainFile).toBeInTheDocument();
});