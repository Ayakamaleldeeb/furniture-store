import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import useGetFurniture from "@/use-apis/furniture/useGetFurniture";
import { useForm } from "react-hook-form";
//  import { useRouter } from 'next/router';

//  interface Product {
//    id: string;
//    name: string | null;
//    pictureUrl: string | null;
//    price: number;
//  }

//  interface SearchNavProps {
//    onSearch: (query: string) => void;
//    products: Product[];
//    isLoading: boolean;
//  }

export default function SearchNav() {
  const [isOpen, setIsOpen] = useState(false);
  //    const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  //    const router = useRouter();
  const { register, handleSubmit, reset, watch } = useForm();
  const { data: products, isLoading } = useGetFurniture(
    {
      pageSize: 10,
      search: watch("search"),
    },
    {
      enabled: !!watch("search"),
      refetchOnWindowFocus: false,
      staleTime: 0,
      cacheTime: 0,
      onError(err) {
        console.log("🚀", err);
      },
    }
  );
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  console.log(watch("search"));

  const onSubmit = () => {
    // console.log(data);
    reset();
  };
  return (
    <div ref={searchRef} className="relative z-20 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border"
      >
        <Search className="w-5 h-5 text-muted-foreground" />
        <input
          {...register("search")}
          type="text"
          placeholder="Search furniture..."
          //    value={value}
          //    onChange={handleSearchChange}
          onFocus={() => setIsOpen(true)}
          className="bg-transparent border-none outline-none w-full text-foreground placeholder:text-muted-foreground"
        />
        {products && (
          <button
            //  onClick={() => {
            //    setSearchQuery('');
            //    onSearch('');
            //  }}
            type="submit"
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </form>

      <AnimatePresence>
        {isOpen && products && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-border overflow-hidden"
          >
            {isLoading ? (
              <div className="p-4 text-center">
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary mx-auto"></div>
              </div>
            ) : products.count > 0 ? (
              <div className="max-h-[400px] overflow-y-auto">
                {products?.data.map((product) => (
                  <Link
                    key={product.id}
                    href={`/furniture/${product.id}`}
                    className="flex items-center gap-3 p-3 hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {product.pictureUrl && (
                      <div className="w-12 h-12 rounded-md bg-muted overflow-hidden relative">
                        <img
                          src={product.pictureUrl}
                          alt={product.name || ""}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-muted-foreground">
                No results found
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
