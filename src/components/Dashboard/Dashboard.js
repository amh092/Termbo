import React from 'react'
import SearchBar from './DashboardComp/SearchBar'
import Notification from './DashboardComp/Notifications'
import classes from './Dashboard.module.css'
import DashboardSettings from './DashboardComp/DashboardSettings'
import Statics from './DashboardComp/Statics'
import Progress from './DashboardComp/Progress'
import DailyTasks from './DashboardComp/DailyTasks'
import Profile from './DashboardComp/Profile'


const Dashboard = () => {
 

    return (
        <div className={classes.dashboard}>
          <div className={classes.leftSide}>
              <div className={classes.SearchNotificationSettingsSection}>
                <SearchBar/>
                <Notification/>
                <DashboardSettings/>
              </div>

              <div className={classes.progressStaticsSection}>
                <Statics/>
                <Progress/>
               
                
              </div> 

              <div className={classes.dailyTasksSection}>
                <DailyTasks/>
              </div>
          </div>

          <div className={classes.rightSide}>
            <div className={classes.profileSection}>
              <Profile/>
            </div>
          </div>
        </div>
    )
}

export default Dashboard
