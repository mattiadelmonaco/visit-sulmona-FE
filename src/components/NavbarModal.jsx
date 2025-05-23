import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function NavbarModal({ setIsOpenNavbar }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpenNavbar(false);
    }, 500);
  };

  return (
    <div className="grid grid-cols-12 fixed top-0 bottom-0 right-0 left-0 z-100 bg-[#00000075]">
      <div
        className={`col-span-10 sm:col-span-7 lg:col-span-5 xl:col-span-4 bg-[#99031e] h-full overflow-auto transition-transform duration-400 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-5 py-3">
          <h2 className="text-white text-2xl text-start font-bold">
            Navigazione
          </h2>

          <div className="text-3xl justify-self-end cursor-pointer text-white">
            <i className="fa-solid fa-xmark" onClick={handleClose}></i>
          </div>
        </div>
        <div className="bg-white h-full px-5 py-3">
          <ul className="flex flex-col justify-self-start space-y-8 text-start text-lg my-3 w-full">
            <li className=" border-b-2 border-neutral-200 pb-3">
              <Link
                to="/"
                className="text-[#314158] font-medium hover:text-[#99031e] transition duration-200 flex items-center justify-between"
                onClick={handleClose}
              >
                <div className="flex items-center gap-8">
                  <i className="fa-solid fa-house"></i> HomePage
                </div>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
            <li className=" border-b-2 border-neutral-200 pb-3">
              <Link
                to="/poi"
                className="text-[#314158] font-medium hover:text-[#99031e] transition duration-200 flex justify-between items-center"
                onClick={handleClose}
              >
                <div className="flex items-center gap-8">
                  <i className="fa-solid fa-map-location-dot"></i> Tutte le
                  Attrazioni e Attività
                </div>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
            <li className=" border-b-2 border-neutral-200 pb-3">
              <Link
                to="/poi-by-macro-category/cultura"
                className="text-[#314158] font-medium hover:text-[#99031e] transition duration-200 flex justify-between items-center"
                onClick={handleClose}
              >
                <div className="flex items-center gap-8">
                  <i className="fa-solid fa-landmark"></i> Cultura e Storia
                </div>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
            <li className=" border-b-2 border-neutral-200 pb-3">
              <Link
                to="/poi-by-macro-category/tempolibero"
                className="text-[#314158] font-medium hover:text-[#99031e] transition duration-200 flex justify-between items-center"
                onClick={handleClose}
              >
                <div className="flex items-center gap-8">
                  <i className="fa-solid fa-calendar-days"></i> Eventi e Tempo
                  Libero
                </div>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
            <li className=" border-b-2 border-neutral-200 pb-3">
              <Link
                to="/poi-by-macro-category/cibo"
                className="text-[#314158] font-medium hover:text-[#99031e] transition duration-200 flex justify-between items-center"
                onClick={handleClose}
              >
                <div className="flex items-center gap-8">
                  <i className="fa-solid fa-utensils"></i> Cibo e Bevande
                </div>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
            <li className=" border-b-2 border-neutral-200 pb-3">
              <Link
                to="/poi-by-macro-category/ospitalità"
                className="text-[#314158] font-medium hover:text-[#99031e] transition duration-200 flex justify-between items-center"
                onClick={handleClose}
              >
                <div className="flex items-center gap-8">
                  <i className="fa-solid fa-bed"></i> Ospitalità
                </div>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
            <li className=" border-b-2 border-neutral-200 pb-3">
              <Link
                to="/poi-by-macro-category/commercio"
                className="text-[#314158] font-medium hover:text-[#99031e] transition duration-200 flex justify-between items-center"
                onClick={handleClose}
              >
                <div className="flex items-center gap-8">
                  <i className="fa-solid fa-store"></i> Commercio
                </div>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
            <li className=" border-b-2 border-neutral-200 pb-3">
              <Link
                to="/poi-by-macro-category/comunità"
                className="text-[#314158] font-medium hover:text-[#99031e] transition duration-200 flex justify-between items-center"
                onClick={handleClose}
              >
                <div className="flex items-center gap-8">
                  <i className="fa-solid fa-people-group"></i> Servizi e
                  Comunità
                </div>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
            <li className=" border-b-2 border-neutral-200 pb-3">
              <Link
                to="/poi-by-macro-category/natura"
                className="text-[#314158] font-medium hover:text-[#99031e] transition duration-200 flex justify-between items-center"
                onClick={handleClose}
              >
                <div className="flex items-center gap-8">
                  <i className="fa-solid fa-tree"></i> Natura e Outdoor
                </div>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="col-span-2 sm:col-span-5 lg:col-span-7 xl:col-span-8 h-full"
        onClick={handleClose}
      ></div>
    </div>
  );
}
