import { useQuery, UseQueryOptions } from "react-query";
import Axios from "@/helpers/Axios";
type Data = {
  email: string;
  token: string;
  displayName: string;
}[];
const getUsers = async () => {
  const { data }: { data: Data } = await Axios.get("/api/Admin/users");
  if (!data) {
    throw Error("Error");
  }
  return data;
};
const useGetUsers = (
  //   { itemCode, selectedHub }: { itemCode: string; selectedHub: number },
  options?: UseQueryOptions<any, Error>
) => {
  const data = useQuery<any, Error, any>(
    //     ["return-to-office", itemCode, selectedHub],
    ["Get-users"],
    getUsers,
    {
      ...options,
    }
  );
  return data;
};
export default useGetUsers;
