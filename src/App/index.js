import logo from './platzi.webp';
import React from 'react';
import './App.css';
import { useLocalStorage } from '../components/TodoContext/useLocalStorage';
import { AppUI } from './AppUI';
import { TodoProvider } from '../components/TodoContext';


function App() {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );


}
export default App;