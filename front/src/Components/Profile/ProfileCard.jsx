import React from "react";
import { IoIosShareAlt } from "react-icons/io";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { postingan } from "../../Data";
import { PostCard } from "../Main";

function ProfileCard() {
  const isActive = ('font-semibold')
  return (
    <div>
      {/* ----------------- */}
      <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 pb-12 mb-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <img
              src="https://th.bing.com/th/id/R.7b706e3071f6675d65be80d25c003bee?rik=41tsYANIWMohfA&riu=http%3a%2f%2fcpiml.net%2fsites%2fdefault%2ffiles%2f2020-05%2fMarx.png&ehk=abUmhVLk%2bDbcUTind8rgzYT6sn7a8OEsaj%2byEqdLbjk%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              className="w-[160px] rounded-full"
            />
          </div>
          <div className="flex w-full items-center flex-col gap-y-2">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-[16px] font-semibold">Karl Marx</h3>
              <IoIosShareAlt />
            </div>
            <div className="flex justify-start rounded-lg p-1 items-baseline w-full bg-gray-200 min-h-[50px] overflow-y-hidden">
              <p className="text-[10px]">Saya memiliki cita-cita yang tinggi</p>
            </div>
            <div className="flex w-full justify-start items-center flex-row gap-x-2">
              <p className="text-[12px]">
                <span className="font-semibold">
                  10000000000000000000000000000000000{" "}
                </span>
                Pengikut
              </p>
              <p className="text-[12px]">
                <span className="font-semibold">2 </span>Mengikuti
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------- */}
      <div className="bg-white shadow-lg rounded-lg p-4 md:p-4 py-5 mb-2 flex justify-start items-center gap-2">
        <Link to={'/profile/postingan'} className={""}>Postingan</Link>
        <Link to={'/profile/disukai'} className={""}>Postingan</Link>
      </div>

      {postingan?.map((data) => (
                    <PostCard data={data} key={data.id}/>
                ))}

    </div>
  );
}

export default ProfileCard;
