import React, { Fragment } from "react";
import ToDoList from "./ToDoList";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className='main-header'>
        <h1>
          todo app <i class='fas fa-clipboard-list' />
        </h1>
        <p className='main-quote'>Bądź lepszą wersją siebie!</p>
      </div>
      <ToDoList />
    </Fragment>
  );
}

export default App;
