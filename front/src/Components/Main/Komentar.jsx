import React from "react";
import { IoIosTime } from "react-icons/io";

function Komentar({komen}) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <img
          src="https://st4.depositphotos.com/1049680/20109/i/950/depositphotos_201090718-stock-photo-handsome-middle-age-man-happy.jpg"
          className="w-10 h-10 rounded-[50%]"
          alt=""
        />
        <textarea
          type="text"
          className="hide-scrollbar w-full mx-4 p-1 border-none outline-none bg-[whitesmoke] rounded-xl"
        />
        <div>Kirim</div>
      </div>
      <hr className="border-[2px] border-gray-200 mt-2" />

      {komen?.map((data) => (
      <div key={data.id} classname="flex items-center my-10 bg-black justify-center">
        <div className="flex gap-2">
          <img
            src={data.photoUser}
            className="w-10 h-10 rounded-[50%]"
            alt=""
          />

          <div className="flex items-center flex-col">
            <div className="flex items-center gap-2 justify-start w-full flex-col">
              <div className="flex gap-2">
                <p className="font-semibold">{data.namaPengguna}</p>
                <div className="flex items-center">
                  <IoIosTime
                    className="text-gray-400 hidden md:inline"
                    fontSize={8}
                  />
                  <p className="text-gray-400 text-xs">{data.tanggal}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-start w-full">
              {data.pesan}
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Komentar;
