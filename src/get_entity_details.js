const getEntityDetails = url => {
  const headers = {
    Accept: 'application/ld+json'
  };

  const options = {
    method: 'get',
    headers
  };
  const response = UrlFetchApp.fetch(url, options);
  return JSON.parse(response);
};

export default getEntityDetails;
