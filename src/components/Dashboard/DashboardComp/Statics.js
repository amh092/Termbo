import React from 'react'
import classes from './Statics.module.css'
import LineChart from './../LineChart'
import User from '../../Users/User'
const Statics = () => {
    return (
        <div className={classes.statics}>
            <h1>your statistic<span> 19.3</span></h1> 
           
            <LineChart/>
        </div>
    )
}

export default Statics
