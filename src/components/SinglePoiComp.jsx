import { useState, useEffect } from "react";
import TimeTableComp from "./TimeTableComp";

export default function SinglePoiComp({ poi }) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  // per aprire modale immagine
  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  // per bloccare scorrimento della pagina quando la modale è aperta
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div className="bg-gray-100 py-8 my-10 rounded-2xl shadow-xl">
        <div className="container mx-auto px-4 md:px-10 max-w-7xl">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2 animate-slide-left">
              {/* nome e tipologia */}
              <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-6">
                {poi.name && (
                  <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-2 md:mb-0">
                    {poi.name}
                  </h1>
                )}
                {poi.type && (
                  <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full">
                    {poi.type.name}
                  </span>
                )}
              </div>

              {/* tag */}
              {poi.tags ? (
                <div className="flex flex-wrap gap-2 items-center mb-6 text-white">
                  {poi.tags.map((tag) => (
                    <div
                      key={tag.id}
                      style={{ backgroundColor: tag.color }}
                      className="px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                    >
                      <i className="fa-solid fa-hashtag"></i> {tag.name}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-red-700 mb-6">Nessun tag associato</p>
              )}

              {/* immagine copertina */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                {poi.first_image ? (
                  <img
                    src={`${import.meta.env.VITE_BE_IMG_URL}${poi.first_image}`}
                    alt={`Immagine di copertina di ${poi.name}`}
                    className="w-full h-[400px] object-cover"
                  />
                ) : (
                  <img
                    className="w-full h-[400px] object-cover"
                    src="https://img.freepik.com/vettori-premium/vettore-icona-immagine-predefinita-pagina-immagine-mancante-per-la-progettazione-di-siti-web-o-app-per-dispositivi-mobili-nessuna-foto-disponibile_87543-11093.jpg"
                    alt="Immagine mancante"
                  />
                )}
              </div>

              {/* galleria immagini */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Galleria immagini
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {poi.images.length > 0 ? (
                    poi.images.map((image) => (
                      <div
                        key={image.id}
                        className="rounded-lg overflow-hidden shadow-md"
                        onClick={() => openModal(image)}
                      >
                        <img
                          src={`${import.meta.env.VITE_BE_IMG_URL}${
                            image.path
                          }`}
                          alt={`Immagine della galleria di ${poi.name}`}
                          className="w-full h-48 object-cover transition duration-900 hover:scale-120 cursor-pointer"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2">
                      <p className="text-gray-500">Nessuna immagine presente</p>
                    </div>
                  )}
                </div>
              </div>

              {/* descrizione */}
              {poi.description && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Descrizione</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {poi.description}
                  </p>
                </div>
              )}

              {/* orari */}
              <div className="mb-8">
                {poi.days_of_week && <TimeTableComp days={poi.days_of_week} />}
              </div>
            </div>

            <div className="lg:col-span-1 animate-slide-right">
              {/* periodo e contatti */}
              <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6 mb-8">
                {/* periodo evento se presente */}
                {poi.start_date || poi.end_date ? (
                  <div className=" bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-2">
                      <i class="fa-solid fa-calendar-days"></i> Periodo:
                    </h3>
                    <p className="text-gray-700">
                      <strong>dal </strong>
                      {poi.start_date} <strong>al </strong>
                      {poi.end_date}
                    </p>
                  </div>
                ) : null}
                {poi.address && (
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-2">
                      <i className="fa-solid fa-location-dot"></i> Indirizzo
                    </h3>
                    <p className="text-gray-700">{poi.address}</p>
                  </div>
                )}

                {poi.phone_number && (
                  <div className="bg-white p-4 rounded-lg shadow-sm truncate">
                    <h3 className="text-lg font-semibold mb-2">
                      <i className="fa-solid fa-phone"></i> Telefono
                    </h3>
                    <p className=" text-blue-500 truncate">
                      <a
                        href={`tel:${poi.phone_number}`}
                        className="hover:text-blue-800"
                      >
                        {poi.phone_number}
                      </a>
                    </p>
                  </div>
                )}

                {poi.email && (
                  <div className="bg-white p-4 rounded-lg shadow-sm truncate">
                    <h3 className="text-lg font-semibold mb-2">
                      <i className="fa-solid fa-envelope"></i> Email
                    </h3>
                    <p className=" text-blue-500 truncate">
                      <a
                        href={`mailto:${poi.email}`}
                        className="hover:text-blue-800"
                      >
                        {poi.email}
                      </a>
                    </p>
                  </div>
                )}

                {poi.external_link && (
                  <div className="bg-white p-4 rounded-lg shadow-sm truncate">
                    <h3 className="text-lg font-semibold mb-2">
                      <i className="fa-solid fa-globe"></i> Sito Web/Pagina
                      Social
                    </h3>
                    <p className=" text-blue-500 truncate">
                      <a
                        href={poi.external_link}
                        className="hover:text-blue-800"
                      >
                        {poi.external_link}
                      </a>
                    </p>
                  </div>
                )}
              </div>

              {/* mappa */}
              {poi.latitude && poi.longitude && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Posizione sulla mappa
                  </h3>
                  <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                    <iframe
                      className="w-full h-full border-0"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=${poi.latitude},${poi.longitude}&hl=it&z=14&output=embed`}
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* modale immagini */}
      {isOpen && selectedImage && (
        <div
          className="fixed inset-0 ms-modal-background flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl font-bold z-100 -translate-y-12 cursor-pointer"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img
              src={`${import.meta.env.VITE_BE_IMG_URL}${selectedImage.path}`}
              alt="Immagine selezionata"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
