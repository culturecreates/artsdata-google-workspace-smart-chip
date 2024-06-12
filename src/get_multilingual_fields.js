const getMultilingualFields = field => {
  return field?.en || field?.fr || field?.['@none'] || '';
};

export default getMultilingualFields;
