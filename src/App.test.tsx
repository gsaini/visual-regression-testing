import React from 'react';
import { render, screen } from '@testing-library/react';
import { generateImage } from 'jsdom-screenshot';
import App from './App';

describe('App - Visual Regression Testing', () => {
  it('renders learn react link', async () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  
    expect(await generateImage()).toMatchImageSnapshot();
  });
})

