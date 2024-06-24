const getEntityDetails = url => {
  const headers = {
    Accept: 'application/ld+json'
  };

  const options = {
    method: 'get',
    headers
  };

  try {
    const urlHttps = url.replace('http://', 'https://');
    const response = UrlFetchApp.fetch(urlHttps, options);
    return JSON.parse(response);
  } catch (error) {
    if (error.name === 'Exception') {
      return { error: 'The URL is invalid.' };
    }
    return { error: error.message };
  }
};

export default getEntityDetails;
