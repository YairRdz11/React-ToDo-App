import React from 'react';
import { TodoContext } from '../TodoContext';
import './Form.css';

function TodoForm(){
    const [newTodoValue, setNewTodo] = React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodo(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Ir al Super'
            />
            <div>
                <button
                    className='TodoForm-button TodoForm-button-cancel'
                    type='button'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className='TodoForm-button TodoForm-button-add'
                    type='submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm}