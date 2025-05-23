import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavbarModal from "./NavbarModal";

export default function Header() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const navigate = useNavigate();
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const fetchTypes = () => {
    axios.get(`${import.meta.env.VITE_BE_URL}/types`, {}).then((res) => {
      setTypes(res.data.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedType) {
      navigate(`/poi-by-type/type/${selectedType}`);
    } else {
      navigate("/poi");
    }
  };

  useEffect(fetchTypes, []);

  return (
    <header className="bg-[#99031e] shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center xl:px-20">
        {/* tasto che apre modale */}
        <div className="sm:hidden pl-5">
          <button
            type="button"
            className="ms-btn-hover cursor-pointer rounded-full text-3xl text-white active:text-white shadow-2xl"
            onClick={() => setIsOpenNavbar(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* modale */}
        {isOpenNavbar && <NavbarModal setIsOpenNavbar={setIsOpenNavbar} />}

        {/* logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow">
            <img
              src="/images/visits-sulmona-logo.svg"
              alt="Logo Visits Sulmona"
              className="w-20 h-auto"
            />
          </div>
        </Link>

        {/* filtro per tipologia su schermi grandi */}
        <div className="hidden sm:block">
          <form onSubmit={handleSubmit} className="flex items-center gap-4">
            <h3 className="text-white font-medium text-sm">
              Filtra per tipologia:
            </h3>
            <select
              name="types"
              id="types"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-white border-0 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-white"
            >
              <option value="">Tutte le tipologie</option>
              {types.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-white text-[#99031e] px-4 py-1.5 rounded font-medium text-sm 
                     hover:bg-gray-100 transition-colors"
            >
              Cerca
            </button>
          </form>
        </div>
      </div>

      {/* navbar */}
      <div>
        <nav className="bg-white">
          {/* filtro su schermi piccoli */}
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center gap-4 py-3 px-2 flex-wrap sm:hidden"
          >
            {/* tasto per aprire filtro */}
            <div
              className="cursor-pointer text-[#99031e] font-medium text-sm border border-[#99031e] px-4 py-1.5 rounded 
              hover:bg-[#99031e] hover:text-white transition-colors duration-500"
              onClick={() => setIsOpenFilter(!isOpenFilter)}
            >
              <h3>
                Filtra per tipologia: <i className="fa-solid fa-filter"></i>
              </h3>
            </div>

            {/* filtro */}
            {isOpenFilter && (
              <div className="flex gap-3">
                <select
                  name="types"
                  id="types"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-white border border-[#99031e] rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-[#99031e]"
                >
                  <option value="">Tutte le tipologie</option>
                  {types.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="bg-white border border-[#99031e] text-[#99031e] px-4 py-1.5 rounded font-medium text-sm 
                     hover:bg-[#99031e] hover:text-white transition-colors duration-500 cursor-pointer"
                >
                  Cerca
                </button>
              </div>
            )}
          </form>

          {/* barra di navigazione su schermi grandi */}
          <div className="hidden sm:block">
            <ul className="container mx-auto px-6 py-3 flex gap-6 justify-center flex-wrap">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-700 hover:text-[#99031e] transition-colors text-sm font-medium"
                >
                  HomePage
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/poi"
                  className="text-gray-700 hover:text-[#99031e] transition-colors text-sm font-medium"
                >
                  Tutte le attrazioni e attività
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/poi-by-macro-category/cultura"
                  className="text-gray-700 hover:text-[#99031e] transition-colors text-sm font-medium"
                >
                  Cultura e Storia
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/poi-by-macro-category/tempolibero"
                  className="text-gray-700 hover:text-[#99031e] transition-colors text-sm font-medium"
                >
                  Eventi e Tempo Libero
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/poi-by-macro-category/cibo"
                  className="text-gray-700 hover:text-[#99031e] transition-colors text-sm font-medium"
                >
                  Cibo e Bevande
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/poi-by-macro-category/ospitalità"
                  className="text-gray-700 hover:text-[#99031e] transition-colors text-sm font-medium"
                >
                  Ospitalità
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/poi-by-macro-category/commercio"
                  className="text-gray-700 hover:text-[#99031e] transition-colors text-sm font-medium"
                >
                  Commercio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/poi-by-macro-category/comunità"
                  className="text-gray-700 hover:text-[#99031e] transition-colors text-sm font-medium"
                >
                  Servizi e Comunità
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/poi-by-macro-category/natura"
                  className="text-gray-700 hover:text-[#99031e] transition-colors text-sm font-medium"
                >
                  Natura e Outdoor
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
