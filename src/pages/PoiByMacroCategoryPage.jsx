import axios from "../api/axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ListPoiComp from "../components/ListPoiComp";

export default function PoiByMacroCategoryPage() {
  const { macroCategory } = useParams();
  const [poiList, setPoiList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categoryName = {
    cultura: "Cultura e Storia",
    tempolibero: "Eventi e Tempo Libero",
    cibo: "Cibo e Bevande",
    ospitalita: "Ospitalità",
    commercio: "Commercio",
    comunità: "Servizi e Comunità",
    natura: "Natura e Outdoor",
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${import.meta.env.VITE_BE_URL}/poi/macro-category/${macroCategory}`)
      .then((res) => {
        setPoiList(res.data.data);
      })
      .finally(() => setIsLoading(false));
  }, [macroCategory]);

  if (isLoading)
    return (
      <div className="mt-20 flex items-center justify-center text-4xl">
        <i className="fa-solid fa-circle-notch fa-spin fa-3x text-[#99031e]"></i>
      </div>
    );

  return (
    <>
      <div className="container px-10 mx-auto">
        {poiList.length > 0 ? (
          <>
            <h1 className="text-3xl md:text-4xl text-center font-bold text-red-700 py-10">
              Risultati per la categoria "
              {categoryName[macroCategory] || macroCategory}"
            </h1>
            <ListPoiComp poiList={poiList} />
          </>
        ) : (
          <>
            <h1 className="text-3xl md:text-4xl text-center font-bold text-red-700 py-10 animate-bounce mt-3">
              Oops! Nessun risultato 🤔
              <p className="text-xl mt-2 text-gray-600">
                Prova un'altra categoria!
              </p>
            </h1>
            <div className="flex justify-center mb-5 w-full max-w-4xl mx-auto">
              <img
                src="/images/statua-di-ovidio.jpg"
                alt="Statua di Ovidio che pensa"
                className="rounded-lg shadow-2xl w-full h-[650px] object-cover object-[center_30%]"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
