import React from 'react'
import classes from './User.module.css'
import Calender from './Calender'
const User = () => {
    return (
        <div className={classes.user}>
        <h1> john doe </h1>
            <img src={'https://media.istockphoto.com/photos/who-knows-its-not-me-picture-id888034424'} alt={'person'}/>
            <h1>UX/UI</h1>
            <Calender/>
         
        </div>
    )
}

export default User
