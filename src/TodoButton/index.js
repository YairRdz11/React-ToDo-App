import React from "react";
import './TodoButton.css';

function TodoButton(props){
    const onClickButton = () => {
        props.setOpenModal(true);
    }
    return(
        <button 
        className="CreateTodoButton"
        onClick={onClickButton}
        >
            +
        </button>
    );
}

export {TodoButton};