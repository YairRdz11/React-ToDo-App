import React from "react";
import './TodoButton.css';

function TodoButton(){
    const onClickButton = (msg) => {
        alert(msg);
    }
    return(
        <button 
        className="CreateTodoButton"
        onClick={() => onClickButton('Click')}
        >
            +
        </button>
    );
}

export {TodoButton};