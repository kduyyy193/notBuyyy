import React, { useState } from "react";
import Pixel6 from "../../assets/img/pixel6.jpg";
import Pixel6Pro from "../../assets/img/pixel6pro.jpg";
import Pixel5a from "../../assets/img/pixel5a.jpg";
import S21Ultra from "../../assets/img/s21ultra.jpg";
import ZFlip3 from "../../assets/img/zflip3.jpg";
import ZFold3 from "../../assets/img/zfold3.png";
import iPhone13 from "../../assets/img/iphone13.png";
import iPhone13Pro from "../../assets/img/iphone13pro.jpg";
import iPhone13ProMax from "../../assets/img/iphone13promax.jpg";
import iPhone11 from "../../assets/img/ip11.jpg";
import OnePlus7Pro from "../../assets/img/oneplus-7-pro-1-600x600.jpg";
import OnePlus8Pro from "../../assets/img/oneplus-8-600x600-2-600x600.jpg";
import OnePlus9Pro from "../../assets/img/oneplus-9rt-1-600x600.jpg";
import OppoReno55G from "../../assets/img/oppo-reno5-5g-thumb-600x600.jpg";
import OppoReno6ProPlus from "../../assets/img/oppo-reno6-pro-plus-600x600.jpg";
import OppoF7 from "../../assets/img/oppof7.jpeg";
import PocoX3Pro from "../../assets/img/pocox3pro.jpg";
import PocoX3ProGold from "../../assets/img/xiaomi-poco-x3-pro-vang.jpg";
import PocoM3 from "../../assets/img/pocom3.jpg";
import Xiaomi11T from "../../assets/img/xiaomi-11t-128gb-didongviet.jpg";
import Xiaomi from "../../assets/img/Xiaomi.jpeg";
import Xiaomi11Lite from "../../assets/img/xiaomi11lite.jpg";

export const phonesList = [
  {
    id: 7,
    name: "iPhone 13 Pro",
    price: 999,
    image: iPhone13Pro,
    brand: "apple",
  },
  {
    id: 8,
    name: "iPhone 13 Pro Max",
    price: 1099,
    image: iPhone13ProMax,
    brand: "apple",
  },
  { id: 9, name: "iPhone 13", price: 799, image: iPhone13, brand: "apple" },
  { id: 1, name: "Google Pixel 6", price: 599, image: Pixel6, brand: "google" },
  {
    id: 2,
    name: "Google Pixel 6 Pro",
    price: 899,
    image: Pixel6Pro,
    brand: "google",
  },
  { id: 22, name: "iPhone 11", price: 599, image: iPhone11, brand: "apple" },
  {
    id: 3,
    name: "Google Pixel 5a",
    price: 449,
    image: Pixel5a,
    brand: "google",
  },

  {
    id: 5,
    name: "Galaxy Z Flip 3",
    price: 999,
    image: ZFlip3,
    brand: "samsung",
  },
  {
    id: 6,
    name: "Galaxy Z Fold 3",
    price: 999,
    image: ZFold3,
    brand: "samsung",
  },
  {
    id: 10,
    name: "One Plus 7 Pro",
    price: 399,
    image: OnePlus7Pro,
    brand: "oneplus",
  },
  {
    id: 4,
    name: "Galaxy S21 Ultra",
    price: 1199,
    image: S21Ultra,
    brand: "samsung",
  },
  {
    id: 11,
    name: "One Plus 8 Pro",
    price: 499,
    image: OnePlus8Pro,
    brand: "oneplus",
  },
  {
    id: 13,
    name: "Oppo Reno5 5G",
    price: 499,
    image: OppoReno55G,
    brand: "oppo",
  },
  {
    id: 14,
    name: "Oppo Reno 6 Pro Plus",
    price: 699,
    image: OppoReno6ProPlus,
    brand: "oppo",
  },
  {
    id: 15,
    name: "Oppo F7",
    price: 299,
    image: OppoF7,
    brand: "oppo",
  },
  {
    id: 12,
    name: "One Plus 9 Pro",
    price: 599,
    image: OnePlus9Pro,
    brand: "oneplus",
  },
  {
    id: 16,
    name: "Poco X3 Pro",
    price: 399,
    image: PocoX3Pro,
    brand: "poco",
  },
  {
    id: 17,
    name: "Poco X3 Pro Gold",
    price: 799,
    image: PocoX3ProGold,
    brand: "poco",
  },
  {
    id: 19,
    name: "Xiaomi 11T",
    price: 599,
    image: Xiaomi11T,
    brand: "xiaomi",
  },
  {
    id: 20,
    name: "Xiaomi 11T Lite",
    price: 599,
    image: Xiaomi11Lite,
    brand: "xiaomi",
  },
  {
    id: 21,
    name: "Xiaomi",
    price: 599,
    image: Xiaomi,
    brand: "xiaomi",
  },
  {
    id: 18,
    name: "Poco X3 Pro",
    price: 499,
    image: PocoM3,
    brand: "poco",
  },
];

const InsertProducts = ({ phone, onClick }) => {
  return (
    <div
      className="product flex flex-col items-center rounded-md ml-4 p-4 mb-4 border"
      key={phone.name}
    >
      <div>
        <img src={phone.image} className="rounded-2xl mt-2 w-48 h-48" />
      </div>
      <div>
        <h4 className="mt-4 font-bold">{phone.name}</h4>
        <span className="block mt-4 font-semibold">${phone.price}</span>
        <button
          className="mt-8 mb-2 p-2 px-4 rounded-xl bg-yellow-400 text-xl font-semibold text-gray-700 hover:opacity-70"
          onClick={(e) => {
            onClick(e, phone, phone.id);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default InsertProducts;
