import React from "react";
import { AppUI } from "./AppUI";

function useLocalStorage(itemName, initialValue){
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if(!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      }
      else{
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
      setLoading(false);
      }
      catch(error){
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try{
      const stringifyedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifyedItem);
    setItem(newItem);
    }
    catch(error){
      setError(error);
    }
  }

  return {
    item, 
    saveItem,
    loading,
    error
  };
}

function App() {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

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
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    saveTodos(newTodos);
  }

  console.log('Render before use effect');
  React.useEffect(() => {
    console.log('use effect');
  }, [totalTodos]);
  console.log('Render after use effect');

  return (
    <AppUI 
      loading= {loading}
      error = {error}
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
