import { api } from "@/configs/api";
import { Endpoint } from "@/types/endpoint";

/**
 * Exmaple
 * apiCall(Object endpoint, adapter, Object values, successCallBack, errorCallBack)
 *  Endpoint: {
 *      url: "/account/signup",
 *      method: "POST",
 *      useDummyData: true,
 * };
 *
 */

export interface ApiCallResult<T> {
  data: T | null;
  error: Error | null;
}

const apiCall = async <
  Input = unknown,
  Output = unknown,
  RawResponse = unknown // ← response asli dari server
>(
  endpoint: Endpoint,
  adapter: (data: Input) => unknown,
  values: Input,
  onSuccess: (data: RawResponse) => Output,
  onError?: (error: unknown) => unknown
): Promise<ApiCallResult<Output>> => {
  if (endpoint.useDummyData) {
    return { data: onSuccess({} as RawResponse), error: null };
  }

  try {
    const response = await api[endpoint.method](
      endpoint.url,
      adapter(values) as never
    );

    return { data: onSuccess(response.data.data), error: null };
  } catch (err: any) {
    const mappedError = new Error(
      err.response?.data?.message || "Internal Server Error"
    );

    onError?.(mappedError);
    return { data: null, error: mappedError };
  }
};

export default apiCall;
