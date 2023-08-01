import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import TodoList from './components/TodoList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Simple TODO LIST</h1>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <TodoList />
    </>
  );
}

export default App;
