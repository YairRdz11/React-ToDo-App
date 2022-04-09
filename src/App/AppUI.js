import React from "react";

import { TodoButton } from "../TodoButton";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from '../TodoCounter'
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../Modal";

function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return(
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
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
            {openModal && (
                <Modal>
                    <p>Portalaaaaaaaaaaa</p>
                </Modal>
            )}
        <TodoButton
            setOpenModal={setOpenModal}
        />
        </React.Fragment>
  );
}

export {AppUI};