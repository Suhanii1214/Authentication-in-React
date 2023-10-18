import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Register } from './components/Register'
import { Password } from './components/Password'
import { Recovery } from './components/Recovery'
import { Profile } from './components/Profile'
import { Reset } from './components/Reset'
import { PageNotFound } from './components/PageNotFound'
import Username from './components/Username'

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Username/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/password' element={<Password/>}/>
            <Route path='/recovery' element={<Recovery/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/reset' element={<Reset/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

