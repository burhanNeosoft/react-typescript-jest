// Counter.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('renders with initial count', () => {
    const { getByText } = render(<Counter initialCount={5} />);
    expect(getByText('Count: 5')).toBeInTheDocument();
  });

  it('increments the count', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('Increment');
    fireEvent.click(incrementButton);
    expect(getByText('Count: 1')).toBeInTheDocument();
  });

  it('decrements the count', () => {
    const { getByText } = render(<Counter initialCount={5} />);
    const decrementButton = getByText('Decrement');
    fireEvent.click(decrementButton);
    expect(getByText('Count: 4')).toBeInTheDocument();
  });
});
