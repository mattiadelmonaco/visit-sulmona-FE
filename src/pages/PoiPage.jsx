import { useState, useEffect } from "react";
import axios from "../api/axios";
import ListPoiComp from "../components/ListPoiComp";
import { useSearchParams } from "react-router";

export default function PoiPage() {
  const [poiList, setPoiList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const limitFromUrl = parseInt(searchParams.get("limit")) || 10;
  const [limit, setLimit] = useState(limitFromUrl);
  const [totalPoi, setTotalPoi] = useState(0);

  const fetchEveryPoi = () => {
    axios
      .get(`${import.meta.env.VITE_BE_URL}/poi?limit=${limit}`)
      .then((res) => {
        setTotalPoi(res.data.totalPoi);
        setSearchParams({ limit });
        setPoiList(res.data.data);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchEveryPoi, [limit]);

  if (isLoading) {
    return (
      <div className="mt-20 flex items-center justify-center text-4xl">
        <i className="fa-solid fa-circle-notch fa-spin fa-3x text-[#99031e]"></i>
      </div>
    );
  }

  return (
    <>
      <div className="container px-10 mx-auto">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-red-700 py-10">
          Tutte le Attrazioni e Attività che trovi in città
        </h1>
        <ListPoiComp poiList={poiList} />

        <div className="flex justify-center gap-4 my-8">
          <button
            className={`${
              limit <= 10 ? "hidden" : ""
            } px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors duration-200 font-medium cursor-pointer`}
            onClick={() => setLimit(limit - 10)}
          >
            -10
          </button>

          <button
            className={`${
              limit >= totalPoi ? "hidden" : ""
            } px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors duration-200 font-medium cursor-pointer`}
            onClick={() => setLimit(totalPoi)}
          >
            Mostra tutti
          </button>

          <button
            className={`${
              limit >= totalPoi ? "hidden" : ""
            } px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors duration-200 font-medium cursor-pointer`}
            onClick={() => setLimit(limit + 10)}
          >
            +10
          </button>
        </div>
      </div>
    </>
  );
}
