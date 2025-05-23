import { Link } from "react-router";

export default function ListPoiComp({ poiList }) {
  return (
    <>
      <div className="container mx-auto p-8 bg-neutral-100 rounded-lg shadow-xl shadow-gray-400 mb-15">
        {poiList.length === 0 ? (
          <div className="text-center text-red-800 text-4xl font-bold">
            <h2>Nessuna attrazione o attività registrata</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {poiList.map((poi) => (
              <div
                key={poi.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  {poi.first_image ? (
                    <Link to={`/single-poi/${poi.id}`}>
                      <img
                        className="w-full h-full object-cover transition duration-900 hover:scale-120 cursor-pointer"
                        src={`${import.meta.env.VITE_BE_IMG_URL}${
                          poi.first_image
                        }`}
                        alt={`Immagine di copertina di ${poi.name}`}
                      />
                    </Link>
                  ) : (
                    <Link to={`/poi/${poi.id}`}>
                      <img
                        className="w-full h-full object-cover transition duration-900 hover:scale-120 cursor-pointer"
                        src="https://img.freepik.com/vettori-premium/vettore-icona-immagine-predefinita-pagina-immagine-mancante-per-la-progettazione-di-siti-web-o-app-per-dispositivi-mobili-nessuna-foto-disponibile_87543-11093.jpg"
                        alt="Immagine mancante"
                      />
                    </Link>
                  )}
                </div>
                <div className="py-3 px-4">
                  <div className="flex flex-col justify-between min-h-[400px]">
                    <div>
                      {poi.name && (
                        <Link to={`/poi/${poi.id}`}>
                          <h3 className="text-2xl font-bold mb-3 text-gray-800 transition duration-300 hover:text-red-700 hover:scale-105">
                            {poi.name}
                          </h3>
                        </Link>
                      )}
                      {poi.type && (
                        <p className="text-sm font-semibold text-gray-600 mb-2">
                          Tipologia: {poi.type.name}
                        </p>
                      )}

                      {poi.start_date || poi.end_date ? (
                        <p className="text-sm font-semibold text-gray-600 mb-2">
                          Periodo: {poi.start_date} - {poi.end_date}
                        </p>
                      ) : (
                        ""
                      )}
                      {poi.description && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {poi.description}
                        </p>
                      )}
                    </div>
                    <div
                      className={`space-y-2 px-3 py-1 ${
                        poi.phone_number || poi.email || poi.external_link
                          ? "border border-gray-200 rounded-md"
                          : ""
                      }  `}
                    >
                      {poi.phone_number || poi.email || poi.external_link ? (
                        <h3 className="text-gray-700">Contatti:</h3>
                      ) : (
                        ""
                      )}
                      {poi.phone_number && (
                        <p className=" text-blue-500 truncate">
                          <a
                            href={`tel:${poi.phone_number}`}
                            className="hover:text-blue-800"
                          >
                            <i className="fa-solid fa-phone"></i>{" "}
                            {poi.phone_number}
                          </a>
                        </p>
                      )}
                      {poi.email && (
                        <p className=" text-blue-500 truncate">
                          <a
                            href={`mailto:${poi.email}`}
                            className="hover:text-blue-800"
                          >
                            <i className="fa-solid fa-envelope"></i> {poi.email}
                          </a>
                        </p>
                      )}
                      {poi.external_link && (
                        <p className=" text-blue-500 truncate">
                          <a
                            href={poi.external_link}
                            className="hover:text-blue-800"
                          >
                            <i className="fa-solid fa-globe"></i>{" "}
                            {poi.external_link}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
