import React from 'react'
import {HiUserCircle, HiOutlineSearch, HiOutlineBell} from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { useMainContext } from '../../Context/Context';
import {Search} from './index'
import {Notifikasi} from './index'

function Navbar({width}) {
  // const [showSearch, setshowSearch] = useState(false)
  const {showCari, setshowCari, lostNotif, setLostNotif} = useMainContext()
  return (
    <>
    <div className='justify-end gap-2 md:gap-5 w-full mt-5 pb-[10px] md:flex hidden z-100'>
      <div className="flex items-center px-[24px]">
        <div className='px-1'>
          <HiOutlineSearch className="text-[24px] text-[#73CE71]" onClick={() => setshowCari(true)} />
        </div>
        <div className='px-1'>
          <div className='relative'>
            <div className='relative' onClick={() => setLostNotif(!lostNotif)}>
              <HiOutlineBell className="text-[24px] text-[#73CE71]"/>
              <p className="text-[8px] left-[16px] font-semibold absolute top-[16px] text-yellow-500">20</p>
            </div>
            {lostNotif && (
              <div className="w-[280px] min-h-[450px] bg-white rounded-lg absolute top-[50px] -right-12 drop-shadow-xl notifikasi-before shadow-md">
              <Notifikasi/>
            </div>
              )}
          </div>
        </div>
        <NavLink to={'/profile'}>
          <div className='px-1'><HiUserCircle fontSize={40} className="cursor-pointer text-gray-500"/></div>
        </NavLink>
      </div>
    </div>
    
    {showCari && (
      <Search />
    )}
    </>
  )
}

export default Navbar