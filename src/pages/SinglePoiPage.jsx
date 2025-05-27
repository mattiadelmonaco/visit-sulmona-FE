import axios from "../api/axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import SinglePoiComp from "../components/SinglePoiComp";

export default function SinglePoiPage() {
  const { id } = useParams();
  const [poi, setPoi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPoi = () => {
    axios
      .get(`${import.meta.env.VITE_BE_URL}/poi/${id}`)
      .then((res) => {
        setPoi(res.data.data);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => fetchPoi(), [id]);

  if (isLoading) {
    return (
      <div className="mt-20 flex items-center justify-center text-4xl">
        <i className="fa-solid fa-circle-notch fa-spin fa-3x text-[#99031e]"></i>
      </div>
    );
  }

  return (
    <div className="container px-10 mx-auto">
      <SinglePoiComp poi={poi} />
    </div>
  );
}
