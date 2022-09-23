import React, { useEffect } from "react";
import { useMainContext } from "../../../Context/Context";
import { DataLomba } from "../../../Data/Lomba/index.js";
import CardLomba from "./CardLomba";
import FilterWidget from "./FilterWidget";

function Lomba({ url }) {
  const { linkRoute, setLinkRoute, showCari } = useMainContext();
  useEffect(() => {
    setLinkRoute(url);
  }, [linkRoute, url]);
  return (
    <>
      <div className="md:hidden sticky -top-1 mb-4 bg-white w-full">
        <p className="border-b-2 pr-6 border-black">Buku</p>
      </div>
      <div className="flex justify-start items-center mb-2 ">
        <p className="border-b-2 pr-6 border-black">Perlombaan</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-12 '>
        <div className="md:col-span-7 col-span-1">
          {DataLomba?.map((data) => (
            <CardLomba data={data} key={data.id}/>
          ))}
        </div>
        {!showCari && (
        <>
        <div></div>
          <div className="hidden md:inline md:col-span-4 col-span-1 mb-[20px]">
                <FilterWidget />
          </div>
        </>
        )}
      </div>
    </>
  );
}

export default Lomba;
