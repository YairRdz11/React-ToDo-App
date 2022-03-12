import React from "react";

import { TodoButton } from "../TodoButton";
import {TodoCounter} from '../TodoCounter'
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
    }) {

    return(
        <React.Fragment>
        <TodoCounter 
            total={totalTodos}
            completed={completedTodos}
        />
        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
        <TodoList>
            {loading && <p>Cargando...</p>}
            {error && <p>Hubo un error...</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO...</p>}
            {searchedTodos.map(todo=>(
            <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}
            />
            ))}
        </TodoList>
        <TodoButton/>
        </React.Fragment>
  );
}

export {AppUI};