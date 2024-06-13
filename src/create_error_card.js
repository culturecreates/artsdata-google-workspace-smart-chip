const createErrorCard = message => {
  const previewHeader = CardService.newCardHeader()
    .setTitle('Error')
    .setSubtitle(message);

  return CardService.newCardBuilder()
    .setHeader(previewHeader)
    .build();
};

export default createErrorCard;
