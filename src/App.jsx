import { useState } from 'react';
import './App.css';
import Dondurucu from './components/Dondurucu';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Dondurucu />
    </>
  );
}

export default App;
