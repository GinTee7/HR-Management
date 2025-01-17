import { useState, useEffect } from "react";
import axios from "axios";
import HeaderTitle from "../../../components/HeaderTitle/HeaderTitle";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    axios
      .get("https://67890c382c874e66b7d76465.mockapi.io/products")
      .then((response) => {
        setServicesData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const totalPages = Math.ceil(servicesData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedServices = servicesData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="py-12 lg:py-20">
        <div className="container">
          <HeaderTitle
            title="Sản phẩm"
            subtitle="Sản phẩm của chúng tôi"
            description="Cung cấp các giải pháp nông nghiệp chất lượng cao."
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
                    alt={service.name}
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
