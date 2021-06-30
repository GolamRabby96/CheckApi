import logo from './logo.svg';
import './App.css';
import CheckApi from './component/CheckApi/CheckApi';
import NavBar from './component/NavBar/NavBar';
import { createContext, useState } from 'react';

export const userContext = createContext();

function App() {
  const [subDataCollention, setsubDataCollention] = useState([])
  return (
       <userContext.Provider value={[subDataCollention, setsubDataCollention]}>
        <NavBar/>
        <CheckApi></CheckApi>
      </userContext.Provider>
  );
}

export default App;
