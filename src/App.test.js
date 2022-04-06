import React from 'react';
import { render} from '@testing-library/react';
import App from './App';

describe("display on landing page",()=>{

  test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Welcome on React app');
    expect(linkElement).toBeInTheDocument();
  });
})
