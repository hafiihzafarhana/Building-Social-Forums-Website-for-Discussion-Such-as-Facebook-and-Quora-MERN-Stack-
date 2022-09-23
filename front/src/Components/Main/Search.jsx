import React from 'react'
import { IoCloseCircleOutline, IoSendOutline } from "react-icons/io5";
import { useMainContext } from '../../Context/Context';
import { useNavigate} from 'react-router-dom'


function Search({setshowSearch}) {
  const {setshowCari} = useMainContext()
  const navigate = useNavigate()
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-900 z-40'>
          <div className="relative bg-white text-black opacity-100 top-[10%] left-[10%] w-[80%] h-[10%]">
            <div className="absolute w-full">
              <input type="text" placeholder='Cari' className='border-none outline-none p-4 w-full' onFocus={() => navigate('/cari')}/>
            </div>
          </div>
            <div className="cursor-pointer absolute w-full text-white top-[25%] left-0 right-0 shadow-md">
              <div className="flex gap-5 items-center w-full justify-center">
                <IoCloseCircleOutline fontSize={40} onClick={() => setshowCari(false)}/>
                <IoSendOutline fontSize={40}/>
              </div>
            </div>
      </div>
  )
}

export default Search