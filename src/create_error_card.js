const createErrorCard = () => {
  const previewHeader = CardService.newCardHeader()
    .setTitle('Error')
    .setSubtitle('Entity Type is not Compatible');

  return CardService.newCardBuilder()
    .setHeader(previewHeader)
    .build();
};

export default createErrorCard;
