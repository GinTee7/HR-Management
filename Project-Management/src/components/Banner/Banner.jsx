import Img from "@assets/Avatar.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px]">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Image section */}
              <div data-aos="flip-up">
                <img
                  src={Img}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl font-bold sm:text-4xl"
                >
                  Về Minh Long
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm leading-5 tracking-wide text-gray-500"
                >
                  Công Ty TNHH BVTV Minh Long được xây dựng từ hoài bão phát triển nông nghiệp của những con người đã có hơn 30 năm gắn bó với nông nghiệp.
                  <br />
                  <br />
                  Thấy hiểu được nỗi vất vả của nhà nông, nên Công Ty Minh Long quyết tâm phục vụ vì lợi ích người nông dân.
                  Các sản phẩm do Công ty Minh Long sản xuất và phân phối luôn đáp ứng các tiêu chí khắt khe về chất lượng, được các cơ quan quản lý công nhận, được người dân tin dùng.
                </p>
                <div className="flex gap-6">
                  <div data-aos="fade-up">
                    <GrSecure className="w-20 h-20 p-5 text-4xl rounded-full shadow-sm bg-violet-100" />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="200">
                    <IoFastFood className="w-20 h-20 p-5 text-4xl bg-orange-100 rounded-full shadow-sm" />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <GiFoodTruck className="w-20 h-20 p-5 text-4xl bg-green-100 rounded-full shadow-sm" />
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                  <button className="px-4 py-2 text-white rounded-full shadow-xl bg-gradient-to-r from-primary to-secondary hover:shadow-md">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
