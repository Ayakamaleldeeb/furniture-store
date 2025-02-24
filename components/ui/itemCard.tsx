"use client";

export function ProductCard({ product, hasOffer }: any) {
  return (
    <div
      className={`relative   ${
        hasOffer ? "border-red-600 border-2 rounded-2xl shadow-sm" : ""
      }   bg-white text-gray-900  overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105 hover:rounded-xl`}
    >
      {hasOffer && (
        <div className="absolute top-0 left-0 bg-red-600 text-white py-1 px-10 transform -rotate-45 translate-x-[-32%] translate-y-[10%] z-10 text-lg font-bold">
          SALE
        </div>
      )}
      <div className="aspect-square overflow-hidden">
        <img
          src={product.pictureUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 text-center gap-1">
        <h3 className="font-medium text-lg">{product.description}</h3>
        <span className="text-sm text-gray-500 ">{product.name}</span>
        <div className="mt-2 flex flex-col items-center  ">
          <span className="text-xl font-bold">${product.price}</span>
          {hasOffer && product.price && (
            <span className="text-sm text-gray-500 line-through">
              ${product.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
