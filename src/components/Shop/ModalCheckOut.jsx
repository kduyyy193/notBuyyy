import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ModalCheckOut = ({ total, resetData }) => {
  return (
    <div className="bg-blackRgba1   w-screen h-screen fixed top-0 left-0 z-9">
      <div className="bg-white w-2/3  max-w-md my-60 mx-auto opacity-100 text-center rounded-xl p-4">
        <div className="text-7xl p-4 text-green-600">
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
        <div>
          <div className="mt-4">Your order will cost ${total}</div>
          <div className="my-4">Thank you for choosing us 😀!</div>
        </div>
        <Link to="/">
          <button
            onClick={resetData}
            className="p-2 px-4 rounded-xl text-gray-700 bg-yellow-400 text-xl font-semibold hover:opacity-70"
          >
            Done
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ModalCheckOut;
