import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const NavBar = ({ counter }) => {
  return (
    <div className="nav flex justify-between items-center  p-4 fixed top-0 right-0 left-0 bg-white border-b">
      <NavLink to="/">
        <h1 className="logo ml-8  font-semibold text-4xl text-red-600 tracking-widest  px-8 rounded-xl   cursor-pointer ">
          notBuy
        </h1>
      </NavLink>
      <ul className="flex items-center mr-16">
        <li className=" text-gray-600 rounded-xl text-xl p-2 font-semibold hover:text-red-600 cursor-pointer">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-600 bg-red-200 p-2 rounded-xl " : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li className="ml-16 text-xl p-2 font-semibold text-gray-600 hover:text-red-600 cursor-pointer">
          <NavLink
            to="/shop/all"
            className={({ isActive }) =>
              isActive ? "text-red-600 bg-red-200 p-2 rounded-xl " : undefined
            }
          >
            Shop
          </NavLink>
        </li>
        <li className="ml-16 ">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? " bg-red-300 p-2 pt-4 rounded-xl " : undefined
            }
          >
            <div className="hover:opacity-80 inline text-gray-600 text-2xl relative">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-gray-600"
              />
              <div className="bg-yellow-300  rounded-full w-6 h-6  absolute bottom-4 text-base font-semibold text-center left-4">
                <span>{counter}</span>
              </div>
            </div>
          </NavLink>
        </li>
        <li className="ml-16 text-xl p-2 font-semibold text-gray-600 hover:text-red-600 cursor-pointer">
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
