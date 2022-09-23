import React from "react";
import ProfileCard from "./ProfileCard";
import { NavLink, Route, Routes } from "react-router-dom";

function Profile() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <div className="md:col-span-8 col-span-1">
          {/* ----- */}
          <Routes>
            <Route path="/*" element={<ProfileCard/>}></Route>
          </Routes>
          {/* ----- */}
        </div>
        <div></div>
        <div className="hidden md:inline md:col-span-3 col-span-1 mb-[20px]">

        </div>
      </div>
    </div>
  );
}

export default Profile;
