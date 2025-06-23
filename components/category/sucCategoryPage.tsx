"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ui/itemCard";
import { Button } from "@/components/ui/button";
import useGetFurniture from "@/use-apis/furniture/useGetFurniture";
import useGetBrands from "@/use-apis/brand/useGetBrands";
import useGetColors from "@/use-apis/colors/useGetColors";
import useGetCategory from "@/use-apis/category/useGetCategory";
import { Filter } from "lucide-react";

const SORT_OPTIONS = [
  { value: undefined, label: "none" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
];

const ITEMS_PER_PAGE = 8;

interface Brand {
  id: string;
  name: string | null;
}

interface Category {
  id: string;
  name: string | null;
}

// interface Color {
//   id: string;
//   name: string | null;
// }

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

interface FurnitureQueryParams {
  sort?: string;
  brandId?: string;
  categoryId?: string;
  search?: string;
  pageSize?: number;
  pageIndex?: number;
}

export function SubCategoriesComponent({ categoryId }: any) {
  const [displayedProducts, setDisplayedProducts] = useState<Furniture[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Filter state
  const [filters, setFilters] = useState<FurnitureQueryParams>({
    sort: undefined,
    brandId: undefined,
    categoryId: categoryId,
    search: undefined,
    pageSize: ITEMS_PER_PAGE,
    pageIndex: 1,
  });

  // Fetch brands, categories, and colors
  const { data: brands = [], isLoading: brandsLoading } = useGetBrands();
  const { data: categories = [], isLoading: categoriesLoading } =
    useGetCategory();
  const { data: colors = [], isLoading: colorsLoading } = useGetColors();

  const { data: products, refetch } = useGetFurniture(filters, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const totalPages = Math.ceil((products?.count ?? 0) / ITEMS_PER_PAGE);

  // Load products for a specific page
  const loadProducts = async (page: number) => {
    setLoading(true);
    setCurrentPage(page);
    setFilters((prev) => ({
      ...prev,
      pageIndex: page,
    }));
    await refetch();
    setLoading(false);
  };

  // Handle filter change (sort, brand, category)
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
      pageIndex: 1,
    }));
    setCurrentPage(1);
    setLoading(true);
    refetch().finally(() => setLoading(false));
  };

  // Handle search submit
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const search = (form.elements.namedItem("search") as HTMLInputElement)
      .value;
    setFilters((prev) => ({
      ...prev,
      search,
      pageIndex: 1,
    }));
    setCurrentPage(1);
    setLoading(true);
    refetch().finally(() => setLoading(false));
  };

  // Load more products (pagination)
  const loadMore = () => {
    if (currentPage < totalPages) {
      loadProducts(currentPage + 1);
    }
  };

  // Append or replace products based on page
  useEffect(() => {
    if (products) {
      const newProducts = products.data;
      if (currentPage === 1) {
        setDisplayedProducts(newProducts);
      } else {
        setDisplayedProducts((prev) => [...prev, ...newProducts]);
      }
    }
  }, [products, currentPage]);

  return (
    <div className="space-y-8 px-4 sm:px-8 md:px-16 lg:px-28 my-4">
      <div className="flex justify-end my-5 ">
        <h2 className="text-3xl font-bold text-center m-auto flex">
          {categories
            .filter((e: any) => e.id === categoryId)
            .map((cat: any) => cat.name)}
        </h2>
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className={`px-4 py-2 border border-black rounded transition-colors ${
            showFilters
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-black hover:text-white"
          }`}
        >
          <Filter className="inline " />
        </button>
      </div>
      {/* Filter Bar */}
      <div className="w-full">
        {showFilters && (
          <form
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white rounded-xl shadow-sm border"
            onSubmit={handleSearch}
          >
            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Sort
              </label>
              <select
                name="sort"
                value={filters.sort}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Brand */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Brand
              </label>
              <select
                name="brandId"
                value={filters.brandId}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                disabled={brandsLoading}
              >
                <option value="">All Brands</option>
                {brands.map((brand: any) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Category
              </label>
              <select
                name="categoryId"
                value={filters.categoryId}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                disabled={categoriesLoading}
              >
                {categories
                  .filter((e: any) => e.id === categoryId)
                  .map((cat: any) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Color
              </label>
              <select
                name="colorId"
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                disabled={colorsLoading}
              >
                <option value="">All Colors</option>
                {colors.map((color: any) => (
                  <option key={color.id} value={color.id}>
                    {color.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div className="sm:col-span-1 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Search
              </label>
              <input
                type="text"
                name="search"
                placeholder="Search..."
                defaultValue={filters.search}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Submit Button */}
            <div className="flex  items-end">
              <button
                type="submit"
                className="w-full sm:w-auto border border-black text-black hover:bg-black hover:text-white transition-colors px-4 py-2 rounded"
              >
                Search
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {currentPage < totalPages && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={loadMore}
            disabled={loading}
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
