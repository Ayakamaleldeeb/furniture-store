import Axios from "@/helpers/Axios";
import { useMutation } from "react-query";
import { paths as AuraApis } from "@/types/generated/auraApis";
type Types = AuraApis;
 
type PostURLs = {
  [K in keyof Types]: Types[K] extends { post: Record<string, unknown> }
    ? K
    : never;
}[keyof Types];
 
type Parameters<T extends PostURLs> = Types[T] extends {
  post: { parameters: { query?: infer Q } };
}
  ? Q
  : never;
 
type Responses<T extends PostURLs> = Types[T] extends {
  post?: {
    responses: {
      200?: {
        content?: {
          "application/json"?: infer R;
        };
      };
    };
  };
}
  ? R
  : never;
 
type RequestBody<T extends PostURLs> = Types[T] extends {
  post?: {
    requestBody?: {
      content?: {
        "application/json"?: infer R;
      };
    };
  };
}
  ? R
  : never;
 
const callFn = async <P extends PostURLs>(variables: {
  url: P;
  params?: Parameters<P>;
  requestBody?: RequestBody<P>;
}): Promise<Responses<P>> => {
  const { params, requestBody, url } = variables;
 
  try {
    const {
      data,
    }: {
//       data: TGenericResult & { genericResult?: TGenericResult };
      data: any;

    } = await Axios.post(url, requestBody, { params });
    const success = !data
 
    if (success) {
      return data as Responses<P>;
    } else {
      throw new Error(
        
          "Unknown error"
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
 
const useGlobalMutation = <P extends PostURLs>(url: P) => {
  const mutation = useMutation<
    Responses<P>,
    Error,
    { params?: Parameters<P>; requestBody?: RequestBody<P> }
  >((variables) => callFn({ url, ...variables }));
 
  return mutation;
};
 
export default useGlobalMutation;