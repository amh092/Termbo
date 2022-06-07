import React from 'react'
import classes from './Logo.module.css'

const Logo = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.logo}>T</h1>
            <h1 className={classes.brand}>Trembo</h1>
        </div>
    )
}

export default Logo
