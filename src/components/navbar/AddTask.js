import React from 'react'
import classes from './AddTask.module.css'
const AddTask = () => {

    const submitHandler = (e) => {
        e.preventDefault()

    }
    return (
        <div className={classes['add-task']}>
            <p>you can add more task for your daily </p>
            <button onClick={submitHandler}>+ Add task</button>
        </div>
    )
}

export default AddTask
