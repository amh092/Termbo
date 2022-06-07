import React from 'react'
import {useState} from 'react'
import NotificationsIcon from '../../../assets/notification.svg'
import classes from './Notification.module.css'
const Notifications = () => {

    const [unreadNotifications, setUnreadNotifications] = useState(false);


    return (
        <div className={classes['notification-icon']}>
            <img src={NotificationsIcon} alt={'notification icon '}/>
            {unreadNotifications && <span className={classes.alert}>.</span>}
        </div>
    )
}

export default Notifications
