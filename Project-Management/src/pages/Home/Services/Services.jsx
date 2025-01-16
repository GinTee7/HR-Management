import React, { useState } from "react";
import Img2 from "../../../assets/thuoc.jpg";
import Img3 from "../../../assets/thuoc.jpg";
import HeaderTitle from "../../../components/HeaderTitle/HeaderTitle";

const ServicesData = [
  { id: 1, img: Img2, name: "Benzema 480SL", description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.", aosDelay: "100" },
  { id: 2, img: Img3, name: "Ocinda", description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet", aosDelay: "300" },
  { id: 3, img: Img2, name: "Rice Guard", description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet", aosDelay: "500" },
  { id: 4, img: Img2, name: "Alo", description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet", aosDelay: "500" },
  { id: 5, img: Img2, name: "Bonita", description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet", aosDelay: "500" },
  { id: 6, img: Img3, name: "Guard", description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet", aosDelay: "700" },
  { id: 7, img: Img2, name: "Shield", description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet", aosDelay: "900" },
  { id: 8, img: Img3, name: "Protector", description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet", aosDelay: "1100" },
  { id: 9, img: Img2, name: "Defender", description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet", aosDelay: "1300" },
  { id: 10, img: Img3, name: "Guardian", description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet", aosDelay: "1500" },
  { id: 11, img: Img2, name: "Sentinel", description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet", aosDelay: "1700" },
  { id: 12, img: Img3, name: "Watchman", description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet", aosDelay: "1900" }
];

const Services = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(ServicesData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedServices = ServicesData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-gray-100">
      <div className="py-12 lg:py-20">
        <div className="container">
          <HeaderTitle
            title="Sản phẩm"
            subtitle="Sản phẩm của chúng tôi"
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt,"
            }
          />
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
            {displayedServices.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[250px] border border-gray-200"
              >
                <div className="h-[100px] flex items-center justify-center bg-white">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[120px] h-auto transform group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-lg font-bold">{service.name}</h1>
                  <p className="text-sm text-gray-500 group-hover:text-white duration-high line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Trước
            </button>
            <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
