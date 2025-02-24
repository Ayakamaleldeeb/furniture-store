import { useQuery, UseQueryOptions } from "react-query";
import Axios from "@/helpers/Axios";
type Data = {
  email: string;
  token: string;
  displayName: string;
};
const getAdmin = async () => {
  const { data }: { data: Data } = await Axios.get("/api/admin");
  if (!data) {
    throw Error("Error");
  }
  return data;
};
const useGetAdmin = (
  //   { itemCode, selectedHub }: { itemCode: string; selectedHub: number },
  options?: UseQueryOptions<any, Error>
) => {
  const data = useQuery<any, Error, any>(
    //     ["return-to-office", itemCode, selectedHub],
    ["Get-admin"],
    getAdmin,
    {
      ...options,
    }
  );
  return data;
};
export default useGetAdmin;
