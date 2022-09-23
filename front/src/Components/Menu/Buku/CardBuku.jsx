import React from "react";

function CardBuku({ data }) {
  return (
      <div className="bg-white shadow-lg rounded-lg pb-2 mb-2">
        <div className="w-full h-[210px] overflow-hidden ">
          <img src={data.gambarBuku} className=" w-full object-cover rounded-lg object-top" alt="" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-[14px]">{data.namaBuku}</h3>
          <p className="font-semibold text-[12px] text-[#73CE71]">{data.namaPenulis}</p>
          <div className="flex text-[10px] text-gray-400 gap-2">
            <p>{data.namaPenulis}</p>
            <p>|</p>
            <p>{data.kategori}</p>
          </div>
        </div>
      </div>
  );
}

export default CardBuku;
