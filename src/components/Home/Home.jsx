import React from "react";
import { Link } from "react-router-dom";
import imgContent from "../../assets/img/content.png";
const Home = () => {
  return (
    <div className="flex items-center justify-evenly ml-32 mr-32 mt-28 p-4">
      <div className="w-6/12">
        <h1 className="font-black text-4xl text-gray-700 tracking-widest max-w-md">
          Tap into your imagination
        </h1>
        <p className="mt-4 text-gray-700 mb-8">
          With the very best quality products and exceptional warranty policies.
          You can put your trust in us for take care of your need for a good
          smartphone.
        </p>
        <Link to="/shop">
          <div className="p-3 bg-yellow-500 text-xl rounded-xl inline font-blod hover:opacity-80 cursor-pointer">
            View our products
          </div>
        </Link>
      </div>
      <div className="w-2/5 ml-8">
        <img className=" max-w-xs flex-grow " src={imgContent}></img>
      </div>
    </div>
  );
};

export default Home;
