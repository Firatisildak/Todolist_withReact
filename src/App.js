import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';


const tema = {
  dark: {
    color: "white",
    backgroundColor: "black"
  },
  light: {
    color: "black",
    backgroundColor: "white"
  }
};

export const TemaVerisi = React.createContext();

function App() {

  const [deger, setDeger] = useState(tema.dark);
  
  function degistir(){
    if(tema.dark===deger){
      setDeger(tema.light);
    }else{
      setDeger(tema.dark);
    }
  }

  return (
    <div className="App">
      <button onClick={degistir}>
        {tema.dark===deger ? "Açık" : "Koyu"}
      </button>
      <TemaVerisi.Provider value={deger}>
        <TodoList />
      </TemaVerisi.Provider>
    </div>
  );
}

export default App;
