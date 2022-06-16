import { Link } from "react-router-dom";
import NavBar from "../../components/Layouts/DefaultLayout/Navigation/NavBar";
import ItemsInCart from "./ItemsInCart";
const Cart = ({ selectedPhones, total, changeAmout, remove }) => {
  return (
    <>
      <div className="text-center mt-28">
        <h1 className="font-semibold text-3xl text-gray-700">
          Total: ${total}
        </h1>
        <Link to="checkout">
          <button className="my-8 p-2 px-4 rounded-xl text-gray-700 bg-yellow-400 text-xl font-semibold hover:opacity-70">
            Check out
          </button>
        </Link>
        <p className="text-gray-700">It's kinda empty in here right now!</p>
        <div className="mt-4">
          {selectedPhones.map((phone, index) => (
            <ItemsInCart
              phone={phone}
              key={index}
              changeAmout={changeAmout}
              remove={remove}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Cart;
