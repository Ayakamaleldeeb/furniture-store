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

interface FurnitureResponse {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: Furniture[];
}

interface FurnitureQueryParams {
  sort?: string;
  brandId?: string;
  categoryId?: string;
  search?: string;
  pageSize?: number;
  pageIndex?: number;
}

const getFurniture = async (
  params?: FurnitureQueryParams
): Promise<FurnitureResponse> => {
  const { data } = await Axios.get<FurnitureResponse>("/api/Furniture", {
    params,
  });
  if (!data) {
    throw Error("Error");
  }
  return data;
};

const useGetFurniture = (
  params?: FurnitureQueryParams,
  options?: UseQueryOptions<FurnitureResponse, Error>
) => {
  const data = useQuery<FurnitureResponse, Error>(
    ["Get-Furniture", params],
    () => getFurniture(params),
    {
      ...options,
    }
  );
  return data;
};

export default useGetFurniture;
