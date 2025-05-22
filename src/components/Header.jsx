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
    <header className="bg-[#99031e] shadow-lg py-3">
      <div className="container px-10 mx-auto">
        <div className="flex justify-between items-center flex-wrap">
          <div className="bg-white rounded-full py-2">
            <Link to="/">
              <img
                src="/images/visits-sulmona-logo.svg"
                alt="Logo Visits Sulmona"
                width="110px"
              />
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            <select
              name="types"
              id="types"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">---</option>
              {types.map((type) => {
                return (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                );
              })}
            </select>
            <button type="submit">Filtra</button>
          </form>
          <h1>Header</h1>
        </div>
      </div>
      <nav className="bg-white py-3 mt-3">
        <ul className="flex gap-5 justify-center flex-wrap">
          <li>
            <NavLink to="/">HomePage</NavLink>
          </li>
          <li>
            <NavLink to="/poi">Tutte le attrazioni e attività</NavLink>
          </li>
          <li>
            <NavLink to="/poi-by-macro-category/cultura">
              Cultura e Storia
            </NavLink>
          </li>
          <li>
            <NavLink to="/poi-by-macro-category/tempolibero">
              Eventi e Tempo Libero
            </NavLink>
          </li>
          <li>
            <NavLink to="/poi-by-macro-category/cibo">Cibo e Bevande</NavLink>
          </li>
          <li>
            <NavLink to="/poi-by-macro-category/ospitalità">Ospitalità</NavLink>
          </li>
          <li>
            <NavLink to="/poi-by-macro-category/commercio">Commercio</NavLink>
          </li>
          <li>
            <NavLink to="/poi-by-macro-category/comunità">
              Servizi e Comunità
            </NavLink>
          </li>
          <li>
            <NavLink to="/poi-by-macro-category/natura">
              Natura e Outdoor
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
