"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ui/itemCard";
import { Button } from "@/components/ui/button";
import useGetFurniture from "@/use-apis/furniture/useGetFurniture";

const ITEMS_PER_PAGE = 8;

interface Brand {
  id: string;
  name: string | null;
}

interface Category {
  id: string;
  name: string | null;
}

interface Furniture {
  id: string;
  name: string | null;
  description: string | null;
  pictureUrl: string | null;
  furnitureModel: string | null;
  price: number;
  brandId: string;
  brand: Brand;
  categoryId: string;
  category: Category;
}

export function ProductsGrid() {
  const [displayedProducts, setDisplayedProducts] = useState<Furniture[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { data: products, refetch } = useGetFurniture(
    {
      pageIndex: currentPage,
      pageSize: ITEMS_PER_PAGE,
      
    },
    // {
    //   onSuccess: (data) => {
    //     // console.log("🚀", data);
    //   },
    //   onError(err) {
    //     // console.log("🚀", err);
    //   },
    // }
  );

  const totalPages = Math.ceil((products?.count ?? 0) / ITEMS_PER_PAGE);
  console.log("🚀 ~ ProductsGrid ~ totalPages:", displayedProducts);

  const loadProducts = async (page: number) => {
    setLoading(true);
    setCurrentPage(page);
    await refetch();
    setLoading(false);
  };

  useEffect(() => {
    loadProducts(1);
  }, []);

  const loadMore = () => {
    if (currentPage < totalPages) {
      loadProducts(currentPage + 1);
    }
  };

  useEffect(() => {
    if (products) {
      const newProducts = products.data.filter((product) => product.hasOffer === true);
      if (currentPage === 1) {
        setDisplayedProducts(newProducts);
      } else {
        setDisplayedProducts((prev) => [...prev, ...newProducts]);
      }
    }
  }, [products, currentPage]);

  return (
    <div className="space-y-8 px-28 my-4">
      <h2 className="text-3xl font-bold text-center">Offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {displayedProducts.length === 0 && (
  <div className="flex flex-col items-center justify-center min-h-[200px] w-full">
    <div className="bg-red-100 text-red-600 px-6 py-4 rounded-xl shadow-md text-lg font-semibold max-w-xs w-full text-center">
      No offer available
    </div>
  </div>
)}
      {(currentPage < totalPages) &&
        (products?.data?.filter((product) => product.hasOffer === true).length ?? 0) > 0  && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={loadMore}
            disabled={loading  }
            className="min-w-[200px]"
            variant="outline"
            
          >
            {loading ? "Loading..." : "See More"}
          </Button>
        </div>
      )}
    </div>
  );
}
