import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AdminOperator from "../../views/Admin-operator";
// import { MemoryRouter as Router } from "react-router-dom";
// import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import TableGenerator from "../../admin-operator-stuff/TableGenerator";
import NewOperatorForm from "../../admin-operator-stuff/NewOperatorForm";
import EditOperatorForm from "../../admin-operator-stuff/EditOperatorForm";

const MockTableGenerator = ({ data }) => {
  return (
    <BrowserRouter>
      <TableGenerator data={data} />
    </BrowserRouter>
  );
};

 const operatorsArray = [
    {
      name: "message one",
      email: "eric@gmail.com",
      role: "Operator",
      id: "78015c34-cdc9-4ecc-a432-0ce82400f3a8",
      number: 1
    },
    {
      name: "Niyibizi Fabrice",
      email: "fabrice6@gmail.com",
      role: "Operator",
      id: "2e1fb644-f6d4-4324-801e-00390c7c2b15",
      number: 2
    },
    {
      name: "nitwa sylvain",
      email: "winfield@gmail.com",
      role: "Operator",
      id: "868d42ef-7da3-4ef2-9d54-48806cfda56a",
      number: 3
    }
  ]
describe("Renders the operator-admin page with all of the interaction", () => {
  it("renders a create operator button, input element, aside, footer and header element", () => {
      render(
        <BrowserRouter>
          <AdminOperator />
        </BrowserRouter>
      );

      expect(screen.getAllByRole("button")[0]).toBeInTheDocument();

      //  banner is the implicity role by default get to the header element
      expect(screen.getByRole("banner")).toBeInTheDocument();

      //  complementary is the default role the aside element have through html assign roles convention
      expect(screen.getByRole("complementary")).toBeInTheDocument();

      //  contentinfo is the implicity given to the footer element by covnention
      expect(screen.getByRole("contentinfo")).toBeInTheDocument();

      //  to get table header to the by using the explicity i gave to it in the html document
      expect(screen.getByRole("row-header")).toBeInTheDocument();
      expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("should render the input element ( text field )", () => {
      render(
        <BrowserRouter>
          <AdminOperator />
        </BrowserRouter>
      );
    const inputEl = screen.getByPlaceholderText(/Search/i);
      expect(inputEl).toBeInTheDocument();
      expect(inputEl).toHaveAttribute("type", "text");
  });

  it("When user types into the text field the value should change", () => {
      render(
        // the component which includes link element from react-router-dom should be wrapped into
        // into the browser router component to mimic that behaviour in the test but where there is not the link
        // it does not matter to include browserRouter
        <BrowserRouter>
          <AdminOperator />
        </BrowserRouter>
      );
    const inputEl = screen.getByPlaceholderText("Search");
    fireEvent.click(inputEl);
    fireEvent.change(inputEl, { target: { value: "kati" } });
      expect(inputEl.value).toBe("kati");
  });

  it("Testing the table generator to see if it receive the array it is renedering the corresponding rows on the screen", async () => {
    render(<MockTableGenerator data={operatorsArray} />);
    const rows = screen.getAllByRole("row-group");
    expect(rows.length).toBe(operatorsArray.length);
  });
});

describe("Testing the crud functionality of the app", () => {
  it("should render the form for submitting the new operator created", () => {
    render(<NewOperatorForm />)
    const form  = screen.getByRole("form");
    // role given to the inputs element with type of text is textbox
    const inputsRendered = screen.getAllByRole("textbox");
    const buttonRendered = screen.getAllByRole("button");
    expect(form).toBeInTheDocument();
    for (let input of inputsRendered) {
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
    }
     for (let button of buttonRendered) {
       expect(button).toBeInTheDocument();
     }
  })

   it("the input element should change when someone clicks inside the text field", () => {
    render(<NewOperatorForm />);
    const inputEl1 = screen.getByPlaceholderText("Operator Email");
      const inputEl2 = screen.getByPlaceholderText("Operator Name");
    fireEvent.change(inputEl2, { target: { value: "fabrice" } });
    fireEvent.change(inputEl1, { target: { value: "test@mail.com" } });
      expect(inputEl1.value).toBe("test@mail.com");
      expect(inputEl2.value).toBe("fabrice");
   });
//  it("should render the form for submitting the new operator created", () => {  
//   render(<EditOperatorForm update={operatorsArray[0]} />);
//      const form = screen.getByRole("form");
//      // role given to the inputs element with type of text is textbox
//      const inputsRendered = screen.getAllByRole("textbox");
//      const buttonRendered = screen.getAllByRole("button");
//      expect(form).toBeInTheDocument();
//      expect(buttonRendered).toBeInTheDocument();
//      for (let input of inputsRendered) {
//        expect(input).toBeInTheDocument();
//        expect(input).toHaveAttribute("type", "text");
//      }
//    });
})
