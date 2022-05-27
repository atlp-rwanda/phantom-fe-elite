import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AdminOperator from "../../views/Admin-operator";
import { BrowserRouter } from "react-router-dom";
// import "jest-dom/extend-expect";
import axios from "axios";
import TableGenerator from "../../admin-operator-stuff/TableGenerator";
import NewOperatorForm from "../../admin-operator-stuff/NewOperatorForm";
import EditOperatorForm from "../../admin-operator-stuff/EditOperatorForm";
import React from 'react'

jest.spyOn(console, 'error').getMockImplementation(()=>{});

afterEach(() => {
  axios.get.mockClear();
  axios.post.mockClear();
  axios.put.mockClear();
});

function mockPost(dataPosted) {
  // [
  //      {
  //        name: "posted",
  //        email: "posted@gmail.com",
  //        role: "Operator",
  //        id: "78015c34",
  //      },
  //    ],
  axios.post.mockResolvedValueOnce({
    data: dataPosted,
  });
}

const operatorsArray = [
  {
    name: "message",
    email: "eric@gmail.com",
    role: "Operator",
    id: "78015c34-cdc9-4ecc-a432-0ce82400f3a8",
  },
  {
    name: "niyibizi",
    email: "fabrice6@gmail.com",
    role: "Operator",
    id: "2e1fb644-f6d4-4324-801e-00390c7c2b15",
  },
  {
    name: "sylvain",
    email: "winfield@gmail.com",
    role: "Operator",
    id: "868d42ef-7da3-4ef2-9d54-48806cfda56a",
  },
];

function mockCall() {
  axios.get.mockResolvedValueOnce({
    data: operatorsArray,
  });
}

const MockTableGenerator = ({
  data,
  errorStatus,
  giveMeData,
  handleDelete,
  setOpenModal,
}) => {
  return (
    <BrowserRouter>
      <TableGenerator
        data={data}
        error={{
          isError: errorStatus,
        }}
        loading={errorStatus}
        setOpenModal={setOpenModal}
        handleDelete={handleDelete}
        giveMeData={giveMeData}
      />
    </BrowserRouter>
  );
};

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

  it("Testing the table generator to see if it receive the array it is rendering the corresponding rows on the screen", async () => {
    render(<MockTableGenerator data={operatorsArray} />);
    const rows = screen.getAllByRole("row-group");
    expect(rows.length).toBe(operatorsArray.length);
  });
  it("should fetch all of the operators and render them", async () => {
    render(<MockTableGenerator data={operatorsArray} errorStatus={false} />);
    const operatorDivElements = await screen.findAllByRole("row-group");
    for (let operator of operatorDivElements) {
      expect(operator).toBeInTheDocument();
    }
  });
});

describe("Testing the new form rendering of the app", () => {
  it("should render the form for submitting the new operator created", () => {
    render(<NewOperatorForm />);
    const form = screen.getByRole("form");
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
  });

  it("the input element should change when someone types inside the text field", () => {
    render(<NewOperatorForm />);
    const inputEl1 = screen.getByPlaceholderText("Operator Email");
    const inputEl2 = screen.getByPlaceholderText("Operator Name");
    fireEvent.change(inputEl2, { target: { value: "fabrice" } });
    // fireEvent.select(selectElement[2], { target: { value: "Operator" } });
    fireEvent.change(inputEl1, { target: { value: "test@mail.com" } });
    expect(inputEl1.value).toBe("test@mail.com");
    expect(inputEl2.value).toBe("fabrice");
  });

  it("should popup the new form modal component when new operator button is clicked ", () => {
    render(
      // the component which includes link element from react-router-dom should be wrapped into
      // into the browser router component to mimic that behaviour in the test but where there is not the link
      // it does not matter to include browserRouter
      <BrowserRouter>
        <AdminOperator />
      </BrowserRouter>
    );
    const buttonEl = screen.getByRole("button", { name: "Create Operator" });
    fireEvent.click(buttonEl);
    const newForm = screen.getByTestId("new-form");
    expect(newForm).toBeInTheDocument();
  });

 it("edit form should typable and the change should happen when typed inside", async () => {
    mockCall();
  const addDataToUpdate = jest.fn()
  const setModalOpen = jest.fn()
  const setUpdate = jest.fn()
  render(<EditOperatorForm update= {operatorsArray[0]} setData = {addDataToUpdate}  setCloseUpdate={setUpdate}
          setOpenModal= {setModalOpen} />);
    const inputEl1 = screen.getByPlaceholderText("Operator Email");
    const inputEl2 = screen.getByPlaceholderText("Operator Name");
    expect(inputEl1.value).toBe("eric@gmail.com");
    expect(inputEl2.value).toBe("message");
    fireEvent.change(inputEl2, { target: { value: "fabrice" } });
    fireEvent.change(inputEl1, { target: { value: "testing@gmail.com" } });
    expect(inputEl1.value).toBe("testing@gmail.com");
    expect(inputEl2.value).toBe("fabrice");
 });


  it("the input element should be cleared if submit button is clicked", async() => {
  const data = {
    name: "fabrice",
    email: "gunpowder@mail.com",
    role: "Operator",
    id: "78015c34",
  };
      axios.post.mockResolvedValueOnce({
        data: data,
      });
    render(
      <BrowserRouter>
        <AdminOperator />
      </BrowserRouter>
    );
      const createButton = screen.getByRole("button", { name: "Create Operator" });
      fireEvent.click(createButton);
      const newForm = screen.getByTestId("new-form");
    const inputEl1 =  await screen.findByPlaceholderText("Operator Email");
    const inputEl2 =  await screen.findByPlaceholderText("Operator Name");
    const buttonEl = screen.getByRole("button", {name:"Save Operator"});
    const backButtonEl = screen.getByRole("button", {name:"Back"});
    fireEvent.change(inputEl2, { target: { value: "fabrice" } });
    fireEvent.change(inputEl1, { target: { value: "gunpowder@mail.com" } });
    fireEvent.click(buttonEl);

    fireEvent.click(backButtonEl);
    expect(newForm).not.toBeInTheDocument();
  });

 it("should delete the component when delete button icon is clicked ", async () => {
    const captureDataForUpdate = jest.fn();
    const deleteHandle = jest.fn();
    const setModalOpen = jest.fn();
    render(
      <MockTableGenerator
        data={operatorsArray}
        handleDelete={deleteHandle}
        giveMeData={captureDataForUpdate}
        setOpenModal={setModalOpen}
      />
    );
     const deleteButtonEl = await screen.findByTestId("row-delete-1");
        fireEvent.click(deleteButtonEl);  
     await waitFor(() => {
         expect(deleteHandle).toHaveBeenCalled();
         expect(deleteHandle).toHaveBeenCalledTimes(1);
         expect(captureDataForUpdate).toHaveBeenCalledTimes(0);
       });
  ;
   });
 
})
