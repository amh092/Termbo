import React from 'react'
import classes from './Progress.module.css'
import PieChart from '../PieChart'



const Progress = () => {
    return (
        <div className={classes.progress}>
        <h1>your progress</h1>
         <PieChart/>
        </div>
    )
}

export default Progress
