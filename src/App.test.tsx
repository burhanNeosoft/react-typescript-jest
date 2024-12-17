// App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders header and Counter', () => {
    render(<App />);
    expect(screen.getByText('Welcome')).toBeInTheDocument();
    expect(screen.getByText('Count: 2')).toBeInTheDocument();
  });
});
