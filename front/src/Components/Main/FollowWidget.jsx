import React from 'react'
import { penggunaLain } from './../../Data'

function FollowWidget() {
  return (
    <>
    <div className="bg-white shadow-lg rounded-lg p-2 mb-8">
            <h3 className="font-semibold">Ikuti Seseorang</h3>
            {penggunaLain?.map((data) => (
              <div key={data.id} className="flex mt-0 w-full gap-2 border-b-2 pb-3 p-2 hover:bg-gray-100 w-min-[210px]">
                <img src={data.fotoprofile} className="w-8 h-8 rounded-[50%]" alt="" />
                <div className='flex flex-col'>
                    <p className="text-[14px] font-semibold">{data.nama}</p>
                    <p className="text-[10px]">{data.bio}</p>
                </div>
              </div>
            ))}
    </div>
    </>
  )
}

export default FollowWidget