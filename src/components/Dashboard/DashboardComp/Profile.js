import React from 'react'
import classes from './Profile.module.css'
import User from '../../Users/User'
const Profile = () => {
    return (
        <div className={classes.profile}>
            <User/>
        </div>
    )
}

export default Profile
