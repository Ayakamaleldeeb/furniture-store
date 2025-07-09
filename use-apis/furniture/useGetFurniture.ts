import { useQuery, UseQueryOptions } from "react-query";
import Axios from "@/helpers/Axios";

// Define TypeScript interfaces for the response data
interface Brand {
  id: string;
  name: string | null;
}

interface Category {
  id: string;
  name: string | null;
}

interface Color {
  id: string;
  name: string | null;
  hex?: string | null;
}

interface Rating {
  id: string;
  stars: number;
  review: string | null;
  userId: string | null;
  user: any;
  productId: string;
  product: any;
  createdAt: string;
}

interface StyleType {
  id: string;
  name: string | null;
  furnitures?: Furniture[];
}

interface Furniture {
  id: string;
  name: string | null;
  description: string | null;
  pictureUrl: string | null;
  furnitureModel: string | null;
  price: number;
  discountedPrice?: number | null;
  hasOffer: boolean;
  offerStartDate?: string | null;
  offerEndDate?: string | null;
  discountPercentage?: number | null;
  brandId: string;
  brand: Brand;
  categoryId: string;
  category: Category;
  styleTypeId: string;
  styleType: StyleType;
  colorId: string;
  color: Color;
  ratings: Rating[];
}

interface FurnitureQueryParams {
  sort?: string;
  brandId?: string;
  categoryId?: string;
  colorId?: string;
  search?: string;
  pageSize?: number;
  pageIndex?: number;
}

interface FurnitureApiResponse {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: Furniture[];
}

const getFurniture = async (
  params?: FurnitureQueryParams
): Promise<FurnitureApiResponse> => {
  const { data } = await Axios.get<FurnitureApiResponse>("/api/Furniture", {
    params,
  });
  if (!data) {
    throw Error("Error");
  }
  return data;
};

const useGetFurniture = (
  params?: FurnitureQueryParams,
  options?: UseQueryOptions<FurnitureApiResponse, Error>
) => {
  const data = useQuery<FurnitureApiResponse, Error>(
    ["Get-Furniture", params],
    () => getFurniture(params),
    {
      ...options,
    }
  );
  return data;
};

export default useGetFurniture;
