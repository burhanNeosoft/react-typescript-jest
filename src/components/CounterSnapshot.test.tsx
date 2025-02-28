import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter', () => {
  it('matches snapshot', () => {
    const { container } = render(<Counter initialCount={5} />);
    expect(container).toMatchSnapshot();
  });
});