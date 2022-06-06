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
      <div className="side-bar w-1/5 border-r">
        <ul className="text-lg mt-8 ">
          <li className="mt-8   font-semibold ml-8 ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-red-200 p-2 ml-4  text-red-600  rounded-xl inline "
                  : undefined
              }
              to="all"
            >
              All
            </NavLink>
          </li>
          <li className="mt-8   font-semibold ml-8">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-red-200 p-2 ml-4  text-red-600  rounded-xl inline "
                  : undefined
              }
              to="google"
            >
              Google
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
              Samsung
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
              Apple
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
              Xiaomi
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
              Poco
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
              Oppo
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
              OnePlus
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="products flex justify-around items-center flex-wrap w-4/5 text-center">
        {getProductsParam().map((phone, index) => (
          <InsertProducts onClick={onClick} phone={phone} key={index} />
        ))}
      </div>
    </div>
  );
};
export default RenderShop;
