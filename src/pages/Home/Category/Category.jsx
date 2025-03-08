import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Thuốc trừ ốc',
    image: 'https://theme.hstatic.net/200000907029/1001282128/14/img_item_category_1_master.jpg?v=318'
  },
  {
    id: 2,
    title: 'Thuốc trừ cỏ',
    image: 'https://theme.hstatic.net/200000907029/1001282128/14/img_item_category_2_master.jpg?v=318'
  },
  {
    id: 3,
    title: 'Thuốc sâu',
    image: 'https://theme.hstatic.net/200000907029/1001282128/14/img_item_category_3_master.jpg?v=318'
  },
  {
    id: 4,
    title: 'Thuốc trừ bệnh',
    image: 'https://theme.hstatic.net/200000907029/1001282128/14/img_item_category_4_master.jpg?v=318'
  },
  {
    id: 5,
    title: 'Thuốc dưỡng',
    image: 'https://theme.hstatic.net/200000907029/1001282128/14/img_item_category_5_master.jpg?v=318'
  },
  {
    id: 6,
    title: 'Phân bón',
    image: 'https://theme.hstatic.net/200000907029/1001282128/14/img_item_category_6_master.jpg?v=318'
  }
];

const Category = () => {
    return (
      <div className="w-full px-10 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <a 
              key={cat.id} 
              href="/shop" 
              className="relative block overflow-hidden shadow-lg group rounded-2xl"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="object-cover w-full h-full transition duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute px-3 py-1 text-white bg-black bg-opacity-50 rounded bottom-2 left-2">
                {cat.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };

export default Category;
