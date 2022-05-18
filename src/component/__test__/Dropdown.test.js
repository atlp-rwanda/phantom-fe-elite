import { render, screen} from '@testing-library/react';
import Dropdown from '../dashboard-layout/Dropdown';
import {BrowserRouter, Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import {createMemoryHistory} from 'history';
import { unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";

it('should redirect and update history', () => {
    const history = createMemoryHistory();
    render(<Router location={history.location} navigator={history}><Dropdown/></Router>);
    userEvent.click(screen.getByTestId("button2"));
    expect(history.location.pathname).toEqual('/');
});
it('should redirect and update history', () => {
    const history = createMemoryHistory();
    render(<Router location={history.location} navigator={history}><Dropdown/></Router>);
    userEvent.click(screen.getByTestId("button2"));
    expect(localStorage.clear());
});
it("should render something if it visible to the user",  () => {
    const history = createMemoryHistory();
    render(<Router location={history.location} navigator={history}><Dropdown/></Router>);
    expect(screen.getByText(/Settings/i)).toBeInTheDocument();
});
it("should render something if it visible to the user",  () => {
    const history = createMemoryHistory();
    render(<Router location={history.location} navigator={history}><Dropdown/></Router>);
    expect(screen.getByTestId("button1")).toBeInTheDocument();
});
it("should render something if it visible to the user",  () => {
    const history = createMemoryHistory();
    render(<Router location={history.location} navigator={history}><Dropdown/></Router>);
    expect(screen.getByTestId("button2")).toBeInTheDocument();
});
it("navigates home when you click the logo", () => {
  const root = document.createElement('div');
  document.body.appendChild(root);
  render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <Dropdown />
    </MemoryRouter>,
    root
  );
  act(() => {
    const goHomeLink = screen.getByTestId("button2")
    goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(document.body.textContent).toBe('SettingsLogout');
});
