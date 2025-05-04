import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ShopCard = ({ shop }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/shop-details/${shop.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition"
    >
      <img
        src={shop.imageUrl}
        alt={shop.shopName}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h3 className="text-xl font-semibold mt-2">{shop.shopName}</h3>
      <p className="text-gray-600">{shop.shopType}</p>
      <p className="text-gray-500">{shop.address}</p>

      {/* Prevent this link from triggering parent div's onClick */}
      <Link
        to={`/booking/${shop.id}`}
        onClick={(e) => e.stopPropagation()}
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Book Service
      </Link>
    </div>
  );
};

export default ShopCard;
