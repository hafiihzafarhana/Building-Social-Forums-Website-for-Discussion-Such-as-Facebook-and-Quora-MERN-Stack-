import React, {useState, useRef, useEffect} from 'react'
import {Sidebar, Search} from './../Components/Main'
import {HiMenu, HiUserCircle, HiOutlineSearch, HiOutlineBell, HiChevronLeft} from 'react-icons/hi';
import { Routes, Route } from 'react-router-dom';
import Pins from './Pins'
import { useMainContext } from '../Context/Context';

function Home({url}) {
  const {showCari,setshowCari, linkRoute, setLinkRoute} = useMainContext()

  const [sideBar, setSideBar] = useState(false)
  const scrollRef = useRef(null);

  useEffect(() => {
    setLinkRoute(url)
  }, [linkRoute, url])

  useEffect(()=>{
    scrollRef.current.scrollTo(500,0)
  },[])
  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out'>
        <div className='hidden md:flex h-screen flex-initial'>
            <Sidebar/>
        </div>

        <div className='flex md:hidden flex-row'>
            <div className='p-2 w-full flex flex-row justify-between items-center shadow-md bg-[#73CE71]'>
                <HiMenu className="text-[48px] cursor-pointer text-white" onClick={() => setSideBar(!sideBar)} onBlur={()=>setSideBar(false)}/>

                <div className="absolute top-[6px] left-[64px]">
                  <p className="text-[24px] tracking-[0.185em] text-[#5C5C5C]">ASEAN</p>
                </div>

                <div className="absolute top-[30px] left-[64px]">
                  <p className="text-[16px] text-white">Youth Forum</p>
                </div>

                <div className="absolute right-[96px]">
                  <HiOutlineSearch className="text-[24px] text-white" onClick={() => setshowCari(true)}/>
                </div>

                <div className="absolute right-[64px]">
                  <HiOutlineBell className="text-[24px] text-white"/>
                </div>

                <HiUserCircle fontSize={40} className="cursor-pointer text-gray-500"/>
            </div>
            {/* Sidebar untuk versi mobile */}
            {sideBar && (
              <div className="fixed w-full bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in duration-75 ease-out">
                <div className="w-full flex justify-start items-center p-2">
                  {/* close icon */}
                  <HiChevronLeft fontSize={40} className="cursor-pointer" onClick={()=>setSideBar(!sideBar)}/>
                </div>
                <Sidebar pengguna={"Hafi Ihza Farhana"} closeButton={setSideBar}/>
              </div>
            )}

            {showCari && (
              <Search/>
            )}

        </div>
        <div className='pb-2 flex-1 h-screen overflow-y-auto' ref={scrollRef}>
        <div className='relative'>
        <Routes>
          <Route path="/*" element={<Pins/>}/>
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home