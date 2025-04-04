import Image from "next/image";
export default function PromoCards() {
  const promotions = [
    {
      image: "/images/car.png",
      text: "FREE DELIVERY FROM 250$",
    },
    {
      image: "/images/hand.png",
      text: "BUY TWO GET 50% DISCOUNT ON THIRD",
    },
    {
      image: "/images/dolar.png",
      text: "GIFT PIECE FROM 1000$",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-10">
      {promotions.map((promo, index) => (
        <div
          key={index}
          className="bg-black text-white flex flex-col items-center justify-center p-6 flex-1 min-h-[150px] w-full md:w-1/3 rounded-lg shadow-lg"
        >
          <Image
            src={promo.image}
            alt={promo.text}
            width={50} 
            height={50}
            className="mb-2"
          />
          <p className="text-center text-sm md:text-base">{promo.text}</p>
          </div>
      ))}
    </div>
  );
}
