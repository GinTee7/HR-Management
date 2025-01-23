import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../Products/Product";

// Dữ liệu mẫu paginationItems
const paginationItems = [
  {
    _id: "1",
    img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
    productName: "Product 1",
    price: 50,
    color: "Red",
    badge: "New",
    des: "This is a description of Product 1.",
  },
  {
    _id: "2",
    img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
    productName: "Product 2",
    price: 75,
    color: "Blue",
    badge: "Sale",
    des: "This is a description of Product 2.",
  },
  {
    _id: "3",
    img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
    productName: "Product 3",
    price: 100,
    color: "Green",
    badge: "",
    des: "This is a description of Product 3.",
  },
  {
    _id: "4",
    img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
    productName: "Product 4",
    price: 30,
    color: "Yellow",
    badge: "Hot",
    des: "This is a description of Product 4.",
  },
  {
    _id: "5",
    img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
    productName: "Product 5",
    price: 60,
    color: "Black",
    badge: "",
    des: "This is a description of Product 5.",
  },
  {
    _id: "6",
    img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
    productName: "Product 6",
    price: 80,
    color: "White",
    badge: "New",
    des: "This is a description of Product 6.",
  },
  {
    _id: "7",
    img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
    productName: "Product 7",
    price: 90,
    color: "Purple",
    badge: "Limited",
    des: "This is a description of Product 7.",
  },
  {
    _id: "8",
    img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
    productName: "Product 8",
    price: 120,
    color: "Gray",
    badge: "Exclusive",
    des: "This is a description of Product 8.",
  },
  {
    _id: "9",
    img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
    productName: "Product 9",
    price: 45,
    color: "Pink",
    badge: "",
    des: "This is a description of Product 9.",
  },
  {
    _id: "10",
    img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
    productName: "Product 10",
    price: 55,
    color: "Brown",
    badge: "",
    des: "This is a description of Product 10.",
  },
  {
    _id: "11",
    img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
    productName: "Product 10",
    price: 55,
    color: "Brown",
    badge: "",
    des: "This is a description of Product 10.",
  },
  {
    _id: "12",
    img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
    productName: "Product 10",
    price: 55,
    color: "Brown",
    badge: "",
    des: "This is a description of Product 10.",
  },
  {
    _id: "13",
    img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
    productName: "Product 10",
    price: 55,
    color: "Brown",
    badge: "",
    des: "This is a description of Product 10.",
  },
  {
    _id: "14",
    img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
    productName: "Product 10",
    price: 55,
    color: "Brown",
    badge: "",
    des: "This is a description of Product 10.",
  },
  {
    _id: "15",
    img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
    productName: "Product 10",
    price: 55,
    color: "Brown",
    badge: "",
    des: "This is a description of Product 10.",
  },
  {
    _id: "16",
    img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
    productName: "Product 10",
    price: 55,
    color: "Brown",
    badge: "",
    des: "This is a description of Product 10.",
  },
];

// Component hiển thị danh sách sản phẩm
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item._id} className="w-full">
            <Product
              _id={item._id}
              img={item.img}
              productName={item.productName}
              price={item.price}
              color={item.color}
              badge={item.badge}
              des={item.des}
            />
          </div>
        ))}
    </>
  );
}

// Component Pagination
const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = paginationItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(paginationItems.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % paginationItems.length;
    setItemOffset(newOffset);
    setItemStart(newOffset + 1);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 mdl:gap-4 lg:gap-10">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex flex-col items-center justify-center mdl:flex-row mdl:justify-between">
        <ReactPaginate
          nextLabel=">"
          previousLabel="<"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          previousClassName="mr-4"
          previousLinkClassName="flex items-center justify-center w-9 h-9 border border-lightColor hover:border-gray-500 duration-300"
          nextClassName="ml-4" 
          nextLinkClassName="flex items-center justify-center w-9 h-9 border border-lightColor hover:border-gray-500 duration-300"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-lightText">
          Products from {itemStart} to {endOffset} of {paginationItems.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
