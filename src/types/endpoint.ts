/**
 * Define the method
 * @returns The method object
 */
export enum Method {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch",
}

/**
 * Define the endpoint
 * @returns The endpoint object
 */
export type Endpoint = {
  url: string;
  method: Method;
  useDummyData: boolean;
};
