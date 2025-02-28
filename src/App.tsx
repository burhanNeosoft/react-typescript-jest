// App.tsx
import React from 'react';
import Counter from './components/Counter';
import UserList from './components/UserList';

const App: React.FC = () => (
  <div>
    <h1>Welcome</h1>
    <Counter initialCount={2} />
    <UserList/>
  </div>
);

export default App;
