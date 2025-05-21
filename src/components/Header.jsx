import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link, NavLink } from "react-router";

export default function Header() {
  const [types, setTypes] = useState([]);

  const fetchTypes = () => {
    axios.get(`${import.meta.env.VITE_BE_URL}/types`, {}).then((res) => {
      setTypes(res.data.data);
    });
  };

  useEffect(fetchTypes, []);

  return (
    <header className="bg-[#99031e] shadow-lg py-3">
      <div className="container px-10 mx-auto">
        <div className="flex justify-between items-center flex-wrap">
          <div className="bg-white rounded-full py-2">
            <a href="/">
              <img
                src="./images/visits-sulmona-logo.svg"
                alt="Logo Visits Sulmona"
                width="110px"
              />
            </a>
          </div>
          <form>
            <select name="types" id="types">
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
        <ul className="flex gap-5 justify-center">
          <li>
            <NavLink to="/">HomePage</NavLink>
          </li>
          <li>
            <NavLink to="/poi">Tutte le attrazioni e attività</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
