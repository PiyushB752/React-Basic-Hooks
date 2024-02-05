import React, { useState } from 'react';
import './App.css';
import Context from './components/context.jsx';

function App() {
  const [state, setState] = useState(true);
  const handleToggle = () => {
    setState((prevState) => !prevState);
  };
  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <Context />
    </ToggleTheme.Provider>
  );
}

export const ToggleTheme = React.createContext();
export default App;