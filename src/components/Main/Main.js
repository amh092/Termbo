import React from 'react'
import classes from './Main.module.css'
import Dashboard from '../Dashboard/Dashboard'

import {Route,Routes} from 'react-router-dom'
import Home from '../Home/Home'
import Tasks from '../Tasks/Tasks'
import Settings from '../Settings/Settings'
const Main = () => {
    return (
        <div className={classes.main}>
     <Routes>
     <Route path='/home' element={<Home/>}></Route>
     <Route path='/dashboard' element={<Dashboard/>}></Route>
     <Route path='/tasks' element={<Tasks/>}></Route>
     <Route path='/settings' element={<Settings/>}></Route>
     </Routes>
        </div>
    )
}

export default Main
