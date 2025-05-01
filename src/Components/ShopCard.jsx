const ShopCard = ({ shop }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {shop.imageUrl && <img src={shop.imageUrl} alt={shop.shopName} className="h-40 w-full object-cover" />}
      <div className="p-4 space-y-1">
        <h3 className="text-xl font-bold">{shop.shopName}</h3>
        <p className="text-sm text-gray-600">Owner: {shop.ownerName}</p>
        <p className="text-sm">Type: {shop.shopType}</p>
        <p className="text-sm">📍 {shop.address}</p>
        <p className="text-sm">📞 {shop.phone}</p>
      </div>
    </div>
  );
  
  export default ShopCard;
  