import React, {useState} from 'react'
import { HiDotsHorizontal, HiOutlineTranslate, HiOutlineThumbUp, HiOutlineThumbDown, HiOutlineChat } from "react-icons/hi";
import { IoIosTime, IoMdShareAlt } from "react-icons/io";
import {Komentar} from './index'

function PostCard({data}) {
    const [showKomenDialog, setShowKomenDialog] = useState(false)
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 pb-12 mb-2">
        <div className='flex w-full items-center gap-2'>
            <img src={data?.photoUser} className="w-10 rounded-[50%]"/>
            <div className="flex items-center justify-between w-full">

                <div className="flex gap-2 items-start justify-center flex-row">
                    <div className="flex flex-col">
                        <p className="font-semibold">{data?.pengguna}</p>
                        <p className="text-[12px]">{data?.negara}</p>
                    </div>
                    <div className="flex justify-center items-center p-2">
                        <IoIosTime className="text-gray-400 hidden md:inline" fontSize={8}/>
                        <p className="text-gray-400 text-xs">{data?.waktu}</p>
                    </div>
                </div>

                <p><HiDotsHorizontal/></p>
            </div>
        </div>
        <div className="px-12 my-2">
            <h3 className="font-semibold">{data?.judul}</h3>
            <div className="flex gap-2">
                {data.kategori.map((e) => (
                    <button key={e.id} className="text-white font-semibold px-3 bg-[#73CE71] rounded-[16px] text-center ">{e.nama}</button>
                ))}
            </div>
            <p className="text-justify">{data?.isi}</p>
            <div className="mt-8 flex justify-between items-center cursor-pointer w-[150px] bg-gray-400 px-4 rounded-xl">
                <HiOutlineTranslate/>
                <div>
                    <p className="font-semibold">Terjemahkan</p>
                </div>
            </div>

            <div className="flex justify-between my-4">
                <div className="flex gap-4 ">
                    <HiOutlineThumbUp fontSize={24}/>
                    <HiOutlineThumbDown fontSize={24}/>
                    <HiOutlineChat fontSize={24} onClick={() => setShowKomenDialog(!showKomenDialog)}/>
                </div>
                <div className=''>
                    <IoMdShareAlt fontSize={24}/>
                </div>
            </div>
            {showKomenDialog && (
                <Komentar komen={data.komentar}/>
            )}
        </div>
    </div>
  )
}

export default PostCard