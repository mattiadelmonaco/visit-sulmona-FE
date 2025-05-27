import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // per arrivare direttamente alla sezione come-raggiungerci
  const handleScrollToSection = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      // se non siamo in home, prima navighiamo alla home
      navigate("/");
      // aspettiamo che il DOM si aggiorni prima di scrollare
      setTimeout(() => {
        const element = document.getElementById("come-raggiungerci");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // se siamo già in home, scrolliamo direttamente
      const element = document.getElementById("come-raggiungerci");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#670013] shadow-2xl pb-4 text-white">
      <div className="container px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 border-b-2 border-white py-6 mb-3">
          {/* Colonna 1: Logo e intro */}
          <div className="md:col-span-2 lg:col-span-4 flex flex-col items-center">
            <div className="bg-white rounded-full py-5 w-fit mb-4">
              <Link to="/">
                <img
                  src="/images/visits-sulmona-logo.svg"
                  alt="Logo Visits Sulmona"
                  width="120px"
                />
              </Link>
            </div>
            <p className="text-sm text-center max-w-[280px]">
              Scopri la bellezza di Sulmona, una città ricca di storia, cultura
              e tradizioni nel cuore dell'Abruzzo.
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-7 flex flex-col sm:flex-row sm:justify-between">
            {/* Colonna 2: Link utili */}
            <div className="mb-6 sm:mb-0">
              <h3 className="text-xl font-bold mb-1">Link utili</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/poi-by-macro-category/ospitalità"
                    className="hover:underline"
                  >
                    Dove Alloggiare
                  </Link>
                </li>
                <li>
                  <Link
                    to="/poi-by-macro-category/cibo"
                    className="hover:underline"
                  >
                    Cibo e Bevande
                  </Link>
                </li>
                <li>
                  <Link
                    to="/poi-by-macro-category/cultura"
                    className="hover:underline"
                  >
                    Cultura e Storia
                  </Link>
                </li>
                <li>
                  <Link
                    to="/poi-by-macro-category/tempolibero"
                    className="hover:underline"
                  >
                    Eventi
                  </Link>
                </li>
                <li>
                  <a
                    href="#come-raggiungerci"
                    onClick={handleScrollToSection}
                    className="hover:underline"
                  >
                    Come Arrivare
                  </a>
                </li>
              </ul>
            </div>

            {/* Colonna 3: Contatti */}
            <div className="mb-6 sm:mb-0">
              <h3 className="text-xl font-bold mb-1">Contattaci</h3>
              <div className="space-y-2">
                <p>
                  <i className="fa-solid fa-location-dot mr-2"></i>Sulmona (AQ),
                  Italia
                </p>
                <p>
                  <i className="fa-solid fa-envelope mr-2"></i>
                  <a href="mailto:#" className="hover:underline">
                    info@visitsulmona.it
                  </a>
                </p>
                <p>
                  <i className="fa-solid fa-phone mr-2"></i>
                  <a href="tel:#" className="hover:underline">
                    +39 0864 123456
                  </a>
                </p>

                <div className="mt-4 space-x-4 flex ">
                  <a href="#" className="text-2xl hover:text-gray-300">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-2xl hover:text-gray-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-2xl hover:text-gray-300">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Colonna 4: link esterni */}
            <div className="mb-6 sm:mb-0">
              <h3 className="text-xl font-bold mb-1">Link esterni</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://comune.sulmona.aq.it/"
                    className="hover:underline"
                  >
                    Comune di Sulmona
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.abruzzoturismo.it/it/magazine/sulmona-la-splendida-citta-dei-confetti"
                    className="hover:underline"
                  >
                    Regione Abruzzo
                  </a>
                </li>
                <li>
                  <a
                    href="https://it.wikipedia.org/wiki/Sulmona"
                    className="hover:underline"
                  >
                    Wikipedia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="bg-white py-2 text-center text-[#670013]">
        Made with <i className="fa-solid fa-heart"></i> by Mattia | © 2025
        Visits Sulmona
      </p>
    </footer>
  );
}
