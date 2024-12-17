/* // CounterSnapshot.test.tsx
import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './Counter';

it('matches the snapshot', () => {
  const tree = renderer.create(<Counter initialCount={5} />).toJSON();
  expect(tree).toMatchSnapshot();
});
 */

export {}