// UserList.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from './UserList';

jest.mock('./UserList', () => ({
  fetchUsers: jest.fn(() => Promise.resolve(['Alice', 'Bob'])),
}));

it('fetches and displays users', async () => {
  render(<UserList />);
  expect(await screen.findByText('Alice')).toBeInTheDocument();
  expect(await screen.findByText('Bob')).toBeInTheDocument();
});
