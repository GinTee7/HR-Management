// import React from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../redux/orebiSlice";

// const ProductInfo = ({ productInfo }) => {
//   const dispatch = useDispatch();
//   return (
//     <div className="flex flex-col gap-5">
//       <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
//       <p className="text-xl font-semibold">${productInfo.price}</p>
//       <p className="text-base text-gray-600">{productInfo.des}</p>
//       <p className="text-sm">Be the first to leave a review.</p>
//       <p className="text-lg font-medium">
//         <span className="font-normal">Colors:</span> {productInfo.color}
//       </p>
//       <button
//         onClick={() =>
//           dispatch(
//             addToCart({
//               _id: productInfo.id,
//               name: productInfo.productName,
//               quantity: 1,
//               image: productInfo.img,
//               badge: productInfo.badge,
//               price: productInfo.price,
//               colors: productInfo.color,
//             })
//           )
//         }
//         className="w-full py-4 text-lg text-white duration-300 bg-primeColor hover:bg-black font-titleFont"
//       >
//         Add to Cart
//       </button>
//       <p className="text-sm font-normal">
//         <span className="text-base font-medium"> Categories:</span> Spring
//         collection, Streetwear, Women Tags: featured SKU: N/A
//       </p>
//     </div>
//   );
// };

// export default ProductInfo;
import React from "react";

const ProductInfo = ({ productInfo }) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">${productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <button
        className="w-full py-4 text-lg text-white duration-300 bg-black hover:bg-black font-titleFont"
      >
        Add to Cart
      </button>
      <p className="text-sm font-normal">
        <span className="text-base font-medium">Categories:</span>{" "}
        {productInfo.categories}
      </p>
      <p className="text-sm font-normal">
        <span className="text-base font-medium">Tags:</span>{" "}
        {productInfo.tags.join(", ")}
      </p>
      <p className="text-sm font-normal">
        <span className="text-base font-medium">SKU:</span> {productInfo.sku}
      </p>
    </div>
  );
};

export default ProductInfo;
