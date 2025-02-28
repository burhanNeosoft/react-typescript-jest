// UserList.tsx
import React, { useEffect, useState } from 'react';

/* export const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}; */

export interface User {
  id: number;
  name: string;
}

export async function fetchUsers(): Promise<User[]> {
  // Simulate an API call
  return new Promise((resolve) =>
    setTimeout(() => resolve([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]), 500)
  );
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
