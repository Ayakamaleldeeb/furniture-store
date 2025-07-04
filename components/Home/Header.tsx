"use client";
// import React, { useState } from "react";
import Slider from "@/components/Slider/slider";
import Ourservices from "@/components/ourservices/Ourservices";
import { Button } from "../ui/button";
import { ProductCard } from "../ui/itemCard";
import useGetFurniture from "@/use-apis/furniture/useGetFurniture";
import ContactSection from "@/components/contact-us/contactus";

// import { CartSheet } from "../cart/cart-sheet";
import PromoCards from "@/components/cards/cards";

const Header = () => {
  const { data: products } = useGetFurniture(
    {
      pageSize: 3,
    },
    {
      onSuccess: () => {
        // console.log("🚀", data);
      },
      onError(err) {
        console.log("🚀", err);
      },
    }
  );

  return (
    <>
      <Slider />
      <Ourservices />

      {!!products && (
        <>
          <div className="space-y-8 px-56 mb-44 ">
            <h2 className="text-3xl font-bold text-center mb-5">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products?.data.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  hasOffer={false}
                />
              ))}
            </div>

            <div className="flex justify-center mt-8 ">
              <Button
                onClick={() => (window.location.href = "/categories")}
                className="min-w-[110px] rounded-xl hover:bg-slate-100"
                variant="outline"
              >
                Shop Now
              </Button>
            </div>
          </div>
          {products?.data.some((product) => product.hasOffer === true) && (
            <div className="space-y-8 px-56 my-44  ">
              <h2 className="text-3xl font-bold text-center mb-5">Offers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.data
                  .filter((product) => product.hasOffer === true)
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      hasOffer={product.hasOffer}
                    />
                  ))}
              </div>

              <div className="flex justify-center mt-8 ">
                <Button
                  onClick={() => (window.location.href = "/offers")}
                  className="min-w-[110px] rounded-xl hover:bg-slate-100"
                  variant="outline"
                >
                  See More
                </Button>
              </div>
            </div>
          )}

          <PromoCards />
          <ContactSection />
        </>
      )}
    </>
  );
};
export default Header;
