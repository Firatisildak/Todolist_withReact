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

export const TemaData = React.createContext();//Bu kod, oluşturulan bir TemaVerisi adında bir context'i export anahtar kelimesi ile dışarıya aktarır. Bu, context'i başka dosyalarda da kullanılabilir hale getirir. 

function App() {

  const [colorValue, setDeger] = useState(tema.dark);
  
  function ChangeTema(){
    if(tema.dark===colorValue){
      setDeger(tema.light);
    }else{
      setDeger(tema.dark);
    }
  }

  return (
    <div className="App">
      <button className="buttonColor" onClick={ChangeTema}>
      <i class="fa-regular fa-moon"></i> {tema.dark===colorValue ? "light mood" : "dark mood"}
      </button>
      <TemaData.Provider value={colorValue}>
        <TodoList />
      </TemaData.Provider>
    </div>
  );
}

export default App;
