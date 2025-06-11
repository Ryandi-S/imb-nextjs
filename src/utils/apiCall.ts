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

/**
 * Generic API caller with adapter and callbacks.
 *
 * @param endpoint - Endpoint config (method, url, dummy flag)
 * @param adapter - Function to adapt raw request
 * @param values - Payload for request
 * @param onSuccess - Called when API call is successful
 * @param onError - Called when API call fails
 */
const apiCall = async <Input = unknown, Output = unknown>(
  endpoint: Endpoint,
  adapter: (data: Input) => unknown,
  values: Input,
  onSuccess: (data?: unknown) => Output,
  onError: (error: unknown) => unknown
): Promise<Output> => {
  if (endpoint.useDummyData) {
    return onSuccess();
  }

  try {
    const response = await api[endpoint.method](
      endpoint.url,
      adapter(values) as never
    );
    console.log(response.data);

    return onSuccess(response.data.data);
  } catch (error) {
    console.log("Error >>", error);

    onError(error);
    throw error;
  }
};

export default apiCall;
