import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./components/Navigation/NavBar";
import Home from "./components//Home/Home";
import Cart from "./components/Cart/Cart";
import ModalCheckOut from "./components/Shop/ModalCheckOut";
import NotFound from "./components/NotFound/NotFound";
import RenderShop from "./components/Shop/RenderShop";

function App() {
  const [selectedPhones, setSelectedPhones] = useState([]);

  const handleClick = (e, phone) => {
    e.target.classList.add("animate-[Rotate3_0.5s_ease-out]");
    setTimeout(() => {
      e.target.classList.remove("animate-[Rotate3_0.5s_ease-out]");
    }, 500);
    if (
      !selectedPhones.some(
        (prevSelectedPhone) => phone.name === prevSelectedPhone.name
      )
    ) {
      setSelectedPhones([...selectedPhones, { ...phone, amount: 1 }]);
    } else {
      let tempSelectedPhone = [...selectedPhones];

      for (let i = 0; i < tempSelectedPhone.length; i++) {
        if (phone.name === tempSelectedPhone[i].name) {
          let tempPhone = { ...tempSelectedPhone[i] };
          tempPhone.amount++;
          tempSelectedPhone[i] = tempPhone;
          break;
        }
      }
      setSelectedPhones(tempSelectedPhone);
    }
  };

  const resetData = () => {
    setSelectedPhones([]);
  };

  const total = selectedPhones.reduce(
    (sum, phone) => sum + phone.price * phone.amount,
    0
  );
  const changeAmout = (phone, value) => {
    if (value <= 0) {
    }
    let tempSelectedPhone = [...selectedPhones];
    let index = tempSelectedPhone.indexOf(phone);
    let tempPhone = { ...tempSelectedPhone[index] };
    tempPhone.amount = value;
    tempSelectedPhone[index] = tempPhone;
    setSelectedPhones(tempSelectedPhone);
  };

  const remove = (id) => {
    const newPhones = selectedPhones.filter(
      (selectedPhone) => selectedPhone.id !== id
    );
    setSelectedPhones(newPhones, ...selectedPhones);
  };
  return (
    <div className="App">
      <NavBar counter={selectedPhones.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<RenderShop onClick={handleClick} />}>
          <Route path=":brand" element={<RenderShop onClick={handleClick} />} />
        </Route>
        <Route
          path="cart"
          element={
            <Cart
              selectedPhones={selectedPhones}
              total={total}
              changeAmout={changeAmout}
              remove={remove}
            />
          }
        />
        <Route
          path="cart/checkout"
          element={<ModalCheckOut total={total} resetData={resetData} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
