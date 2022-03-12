import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar curso de intro a React", completed: false },
  { text: "Aprender ingles", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }
  else{
    searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo=>todo.text === text);
    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    setTodos(newTodos);
  }

  return (
    <AppUI 
      totalTodos= {totalTodos}
      completedTodos= {completedTodos}
      searchValue= {searchValue}
      setSearchValue={setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
