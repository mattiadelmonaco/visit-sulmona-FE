import axios from "../api/axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import SinglePoiComp from "../components/SinglePoiComp";

export default function SinglePoiPage() {
  const { id } = useParams();

  const [poi, setPoi] = useState([]);

  const fetchPoi = () => {
    axios.get(`${import.meta.env.VITE_BE_URL}/poi/${id}`).then((res) => {
      setPoi(res.data.data);
    });
  };

  useEffect(() => fetchPoi(), [id]);

  return (
    <>
      <div className="container px-10 mx-auto">
        <SinglePoiComp poi={poi} />
      </div>
    </>
  );
}
