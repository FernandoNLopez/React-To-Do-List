import React, { useState } from "react";
import '../stylesheets/Form.css';
import { v4 as uuidv4 } from 'uuid';


function HomeworkForm (props) {

    const [input, setInput] = useState('')


    const changeHandler = e => {
        setInput(e.target.value);
        console.log(e.target.value);

    }

    const sendHandler = e => {

        e.preventDefault();
       

        const newHomework = {
            id: uuidv4(),
            text: input,
            completed: false
        }

        props.onSubmit(newHomework);
    }

    return (
        <form className="form-homework" 
        onSubmit={sendHandler}>
            <input
            className="homework-input"
            type="text"
            placeholder="Escribe una tarea, por favor."
            name="texto"
            onChange={changeHandler}
            />
            <button className="homework-form-button">
                Agregar Tarea
            </button>
        </form>
    );

}

export default HomeworkForm;