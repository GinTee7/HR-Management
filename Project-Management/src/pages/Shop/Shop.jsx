import React, { useState } from "react";
import Breadcrumbs from "@components/pageProps/Breadcrumbs";
import Pagination from "@components/pageProps/shopPage/Pagination";
import ProductBanner from "@components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "@components/pageProps/shopPage/ShopSideNav";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="px-4 mx-auto bg-[#F2F8FC] min-h-screen">
      <Breadcrumbs title="Sản phẩm" />
      <div className="flex w-full h-full gap-10 pb-20">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full sticky top-0">
          <ShopSideNav />
        </div>

        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
