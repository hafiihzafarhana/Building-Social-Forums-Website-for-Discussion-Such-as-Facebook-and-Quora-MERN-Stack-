import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { Negara } from "../../../Data";

function FilterWidget() {
  const [dropNegara, setDropNegara] = useState(false);
  const [dropJenis, setDropJenis] = useState(false);
  const [dropStatus, setDropStatus] = useState(false);
  return (
    <div className="top-[100px] md:z-10 hidden md:inline-block w-full">
    <div className="bg-white shadow-lg rounded-lg p-2 mb-8">
      <h3 className="font-semibold">Filter</h3>
      <div className="flex flex-col pt-2 gap-y-2">
        {/* Negara */}
        <div className="flex items-center flex-col justify-between w-full gap-y-4">
          <div className="flex justify-between w-full flex-col border-b-2 pb-4">
            <div className="flex items-center justify-between w-full">
              <p>Negara</p>
              <HiChevronDown onClick={() => setDropNegara(!dropNegara)} />
            </div>
            {dropNegara && (
              <div className="my-2">
                {Negara.map((data) => (
                  <button
                    key={data.id}
                    className="m-1 inline-block px-4 font-semibold bg-gray-300 hover:bg-[#73CE71] text-[12px] text-white rounded-[12px]"
                  >
                    {data.negara}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-between w-full flex-col border-b-2 pb-4">
            {/* Status */}
            <div className="flex items-center justify-between w-full">
              <p>Status</p>
              <HiChevronDown onClick={() => setDropStatus(!dropStatus)} />
            </div>
            {dropStatus && (
              <div className="my-2">
                <button className="m-1 inline-block px-4 font-semibold bg-gray-300 hover:bg-[#73CE71] text-[12px] text-white rounded-[12px]">
                  Online
                </button>
                <button className="m-1 inline-block px-4 font-semibold bg-gray-300 hover:bg-[#73CE71] text-[12px] text-white rounded-[12px]">
                  Offline
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-between w-full flex-col border-b-2 pb-4">
            {/* Status */}
            <div className="flex items-center justify-between w-full">
              <p>Jenis</p>
              <HiChevronDown onClick={() => setDropJenis(!dropJenis)} />
            </div>
            {dropJenis && (
              <div className="my-2">
                <button className="m-1 inline-block px-4 font-semibold bg-gray-300 hover:bg-[#73CE71] text-[12px] text-white rounded-[12px]">
                  Tim
                </button>
                <button className="m-1 inline-block px-4 font-semibold bg-gray-300 hover:bg-[#73CE71] text-[12px] text-white rounded-[12px]">
                  Individu
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default FilterWidget;
