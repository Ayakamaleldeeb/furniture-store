// import Axios from "@/helpers/Axios";
// import { useQuery, UseQueryOptions } from "react-query";
// import { paths as AuraApis } from "@/types/generated/auraApis";

//  
// type Responses = AuraApis;
//  
// type URLS =
//   | keyof AuraApis
//  
// type Parameters<T extends URLS> = Responses[T] extends {
//   get?: {
//     parameters?: {
//       query?: infer Q;
//     };
//   };
// }
//   ? Q
//   : never;
//  
// type Response<T extends URLS> = Responses[T] extends {
//   get?: {
//     responses: {
//       200?: {
//         content?: {
//           "application/json"?: infer R;
//         };
//       };
//     };
//   };
// }
//   ? R
//   : never;
//  
// type QueryFunctionType<T extends URLS> = QueryFunction<
//   Response<T>,
//   [T, Parameters<T>]
// >;
//  
// const callFn = async ({ queryKey }) => {
//   const [url, params] = queryKey;
//   try {
//     const { data } = await Axios.get(url, { params });
//     if (!!data) {
// //       throw new Error(data.genericResult.userFriendlyArabicMessage);
//       throw new Error("Error");

//     }
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };
//  
// interface GlobalQueryProps<P extends URLS> {
//   url: P;
//   params?: Parameters<P>;
//   options?: UseQueryOptions<Response<P>, Error>;
// }
//  
// const useGlobalQuery = <P extends URLS>({
//   url,
//   params,
//   options,
// }: GlobalQueryProps<P>) => {
//   const data = useQuery<Response<P>, Error>({
//     queryKey: [url, params],
//     queryFn: callFn,
//     ...options,
//   });
//   return data;
// };
//  
// export default useGlobalQuery;