export const checkResponseStatus = (status: number) => ({
  is200: status === 200,
  is201: status === 201,
  is204: status === 204,
  is404: status === 404,
  is409: status === 409,
  is422: status === 422,
});
