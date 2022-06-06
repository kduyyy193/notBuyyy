import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

defineLordIconElement(loadAnimation);
const ItemsInCart = ({ phone, changeAmout, remove }) => {
  return (
    <div className=" flex w-3/5 items-center rounded-md mx-auto p-4 my-8 border">
      <div>
        <img src={phone.image} className="rounded-2xl mt-2 w-48" />
      </div>
      <div className="ml-8">
        <h4 className="mt-4  font-bold text-left">{phone.name}</h4>
        <span className="block mt-4 font-semibold text-left">
          ${phone.price}
        </span>
        <div className="mt-4">
          <label forhtml="inputID" className="font-semibold ">
            Amount:
          </label>
          <input
            id="inputID"
            type="number"
            name="phone-amount"
            value={phone.amount}
            min="0"
            onChange={(e) => changeAmout(phone, e.target.value)}
            className=" ml-2 py-1 px-3 bg-gray-100  rounded-lg"
          />
        </div>
        <div
          className="mt-4 text-center hover:text-red-600 font-bold cursor-pointer"
          onClick={() => remove(phone.id)}
        >
          <lord-icon
            className="w-20"
            trigger="click"
            src="https://cdn.lordicon.com/qsloqzpf.json"
          ></lord-icon>
        </div>
      </div>
    </div>
  );
};
export default ItemsInCart;
