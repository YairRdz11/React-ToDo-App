import React from "react";
import { AppUI } from "./AppUI";

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_v1');
  let parsedTodos;

  if(!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }
  else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    const stringifyedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifyedTodos);
    setTodos(newTodos);
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo=>todo.text === text);
    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    saveTodos(newTodos);
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
