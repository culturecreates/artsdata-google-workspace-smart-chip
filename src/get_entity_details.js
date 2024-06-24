const getEntityDetails = url => {
  const headers = {
    Accept: 'application/ld+json'
  };

  const options = {
    method: 'get',
    headers
  };

  try {
    const url_https = url.replace('http://', 'https://');
    const response = UrlFetchApp.fetch(url_https, options);
    return JSON.parse(response);
  } catch (error) {
    if (error.name === 'Exception') {
      return { error: 'The URL is invalid.(Try using https if the URL is in http)' };
    }
    return { error: error.message };
  }
};

export default getEntityDetails;
