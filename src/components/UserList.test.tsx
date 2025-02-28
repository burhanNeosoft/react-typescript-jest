import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from './UserList';
import * as api from './UserList'; // Import the module to mock fetchUsers

// Mock the fetchUsers function
jest.spyOn(api, 'fetchUsers').mockImplementation(() =>
  Promise.resolve([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ])
);

it('fetches and displays users', async () => {
  render(<UserList />);
  // Wait for the mocked data to be displayed
  expect(await screen.findByText('Alice')).toBeInTheDocument();
  expect(await screen.findByText('Bob')).toBeInTheDocument();
});