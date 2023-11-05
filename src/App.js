import React, { useState, useEffect } from 'react';
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

export const TemaData = React.createContext();//Bu kod, oluşturulan bir TemaVerisi adında bir context'i export anahtar kelimesi ile dışarıya aktarır. Bu, context'i başka dosyalarda da kullanılabilir hale getirir. 

function App() {
  const [timer, setTimer] = useState(0);
  const [colorValue, setDeger] = useState(tema.dark);

  function ChangeTema() {
    if (tema.dark === colorValue) {
      setDeger(tema.light);
    } else {
      setDeger(tema.dark);
    }
  }

  useEffect(() => {

    if (timer !== -1) {
      const interval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer])
  return (
    <div className="App">
      <button className="buttonColor" onClick={ChangeTema}>
        {tema.dark === colorValue ? <><i className="fa-solid fa-sun"></i>  light mood</> : <><i className="fa-regular fa-moon"></i>  dark mood</>}
        <div style={{ height: "145px", width: "145px", backgroundColor: "blue", borderRadius: "50%", color: "white", fontSize: "60px", margin: "10px auto", lineHeight: "145px" }}>{timer}</div>
      </button>
      <TemaData.Provider value={colorValue}>
        <TodoList />
      </TemaData.Provider>
    </div>
  );
}

export default App;
