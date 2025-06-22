import { useQuery, UseQueryOptions } from "react-query";
import Axios from "@/helpers/Axios";
type Data = {
  id: string;
  name: string;
}[];
const getCategories = async () => {
  const { data }: { data: Data } = await Axios.get("/api/Categories");
  if (!data) {
    throw Error("Error");
  }
  return data;
};
const useGetCategories = (

  options?: UseQueryOptions<any, Error>
) => {
  const data = useQuery<any, Error, any>(
    
    ["Get-users"],
    getCategories,
    {
      ...options,
    }
  );
  return data;
};
export default useGetCategories;
