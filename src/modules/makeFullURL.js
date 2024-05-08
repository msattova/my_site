export const makeFullURL = (AstroUrl, fileUrl) => {

  const baseUrl = `${AstroUrl}`.match(/(https?:\/\/[^/]+)/)[1];

  const fullUrl = baseUrl + fileUrl;

  return fullUrl;

}
