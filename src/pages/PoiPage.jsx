import { useState, useEffect } from "react";
import axios from "../api/axios";
import ListPoiComp from "../components/ListPoiComp";

export default function PoiPage() {
  const [poiList, setPoiList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchEveryPoi = () => {
    axios
      .get(`${import.meta.env.VITE_BE_URL}/poi`)
      .then((res) => {
        setPoiList(res.data.data);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchEveryPoi, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center text-4xl">
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
      </div>
    </>
  );
}
