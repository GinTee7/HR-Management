import { useState } from "react";

const ProductsOnSale = () => {
  const [products] = useState([
    {
      id: 1,
      img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
      name: "Thuốc trừ sâu A",
      price: 150.0,
    },
    {
      id: 2,
      img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
      name: "Thuốc trừ sâu B",
      price: 180.0,
    },
    {
      id: 3,
      img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
      name: "Thuốc trừ sâu C",
      price: 200.0,
    },
    {
      id: 4,
      img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
      name: "Thuốc trừ sâu D",
      price: 220.0,
    },
  ]);

  return (
    <div>
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Products on sale
      </h3>
      <div className="flex flex-col gap-2">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
          >
            <div>
              <img className="w-24" src={item.img} alt={item.name} />
            </div>
            <div className="flex flex-col gap-2 font-titleFont">
              <p className="text-base font-medium">{item.name}</p>
              <p className="text-sm font-semibold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOnSale;
