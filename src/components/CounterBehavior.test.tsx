// CounterBehavior.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

it('increments and decrements correctly', () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText('Increment');
  const decrementButton = getByText('Decrement');

  fireEvent.click(incrementButton);
  expect(getByText('Count: 1')).toBeInTheDocument();

  fireEvent.click(decrementButton);
  expect(getByText('Count: 0')).toBeInTheDocument();
});
