import React,{useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useMainContext } from '../../../Context/Context'
import { HiOutlineUser, HiChevronRight, HiOutlineViewGridAdd, HiOutlineLogout } from "react-icons/hi";

function Pengaturan({url}) {
  const {linkRoute, setLinkRoute} = useMainContext()
  useEffect(() => {
    setLinkRoute(url)
  },[linkRoute])
  return (
    <>
      <div className="flex justify-start items-center mb-2 ">
        <p className="border-b-2 pr-6 border-black">Pengaturan</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-12 py-2 shadow-lg rounded-lg'>
        <div className="md:col-span-12 col-span-1 bg-white p-4 ">
          
          <div className='flex flex-col gap-3 items-center'>
            <div className='flex gap-2 items-center border-b-2 w-full pb-2'>
              <HiOutlineUser fontSize={24}/>
              <p className='text-[16px] font-semibold'>Akun</p>
            </div>
            <div className='flex flex-col items-center w-full gap-4'>
              <div className='flex justify-between items-center w-full'>
                <p>Edit Profil</p>
                <HiChevronRight/>
              </div>
              <div className='flex justify-between items-center w-full'>
                <p>Ubah Password</p>
                <HiChevronRight/>
              </div>
              <div className='flex justify-between items-center w-full'>
                <p>Privasi</p>
                <HiChevronRight/>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-3 items-center pt-4'>
            <div className='flex gap-2 items-center border-b-2 w-full pb-2'>
              <HiOutlineViewGridAdd fontSize={24}/>
              <p className='text-[16px] font-semibold'>Lain-Lain</p>
            </div>
            <div className='flex flex-col items-center w-full gap-4'>
              <div className='flex justify-between items-center w-full'>
                <p>Negara</p>
                <p className='text-gray-400 md:text-[12px] text-[8px]'>(Merubah negara akan merubah bahasa)</p>
                <HiChevronRight/>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center mt-20 gap-2'>
            <HiOutlineLogout fontSize={24}/>
            <p className='text-[16px] font-semibold'>Keluar</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Pengaturan