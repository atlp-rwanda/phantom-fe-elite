import React from 'react';
import { render,screen} from '@testing-library/react';
import App from './App';

describe("display on landing page",()=>{

  test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement =getByText('Login Form');
    expect(linkElement).toBeInTheDocument();
  });
})

//add screen
