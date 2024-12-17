// App.tsx
import React from 'react';
import Counter from './components/Counter';

const App: React.FC = () => (
  <div>
    <h1>Welcome</h1>
    <Counter initialCount={2} />
  </div>
);

export default App;
