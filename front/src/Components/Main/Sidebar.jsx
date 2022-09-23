import React,{useState} from 'react'
import {Link, NavLink} from 'react-router-dom';
import { Menu, Kategori } from './../../Data';
import { useMainContext } from '../../Context/Context';

function Sidebar({pengguna, closeButton}) {
  const [kategori, setKategori] = useState(false)
  const {linkRoute} = useMainContext()
  const isNotActiveStyle = 'flex items-center px-5 text-gray-500 gap-3 hover:text-black transition-all duration-200 ease-in-out capitalize';
  // if active condition
  const isActiveStyle = "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black hover:text-black transition-all duration-200 ease-in-out capitalize font-extrabold";
  const handleCloseSidebar = () => {
    if(closeButton) closeButton(false)
  }
  return (
    <div className='flex flex-col justify-between overflow-y-scroll min-w-[280px] hide-scrollbar min-h-full shadow-md'>
      <div className='flex flex-col'>
        <div className='flex justify-center w-full items-center px-5 gap-2 pt-1 md:bg-[#73CE71] md:shadow-md'>
          <Link to="/">
              <img src={"https://1.bp.blogspot.com/-0nNRvyl7g6w/XKMMdKVPTeI/AAAAAAAACYI/6q19SNiO0Xs7zFt3rOE18sM95NmChwdywCLcBGAs/s1600/cropped-Logo-Asean-Youth-Forum-HR-01.png"} alt="logo" className='w-20 md:w-30 font-extrabold ' />
          </Link>
        </div>
        <div className="flex flex-col gap-5 px-5 my-5">
          {Menu.map((e) => (
          <NavLink to={`menu/${e.slug}`} key={e.nama} 
          className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle} onClick={handleCloseSidebar}
          // onClick={handleCloseSidebar}
          >
            {e.icon}
            <p className="mx-2 text-[16px]">{e.nama}</p>
          </NavLink>
          ))}
        </div>
        {/* <div className="flex flex-col mt-6">
          <div className="justify-center flex">
            <h3 className='text-[14px] font-semibold'>Filter</h3>
          </div>

          <div className="flex flex-col gap-2 px-5">
            <div onClick={() => setKategori(!kategori)} className="flex justify-between items-center cursor-pointer w-full bg-[whitesmoke] opacity-70 rounded-[6px] py-[8px] px-[10px]">
              <p>Kategori</p>
              <HiChevronDown fontSize={16}/>
            </div>
            <div className="relative">
              {kategori && (
                <ul className="absolute w-full z-50 max-h-28 bg-[whitesmoke] opacity-70 rounded-[6px] overflow-y-auto">
                {Kategori.map((e)=>(
                  <li key={e.nama} className="flex justify-between items-center w-full list-none cursor-pointer py-[8px] px-[10px] hover:bg-[gray]">
                  <img src={e.gambar} 
                  className='w-[36px] rounded-full' alt="" />
                  <p className='font-semibold'>{e.nama}</p>
                  </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

        </div> */}
      </div>
    </div>
  )
}

export default Sidebar