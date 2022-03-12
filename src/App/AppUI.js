import React from "react";

import { TodoButton } from "../TodoButton";
import {TodoCounter} from '../TodoCounter'
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

function AppUI({
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