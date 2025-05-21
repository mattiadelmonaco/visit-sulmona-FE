import TimeTableComp from "./TimeTableComp";

export default function SinglePoiComp({ poi }) {
  console.log(poi);
  return (
    <>
      <div className="container mx-auto px-10 pb-7">
        {/* nome e tipologia */}
        <div className="flex items-center">
          {poi.name && (
            <h1 className="text-3xl md:text-4xl text-center font-bold text-red-700 py-10">
              {poi.name}
            </h1>
          )}

          {poi.type && <p>Tipologia: {poi.type.name}</p>}
        </div>
        {/* /nome e tipologia */}

        {/* periodo evento se presente */}
        {poi.start_date || poi.end_date ? (
          <div className="flex gap-2">
            <h3>Periodo:</h3>
            <p>
              dal {poi.start_date} al {poi.end_date}
            </p>
          </div>
        ) : (
          ""
        )}

        {/* /periodo evento se presente */}

        {/* tag */}
        {poi.tags ? (
          <div className="flex flex-wrap gap-2 items-center text-white mb-3">
            {poi.tags.map((tag) => {
              return (
                <div
                  key={tag.id}
                  style={{ backgroundColor: tag.color }}
                  className="px-3 py-1 rounded-lg"
                >
                  <i className="fa-solid fa-hashtag"></i> {tag.name}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-red-700">Nessun tag associato</p>
        )}
        {/* /tag */}

        {/* immagine copertina */}
        {poi.first_image ? (
          <div>
            <img
              src={`${import.meta.env.VITE_BE_IMG_URL}${poi.first_image.path}`}
              alt={`Immagine di copertina di ${poi.name}`}
            />
          </div>
        ) : (
          <div>
            <img
              className="w-full h-full object-cover"
              src="https://img.freepik.com/vettori-premium/vettore-icona-immagine-predefinita-pagina-immagine-mancante-per-la-progettazione-di-siti-web-o-app-per-dispositivi-mobili-nessuna-foto-disponibile_87543-11093.jpg"
              alt="Immagine mancante"
            />
          </div>
        )}
        {/* /immagine copertina */}

        {/* galleria immagini */}
        <h3>Galleria immagini</h3>
        <div className="flex gap-2 flex-wrap">
          {poi.images ? (
            poi.images.map((image) => {
              return (
                <div>
                  <img
                    src={`${import.meta.env.VITE_BE_IMG_URL}${image.path}`}
                    alt={`Immagine della galleria di ${poi.name}`}
                  />
                </div>
              );
            })
          ) : (
            <p>Nessuna immagine presente</p>
          )}
        </div>
        {/* /galleria immagini */}

        {/* descrizione */}
        {poi.description && (
          <div>
            <h3>Descrizione</h3>
            <p>{poi.description}</p>
          </div>
        )}
        {/* /descrizione */}

        {/* orari di apertura e chiusura */}
        {poi.days_of_week && <TimeTableComp days={poi.days_of_week} />}
        {/* /orari di apertura e chiusura */}

        {/* contatti */}
        <div>
          {/* indirizzo */}
          {poi.address && (
            <div>
              <h3>Indirizzo</h3>
              <p>{poi.address}</p>
            </div>
          )}

          {/* /indirizzo */}

          {/* numero di telefono */}
          {poi.phone_number && (
            <div>
              <h3>Telefono</h3>
              <p>{poi.phone_number}</p>
            </div>
          )}

          {/* /numero di telefono */}

          {/* email */}
          {poi.email && (
            <div>
              <h3>Email</h3>
              <p>{poi.email}</p>
            </div>
          )}

          {/* /email */}
          {/* sito o social */}
          {poi.external_link && (
            <div>
              <h3>Sito Web/Pagina Social</h3>
              <p>{poi.external_link}</p>
            </div>
          )}

          {/* /sito o social */}

          {/* /contatti */}
        </div>
        {/* mappa */}
        {poi.latitude && poi.longitude ? (
          <div>
            <h3>Posizione sulla mappa</h3>
            <iframe
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${poi.latitude},${poi.longitude}&hl=it&z=14&output=embed`}
            ></iframe>
          </div>
        ) : (
          ""
        )}
        {/* /mappa */}

        {/* /container */}
      </div>
    </>
  );
}
