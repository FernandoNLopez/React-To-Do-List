import React, { useState } from "react";
import HomeworkForm from "./Form";
import '../stylesheets/HomeworkList.css';
import Tarea  from "./Tareas";
import { act } from "react-dom/test-utils";


function HomeworkList() {

    const [homeworks, SetHomeworks] = useState([]);

    const sumHomework = homework => {
        if (homework.text.trim()){
            homework.text = homework.text.trim();

            const actHomeworks = [homework, ...homeworks];
            SetHomeworks(actHomeworks);
        }
    };

    const deleteHomework = id => {
        const actHomeworks = homeworks.filter(homework => homework.id !== id);
        SetHomeworks(actHomeworks);

    };


    const completeHomework = id => {
        const actHomeworks = homeworks.map(homework => {
            if (homework.id === id) {
                homework.completed = !homework.completed;
            }
            return homework;
        });
        SetHomeworks(actHomeworks);
    };

    return (
        <div>
            <>
            <HomeworkForm onSubmit={sumHomework}/>
            <div className="homework-list-container">
                {
                    homeworks.map((homework) => 
                    <Tarea 
                           key={homework.id}
                           id={homework.id}
                           text={homework.text}
                           completed={homework.completed} 
                           completeHomework={completeHomework}
                           deleteHomework={deleteHomework}
                    />
                    )
                }
            </div>
            </>
        </div>
    );
}

export default HomeworkList;