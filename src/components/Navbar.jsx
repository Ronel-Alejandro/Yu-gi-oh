import React from "react";
import { Link, Outlet } from "react-router-dom";


function Navbar() {
  return (
    <div className="">
      <nav className="bg-purple-500 px-6 shadow-md fixed inset-x-0 top-0">
        <div className="flex flex-row justify-between items-center py-1">
        <h3 className="font-semibold text-3xl text-white pl-5 flex items-center">
            Yu-Gi-Oh! <img src="/src/assets/maga.png" className="h-14 ml-2" />
          </h3>
          <div className="group flex flex-col items-center">
            <button className="p-2 rounded-lg md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
            <div className="hidden group-hover:block md:block absolute md:static pr-10  inset-x-0 top-16 py-3 shadow-md md:shadow-none text-gray-600">
              <div className="flex flex-row justify-center items-center text-center font-semibold text-white">
                <Link
                  to="/"
                  exact={true}
                  activeClassName="bg-purple-400"
                  className="px-6 py-1 flex flex-col md:flex-row md:items-center bg-purple-500"
                >
                  inicio
                </Link>
                <Link
                  to="/perfil"
                  exact={true}
                  activeClassName="bg-purple-400"
                  className="pr-8 py-1 flex flex-col md:flex-row md:items-center bg-purple-500"
                >
                  Portada
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
