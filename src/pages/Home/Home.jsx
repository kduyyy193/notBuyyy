import React from "react";
import { NavLink } from "react-router-dom";
import imgContent from "../../assets/img/content.png";
import NavBar from "../../components/Layouts/DefaultLayout/Navigation/NavBar";
const Home = () => {
  return (
    <>
      <div className="flex flex-wrap min-w-full items-center justify-evenly ml-32 mr-32 mt-28 m-4">
        <div className="max-w-lg">
          <h1 className="font-black text-4xl text-gray-700 tracking-widest max-w-md">
            Tap into your imagination
          </h1>
          <p className="mt-4 text-gray-700 mb-8">
            With the very best quality products and exceptional warranty
            policies. You can put your trust in us for take care of your need
            for a good smartphone.
          </p>
          <NavLink
            to="/shop/all"
            className={({ isActive }) =>
              isActive ? " bg-red-300 p-2 pt-4 rounded-xl " : undefined
            }
          >
            <div className="p-3 bg-yellow-500 text-xl rounded-xl inline font-blod hover:opacity-80 cursor-pointer">
              View our products
            </div>
          </NavLink>
        </div>
        <div className=" ml-8">
          <img className=" max-w-xs flex-grow " src={imgContent}></img>
        </div>
      </div>
    </>
  );
};

export default Home;
