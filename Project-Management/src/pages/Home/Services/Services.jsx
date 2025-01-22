import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import HeaderTitle from "../../../components/HeaderTitle/HeaderTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  const refreshServices = async () => {
    try {
      const response = await axios.get(
        "https://67890c382c874e66b7d76465.mockapi.io/products"
      );
      setServicesData(response.data);
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  };

  useEffect(() => {
    refreshServices();
    AOS.init({
      duration: 1000, // Thời gian animation (ms)
      easing: "ease-in-out", // Kiểu easing
      once: true, // Chỉ chạy animation một lần
    });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    nextArrow: (
      <button className="text-gray-700 text-2xl absolute right-[-30px] top-[50%]">
        &gt;
      </button>
    ),
    prevArrow: (
      <button className="text-gray-700 text-2xl absolute left-[-30px] top-[50%]">
        &lt;
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
          {servicesData.length > 0 ? (
            <Slider {...sliderSettings} className="relative">
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  className="px-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative w-full group">
                    <div className="relative overflow-y-hidden max-w-80 max-h-80">
                      <div>
                        <img
                          className="w-full h-full"
                          src={service.img || "https://via.placeholder.com/150"}
                          alt={service.name || "Placeholder"}
                        />
                      </div>
                      <div className="absolute top-6 left-8">
                        {service.badge && (
                          <span className="px-2 py-1 text-white bg-red-500 rounded">
                            New
                          </span>
                        )}
                      </div>
                      <div className="w-full absolute bg-white bottom-[-130px] group-hover:bottom-0 duration-700">
                        <ul className="flex flex-col items-center justify-center w-full gap-2 p-4 border border-gray-200 rounded-md shadow-md">
                          <li className="flex items-center justify-end w-full gap-2 pb-1 text-sm font-medium text-gray-600 duration-300 border-b border-gray-200 cursor-pointer hover:text-primary hover:border-primary">
                            <FaShoppingCart />
                            <span>Add to Cart</span>
                          </li>
                          <li className="flex items-center justify-end w-full gap-2 pb-1 text-sm font-medium text-gray-600 duration-300 border-b border-gray-200 cursor-pointer hover:text-primary hover:border-primary">
                            <Link
                              to="/product"
                              className="flex items-center gap-2"
                            >
                              <MdOutlineLabelImportant />
                              <span>View Details</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
                      <div className="flex items-center justify-between font-titleFont">
                        <h2 className="text-lg font-bold text-primary">
                          {service.name}
                        </h2>
                        <p className="text-[#767676] text-[14px]">
                          ${service.price || "0.00"}
                        </p>
                      </div>
                      <div>
                        <p className="text-[#767676] text-[14px]">
                          {service.color || "No color specified"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p className="mt-8 text-center text-gray-500">
              Đang tải sản phẩm...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
