import { appServices } from "@/services/apiServices";
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
  onError?: (error: unknown) => unknown
): Promise<Output> => {
  if (endpoint.useDummyData) {
    return onSuccess();
  }

  const response = await appServices.request({
    url: endpoint.url,
    method: endpoint.method,
    data: adapter(values) as never,
  });

  if (response.error) {
    onError?.(response.error);
    throw response.error;
  }

  return onSuccess(response.data);
};

export default apiCall;
