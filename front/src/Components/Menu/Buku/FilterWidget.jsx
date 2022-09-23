import React, {useState} from "react";
import { HiChevronDown } from "react-icons/hi";
import { kategoriBuku } from "../../../Data/Buku/Index";

function FilterWidget() {
  const [dropKategori, setDropKategori] = useState(false)
  return (
    <div className="top-[100px]">
      <div className="bg-white shadow-lg rounded-lg p-2 mb-8">
        <h3 className="font-semibold pb-2">Filter</h3>
        <input type="text" className="w-full text-[12px] outline-none border-b-[1px] border-gray-400 text-gray-400" placeholder="Cari buku ..." name="" id="" />
        <div className="flex py-4 flex-col">
          <div className="flex justify-between w-full ">
            <p>Kategori</p>
            <HiChevronDown onClick={() => setDropKategori(!dropKategori)} />
          </div>
          {dropKategori && (
              <div className="my-2">
                {kategoriBuku.map((data) => (
                  <button
                    key={data.id}
                    className="m-1 inline-block px-4 font-semibold bg-gray-300 hover:bg-[#73CE71] text-[12px] text-white rounded-[12px]"
                  >
                    {data.nama}
                  </button>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default FilterWidget;
