// CounterEdgeCase.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Counter from './Counter';

it('handles no initialCount prop', () => {
  const { getByText } = render(<Counter />);
  expect(getByText('Count: 0')).toBeInTheDocument();
});
