import React from 'react'
import settingsIcon from '../../../assets/settings-dashabord.svg'
import classes from './DashboardSettings.module.css'
const DashboardSettings = () => {
    return (
        <div className={classes['settings-icon']}>
            <img src={settingsIcon} alt={'settings icon'}/>
        </div>
    )
}

export default DashboardSettings
