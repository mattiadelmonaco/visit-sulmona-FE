import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Jumbotron />

        {/* Introduzione */}
        <div className="max-w-4xl mx-auto my-8">
          <p className="text-center text-2xl text-neutral-600 px-6 py-8 leading-relaxed">
            Sulmona, città d'arte nel cuore dell'Abruzzo, è famosa per i suoi
            confetti, la poesia di Ovidio e le sue bellezze architettoniche.
            Passeggiare per il centro storico significa attraversare secoli di
            storia e cultura, tra chiese medievali e scorci mozzafiato.
          </p>
        </div>

        {/* Storia */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8 text-red-800 border-b border-neutral-200 pb-3">
              Storia
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="images/22575_piazza-garibaldi.avif"
                  alt="Piazza Garibaldi"
                  className="rounded-lg shadow-lg max-w-[600px] w-full mx-auto"
                />
              </div>
              <div className="space-y-4">
                <p className="text-neutral-600 xl:px-20 text-lg xl:text-2xl">
                  Fondata dai Peligni e divenuta poi municipio romano, Sulmona
                  ha dato i natali al poeta Ovidio. La città raggiunse il suo
                  massimo splendore nel periodo medievale e rinascimentale, come
                  testimoniano i numerosi palazzi e chiese del centro storico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Attrazioni */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8 text-red-800 border-b border-neutral-200 pb-3">
              Luoghi da Visitare
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="images/Chiesa-SS.-Annunziata.jpg"
                  alt="Complesso dell'Annunziata"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">Complesso dell'Annunziata</h3>
                  <p className="text-neutral-600">
                    Magnifico esempio di architettura gotica e rinascimentale.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="images/parte-dell-acquedotto-medievale-in-piazza-sulmona-garibaldi-italia_665346-10684.avif"
                  alt="Acquedotto Medievale"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">Acquedotto Medievale</h3>
                  <p className="text-neutral-600">
                    Simbolo della città che attraversa Piazza Garibaldi.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="images/San-Panfilo-Sulmo_m-320x180.jpg"
                  alt="Cattedrale di San Panfilo"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">Cattedrale di San Panfilo</h3>
                  <p className="text-neutral-600">
                    Principale chiesa della città, di origine romanica.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-7">
              <Link
                to="/poi-by-macro-category/cultura"
                className="bg-white px-5 py-2 sm:text-2xl rounded-md hover:bg-[#99031e] hover:text-white transition duration-500"
              >
                Tutti i luoghi storici e di cultura
              </Link>
            </div>

            <div className="mt-12 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-center mb-6 text-red-800">
                Live da Sulmona - guarda su YouTube
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <a
                  href="https://www.youtube.com/watch?v=iUN8_2ap71Y"
                  className="block p-4 bg-gray-100 rounded-lg hover:bg-[#99031e] text-neutral-700 hover:text-white transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="block font-semibold">
                    Piazza Garibaldi dall'alto
                  </span>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=7WGqrVF7Nmw"
                  className="block p-4 bg-gray-100 rounded-lg hover:bg-[#99031e] text-neutral-700 hover:text-white transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="block font-semibold">
                    Acquedotto Medievale
                  </span>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=oACBXj9bF2Y"
                  className="block p-4 bg-gray-100 rounded-lg hover:bg-[#99031e] text-neutral-700 hover:text-white transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="block font-semibold">
                    Complesso Santissima Annunziata
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Confetti */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8 text-red-800 border-b border-neutral-200 pb-3">
              I Famosi Confetti
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-neutral-600  xl:px-20 text-lg xl:text-2xl">
                  Sulmona è conosciuta in tutto il mondo come la "Città dei
                  Confetti". Questa tradizione dolciaria risale al XV secolo,
                  con i confetti che venivano prodotti dalle suore del Monastero
                  di Santa Chiara. Oggi, le confetterie di Sulmona producono
                  confetti in infinite varietà di colori, sapori e forme.
                </p>
              </div>
              <div>
                <img
                  src="images/Margherita-forma-confetto-scaled.jpg"
                  alt="Confetti di Sulmona"
                  className="rounded-lg shadow-lg max-w-[600px] w-full mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Eventi e Tradizioni */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8 text-red-800 border-b border-neutral-200 pb-3">
              Eventi e Tradizioni
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-xl mb-4">Giostra Cavalleresca</h3>
                <img
                  src="images/sulmona-giostra-cavalleresca-1024x598.jpg"
                  alt="Giostra Cavalleresca"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-neutral-600">
                  Rievocazione storica che si svolge l'ultimo weekend di luglio.
                  I borghi e sestieri della città si sfidano in un torneo
                  equestre nella magnifica Piazza Maggiore.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-xl mb-4">
                  Processione del Venerdì Santo
                </h3>
                <img
                  src="images/Sulmona-riti-pasquali-1.jpg"
                  alt="Processione del Venerdì Santo"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-neutral-600">
                  Una delle processioni più antiche d'Italia, dove centinaia di
                  confratelli sfilano per le vie del centro storico in abiti
                  tradizionali.
                </p>
              </div>
            </div>

            <div className="text-center mt-7">
              <Link
                to="/poi-by-macro-category/tempolibero"
                className="bg-white px-5 py-2 sm:text-2xl rounded-md hover:bg-[#99031e] hover:text-white transition duration-500"
              >
                Eventi e Tempo libero
              </Link>
            </div>
          </div>
        </section>

        {/* Gastronomia */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8 text-red-800 border-b border-neutral-200 pb-3">
              Sapori Tipici
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <img
                  src="images/aglio-rosso-sulmona-spicchi.jpg"
                  alt="Aglio Rosso"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold mb-2">Aglio Rosso di Sulmona</h3>
                <p className="text-neutral-600">
                  Presidio Slow Food, famoso per il suo aroma intenso.
                </p>
              </div>
              <div className="text-center p-4">
                <img
                  src="images/arrosticini-abruzzo.original.jpg"
                  alt="Arrosticini"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold mb-2">Arrosticini</h3>
                <p className="text-neutral-600">
                  Spiedini di carne di pecora cotti alla brace, simbolo della
                  tradizione gastronomica abruzzese.
                </p>
              </div>
              <div className="text-center p-4">
                <img
                  src="images/DSCF2323_1080x.webp"
                  alt="Vini DOC"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold mb-2">Vini DOC</h3>
                <p className="text-neutral-600">
                  Montepulciano d'Abruzzo e altri vini pregiati della zona.
                </p>
              </div>
            </div>

            <div className="text-center mt-7">
              <Link
                to="/poi-by-macro-category/cibo"
                className="bg-neutral-200 px-5 py-2 sm:text-2xl rounded-md hover:bg-[#99031e] hover:text-white transition duration-500"
              >
                Dove mangiare e bere
              </Link>
            </div>
          </div>
        </section>

        {/* Come Raggiungerci */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8 text-red-800 border-b border-neutral-200 pb-3">
              Come Raggiungerci
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl mb-3">In Auto</h3>
                  <p className="text-neutral-600">
                    Autostrada A25 Roma-Pescara, uscita Sulmona-Pratola Peligna.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl mb-3">In Treno</h3>
                  <p className="text-neutral-600">
                    Stazione ferroviaria di Sulmona, collegamenti diretti da
                    Roma e Pescara.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl mb-3">In Autobus</h3>
                  <p className="text-neutral-600">
                    Collegamenti quotidiani con le principali città abruzzesi e
                    Roma.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.4436144047086!2d13.921456!3d42.047897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133141d324f12439%3A0x8244f73120c55a35!2sSulmona!5e0!3m2!1sit!2sit!4v1647521247781!5m2!1sit!2sit"
                  className="w-full h-full min-h-[400px] rounded-lg shadow-md"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
