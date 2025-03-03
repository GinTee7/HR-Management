import { useState } from "react";
import { ImCross } from "react-icons/im";

const ItemCard = () => {
  const [item, setItem] = useState({
    _id: "1",
    name: "Thuốc trừ sâu",
    image: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
    price: 29.99,
    quantity: 2,
  });

  // Handle quantity decrease
  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      setItem((prevItem) => ({
        ...prevItem,
        quantity: prevItem.quantity - 1,
      }));
    }
  };

  // Handle quantity increase
  const handleIncreaseQuantity = () => {
    setItem((prevItem) => ({
      ...prevItem,
      quantity: prevItem.quantity + 1,
    }));
  };

  // Handle item deletion
  const handleDeleteItem = () => {
    alert(`Item "${item.name}" removed from cart.`);
  };

  return (
    <div className="grid w-full grid-cols-5 py-2 mb-4 border">
      <div className="flex items-center col-span-5 gap-4 ml-4 mdl:col-span-2">
        <ImCross
          onClick={handleDeleteItem}
          className="duration-300 cursor-pointer text-primeColor hover:text-red-500"
        />
        <img className="w-32 h-32" src={item.image} alt="productImage" />
        <h1 className="font-semibold font-titleFont">{item.name}</h1>
      </div>
      <div className="flex items-center justify-between col-span-5 gap-6 px-4 py-4 mdl:col-span-3 mdl:py-0 mdl:px-0 mdl:gap-0">
        <div className="flex items-center w-1/3 text-lg font-semibold">
          ${item.price}
        </div>
        <div className="flex items-center w-1/3 gap-6 text-lg">
          <span
            onClick={handleDecreaseQuantity}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            -
          </span>
          <p>{item.quantity}</p>
          <span
            onClick={handleIncreaseQuantity}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            +
          </span>
        </div>
        <div className="flex items-center w-1/3 text-lg font-bold font-titleFont">
          <p>${(item.quantity * item.price).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
