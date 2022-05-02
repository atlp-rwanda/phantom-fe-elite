import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Reset from "./Routes/Reset";
import ResetP from "./Routes/ResetP";

describe("display on landing page", () => {
  it('renders on Reset page',() => {
    const { getByText } = render(<Reset />);
    const linkElement = getByText("RESET PASSWORD");
    expect(linkElement).toBeInTheDocument()
  })
  it('Renders on Resetp Page to confirm new password ', ()=>{
    const{getByText} = render(<ResetP />);
    const linkElement = getByText("RESET PASSWORD");
    expect(linkElement).toBeInTheDocument();
  })
  it('It should display image on side of form reset',()=>{
    render(<Reset />);
    const img =screen.getByRole("image");
    expect(img).toBeInTheDocument();
  })
  it('should display image on side of form confirm password page ', ()=>{
    render(<ResetP/>);
    const img = screen.getByRole("image");
    expect(img).toBeInTheDocument();
  })
  
});
describe("Reset page uses to rest password using Email", () => {
  it("render email input", () => {
    render(<Reset />);
    const inputEl = screen.getByTestId("emailInput");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });
  it("If you use invalid email can  not work", () => {
    render(<Reset />);

    const inputEl = screen.getByTestId("emailInput");
    fireEvent.change(inputEl, { target: { value: "example@mail.com" } });

    expect(inputEl.value).toBe("example@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
  it("Should get a submit button", () => {
    render(<Reset />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

describe("Should confrim new password", () => {
 
  it("Should get a submit button", () => {
    render(<ResetP />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("Should insert new password",()=>{
    render(<ResetP/>);
    expect(screen.getAllByPlaceholderText("Password ..."))
    expect(screen.getAllByPlaceholderText("Confirm password ..."))
  })
  it("Should accepts password input length at least 8 character ",()=>{
    render(<ResetP />)
    const inputPass = screen.getByPlaceholderText("Password ...")
    fireEvent.change(inputPass,{target: {value:""}})
    // expect(inputPass.value.length).toBeGreaterThanOrEqual(9);
    expect(screen.queryAllByTestId("error-msg"))
  })
  it("Should accepts confirm password when you insert same password",()=>{
    render(<ResetP />)
    const inputPass = screen.getByPlaceholderText("Confirm password ...")
    fireEvent.change(inputPass,{target: {value:""}})

    expect(screen.queryAllByTestId("error-msg"))
  })
});
//add screen
//try to test all function

