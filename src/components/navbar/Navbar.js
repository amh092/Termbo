import React from 'react'
import classes from './Navbar.module.css'
import Logo from './../logo/Logo'
import AddTask from './AddTask'
import Home from '../../assets/home-2490.svg'
import Dashboard from '../../assets/dashboard-statistics-5491.svg'
import Tasks from '../../assets/list-6240.svg'
import Settings from '../../assets/settings-3110.svg'
import { NavLink} from 'react-router-dom'
const Navbar = () => {

    return (
        <div className={classes.navbar}>
            <Logo className={classes.logo}/>
            <ul>
                    <li><NavLink   to='/' 
                    className={
                        (isActive) =>
                        !isActive.isActive ? classes['nav-icon'] : classes['nav-icon-active']
                      } ><img src={Home} alt={'hin'}/>home</NavLink></li>
                    <li><NavLink  to='/dashboard'  className={
                        (isActive) =>
                        !isActive.isActive ? classes['nav-icon'] : classes['nav-icon-active']
                      }><img src={Dashboard} alt={'hin'}/>Dashboard</NavLink></li>
                    <li><NavLink   to='/tasks'  className={
                        (isActive) =>
                        !isActive.isActive ? classes['nav-icon'] : classes['nav-icon-active']
                      }><img src={Tasks} alt={'hin'}/>tasks</NavLink></li>
                    <li><NavLink to='/settings'  className={
                        (isActive) =>
                        !isActive.isActive ? classes['nav-icon'] : classes['nav-icon-active']
                      }><img src={Settings} alt={'hin'}/>settings</NavLink></li>
            </ul>
            <AddTask/>
        </div>
    )
}

export default Navbar
