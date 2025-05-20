export default function SinglePoiComp({ poi }) {
  console.log(poi);
  return (
    <>
      <div className="container mx-auto px-10 pb-7">
        <div className="flex items-center">
          {poi.name && (
            <h1 className="text-3xl md:text-4xl text-center font-bold text-red-700 py-10">
              {poi.name}
            </h1>
          )}

          {poi.type && <p>Tipologia: {poi.type.name}</p>}
        </div>
        {poi.tags ? (
          <div className="flex flex-wrap gap-2 items-center text-white mb-3">
            {poi.tags.map((tag) => {
              return (
                <div
                  key={tag.id}
                  style={{ backgroundColor: tag.color }}
                  className="px-3 py-1 rounded-lg"
                >
                  <i class="fa-solid fa-hashtag"></i> {tag.name}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-red-700">Nessun tag associato</p>
        )}
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
      </div>
    </>
  );
}
