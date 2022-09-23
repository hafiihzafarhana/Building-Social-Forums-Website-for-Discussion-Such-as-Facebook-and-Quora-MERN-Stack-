import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Profile from '../Components/Profile/Profile'
import { Menu } from '../Data'
import {Navbar, Core} from './../Components/Main/index'

function Pins() {
  return (
    <div className='relative'>
      <div className="bg-gray-50 flex top-0 left-0 w-full sticky shadow-md">
        <Navbar />
      </div>
      <div className='h-full p-5 z-0 z-90'>
        <Routes>
          <Route path={'/*'} element={<Core/>}/>
          {Menu.map((data) => (
              <Route key={data.slug} path={`/menu/${data.slug}`} element={data.element}/>
          ))}
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/cari'} element={''}/>
        </Routes>
      </div>
    </div>
  )
}

export default Pins