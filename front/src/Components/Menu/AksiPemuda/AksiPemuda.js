import React, { useEffect } from 'react'
import { useMainContext } from '../../../Context/Context'
import { dataKepemudaan } from '../../../Data/AksiPemuda'
import CardAksi from './CardAksi'

function AksiPemuda({url}) {
  // console.log(url)
  const {linkRoute, setLinkRoute} = useMainContext()
  useEffect(() => {
    setLinkRoute(url)
  },[linkRoute])
  return (
    <div>
      <div className="flex justify-start items-center mb-6 ">
        <p className="border-b-2 pr-6 border-black">Aksi Pemuda</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-12 '>
        <div className="md:col-span-7 col-span-1">
          {dataKepemudaan?.map((data) => (
            <CardAksi data={data} key={data.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AksiPemuda