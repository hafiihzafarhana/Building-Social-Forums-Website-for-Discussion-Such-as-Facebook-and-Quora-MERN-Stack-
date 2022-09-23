import React from "react";
import { HiX, HiOutlineBell } from "react-icons/hi";
import { useMainContext } from "../../Context/Context";

function Notifikasi() {
  const {setLostNotif} = useMainContext()
  return (
    <div>
      <div className="z-100 px-4 bg-[#73CE71] w-full py-2 shadow-lg rounded-t-lg">
        <HiX fontSize={24} className="text-white" onClick={() => setLostNotif(false)} />
        <div className="flex gap-x-1 pb-4 text-white font-semibold items-center justify-center">
          <HiOutlineBell fontSize={24} />
          <p className="text-[16px]">Notifikasi</p>
        </div>
      </div>

      <div className="px-4 mt-2">
        <p className="font-semibold text-[12px]">Notifikasi Terbaru</p>
      </div>

      <div className="flex gap-2 px-4 mt-2 w-full">
        <div className="">
          <img
            className="w-14 rounded-[50%]"
            src="https://www.transcend.org/tms/wp-content/uploads/2015/06/friedrich-engels2.jpg"
            alt=""
          />
        </div>

        <div className="flex justify-between w-full items-center flex-col">
          
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <p className="text-[14px] text-[#73CE71] font-semibold">
                Friedrich Engels
              </p>
              <p className="text-[12px]">Komentar di postingan</p>
            </div>
            <p className="text-[12px]">20:00</p>
          </div>

          <p className="text-[10px] text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit ...</p>

        </div>
      </div>
    </div>
  );
}

export default Notifikasi;
