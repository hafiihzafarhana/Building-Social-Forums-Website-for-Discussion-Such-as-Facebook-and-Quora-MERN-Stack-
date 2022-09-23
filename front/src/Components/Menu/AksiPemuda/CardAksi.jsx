import React, {useState} from 'react'

function CardAksi({data}) {
    const [loadMore, setLoadMore] = useState(false)
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 pb-12 mb-2">
        <div className='flex'>
            <div className="flex">
                <img src={data.gambarNegara} className="w-10 h-10 rounded-[50%] border-2 border-gray-200" />
            </div>
            <div className='flex items-center px-1'>
                <div>
                    <h3 className="font-semibold text-[14px]">{data.negara}</h3>
                </div>
            </div>
        </div>
        
        <div className="px-11 flex flex-col">
            <div className="flex flex-row gap-1">
                <h3 className="text-[10px] text-[#73CE71] font-semibold">Waktu : </h3>
                <h3 className="text-[10px] text-gray-400">{data.tanggalDaftar}</h3>
                <h3 className="text-[10px] text-gray-400"> - </h3>
                <h3 className="text-[10px] text-gray-400">{data.tanggalDaftarDeadline}</h3>
            </div>
            <div className="pt-2">
                <h3 className="font-semibold text-[14px]">{data.namaKegiatan}</h3>
            </div>
            <div className="text-justify">
                <h3>{data.detail.length > 100 ? 
                (
                <div>
                    {!loadMore ? (
                        <div>
                            <p className="text-[12px]">{data.detail.slice(0,100)}
                                <span onClick={() => setLoadMore(true)} className="text-[12px] text-[#73CE71]"> Klik Detail</span>
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <p className="text-[12px]">{data.detail}
                                <span onClick={() => setLoadMore(false)} className="text-[12px] text-[#73CE71]"> Perkecil</span>
                            </p>
                            <div className="flex gap-2 pt-2">
                                <h3 className="text-[10px] text-[#73CE71]">Lokasi :</h3>
                                <h3 className="text-[10px] text-gray-400">{data.lokasi}</h3>
                            </div>
                        </div>
                    )}
                </div>
                ) : (
                    <div>
                        <h3 className="text-[12px]">{data.detail}</h3>
                    </div>
                )
                }</h3>
            </div>
            <div className='flex items-center text-[12px] text-gray-400 pt-2'>
                <p>Kuota :</p>
                <p>{data.kuota}</p>
            </div>
            <div className="pt-2">
                <button className="px-4 rounded-[12px] text-[12px] text-white font-semibold shadow-md bg-[#73CE71] ">Daftar</button>
            </div>
        </div>

    </div>
  )
}

export default CardAksi