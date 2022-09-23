import React from 'react'
import { useMainContext } from '../../Context/Context';
import { postingan } from './../../Data/index';
import {PostCard, FollowWidget} from './index'

function Core() {
    const {showCari,setshowCari} = useMainContext()
  return (
    <>
        <div className="flex justify-start items-center mb-6 ">
            <p className="border-b-2 pr-6 border-black">Postingan Terbaru</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-12 "'>
            <div className='md:col-span-8 col-span-1'>
                {postingan?.map((data) => (
                    <PostCard data={data} key={data.id}/>
                ))}
            </div>
            <div></div>
                    
            <div className="hidden md:inline md:col-span-3 col-span-1 mb-[20px]">
                {/* <div className='md:sticky relative mb-[1000px]'>ss</div> */}
                {!showCari && (
                    <div className=''>
                        <FollowWidget/>
                    </div>
                )}
            </div>
        </div>
    </>
  )
}

export default Core