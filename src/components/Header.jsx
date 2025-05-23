import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const navigate = useNavigate();

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
      {/* Top bar with logo and search */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center xl:px-20">
        <Link to="/" className="flex-shrink-0">
          <div className="bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow">
            <img
              src="/images/visits-sulmona-logo.svg"
              alt="Logo Visits Sulmona"
              className="w-20 h-auto"
            />
          </div>
        </Link>

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

      {/* Main navigation */}
      <nav className="bg-white">
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
      </nav>
    </header>
  );
}
