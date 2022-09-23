import React, { useEffect } from "react";
import { useMainContext } from "../../../Context/Context";
import { DataBuku } from "../../../Data/Buku/Index";
import CardBuku from "./CardBuku";
import FilterWidget from "./FilterWidget";

function Buku({ url }) {
  const { linkRoute, setLinkRoute, showCari } = useMainContext();
  useEffect(() => {
    setLinkRoute(url);
  }, [linkRoute, url]);
  return (
    <div>
      <div className="flex justify-start items-center mb-6 ">
        <p className="border-b-2 pr-6 border-black">Buku</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <div className="col-span-1 md:col-span-8 md:grid grid-cols-3 gap-2">
          {DataBuku.map((data) => (
            <div key={data.id}>
              <CardBuku key={data.id} data={data} />
            </div>
          ))}
        </div>
          {!showCari && (
            <>
              <div></div>
              <div className="hidden md:inline md:col-span-3 col-span-1 mb-[20px]">
                <FilterWidget />
              </div>
            </>
          )}
      </div>
    </div>
  );
}

export default Buku;
