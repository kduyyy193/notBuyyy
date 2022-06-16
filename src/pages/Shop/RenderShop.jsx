import React from "react";
import { NavLink, useParams } from "react-router-dom";
import InsertProducts from "./InsertProducts";
import { phonesList } from "./InsertProducts";

const RenderShop = ({ onClick }) => {
  const { brand } = useParams();
  const brandName = phonesList.filter((phone) => phone.brand === brand);
  const getProductsParam = () => {
    if (brand === undefined || brand === "all") return phonesList;
    else return brandName;
  };
  return (
    <div className="flex justify-around  mt-28 ">
      <div className=" w-1/5 fixed left-0  border-r">
        <ul className="text-lg mt-8 ">
          <li className="mt-8 font-semibold ml-8 ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-red-200 p-2 ml-4  text-red-600  rounded-xl inline  "
                  : undefined
              }
              to="all"
            >
              <span className="hover:bg-red-100 hover:p-2  hover:text-red-500  hover:rounded-xl hover:inline">
                All
              </span>
            </NavLink>
          </li>
          <li className="mt-8   font-semibold ml-8">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-red-200 p-2 ml-4  text-red-600  rounded-xl inline"
                  : undefined
              }
              to="google"
            >
              <span className="hover:bg-red-100 hover:p-2  hover:text-red-500  hover:rounded-xl hover:inline">
                Google
              </span>
            </NavLink>
          </li>
          <li className="mt-8   font-semibold ml-8">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-red-200 p-2 ml-4  text-red-600  rounded-xl inline "
                  : undefined
              }
              to="samsung"
            >
              <span className="hover:bg-red-100 hover:p-2  hover:text-red-500  hover:rounded-xl hover:inline">
                Samsung
              </span>
            </NavLink>
          </li>
          <li className="mt-8   font-semibold ml-8">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-red-200 p-2 ml-4  text-red-600  rounded-xl inline "
                  : undefined
              }
              to="apple"
            >
              <span className="hover:bg-red-100 hover:p-2  hover:text-red-500  hover:rounded-xl hover:inline">
                Apple
              </span>
            </NavLink>
          </li>
          <li className="mt-8   font-semibold ml-8">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-red-200 p-2 ml-4  text-red-600 pl rounded-xl inline "
                  : undefined
              }
              to="xiaomi"
            >
              <span className="hover:bg-red-100 hover:p-2  hover:text-red-500  hover:rounded-xl hover:inline">
                Xiaomi
              </span>
            </NavLink>
          </li>
          <li className="mt-8   font-semibold ml-8">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-red-200 p-2 ml-4  text-red-600 pl rounded-xl inline "
                  : undefined
              }
              to="poco"
            >
              <span className="hover:bg-red-100 hover:p-2  hover:text-red-500  hover:rounded-xl hover:inline">
                Poco
              </span>
            </NavLink>
          </li>
          <li className="mt-8   font-semibold ml-8">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-red-200 p-2 ml-4  text-red-600 pl rounded-xl inline "
                  : undefined
              }
              to="oppo"
            >
              <span className="hover:bg-red-100 hover:p-2  hover:text-red-500  hover:rounded-xl hover:inline">
                Oppo
              </span>
            </NavLink>
          </li>
          <li className="mt-8   font-semibold ml-8">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-red-200 p-2 ml-4  text-red-600 pl rounded-xl inline "
                  : undefined
              }
              to="oneplus"
            >
              <span className="hover:bg-red-100 hover:p-2  hover:text-red-500  hover:rounded-xl hover:inline">
                OnePlus
              </span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="products flex justify-start  ml-56  items-center  flex-wrap w-4/5 text-center">
        {getProductsParam().map((phone, index) => (
          <InsertProducts onClick={onClick} phone={phone} key={index} />
        ))}
      </div>
    </div>
  );
};
export default RenderShop;
