// import React from "react";
import NavTitle from "./NavTitle";

const Price = () => {
  const priceList = [
    {
      _id: 950,
      priceOne: 0,
      priceTwo: 49999,
    },
    {
      _id: 951,
      priceOne: 50000,
      priceTwo: 99999,
    },
    {
      _id: 952,
      priceOne: 100000,
      priceTwo: 199999,
    },
    {
      _id: 953,
      priceOne: 200000,
      priceTwo: 399999,
    },
    {
      _id: 954,
      priceOne: 400000,
      priceTwo: 599999,
    },
    {
      _id: 955,
      priceOne: 600000,
      priceTwo: 1000000,
    },
  ];
  return (
    <div className="cursor-pointer">
      <NavTitle title="Lọc theo giá" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              {item.priceOne.toLocaleString()} VNĐ - {item.priceTwo.toLocaleString()} VNĐ
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
