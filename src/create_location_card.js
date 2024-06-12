import getMultilingualFields from './get_multilingual_fields';

const createLocationCard = entityData => {
  const entityName = getMultilingualFields(entityData?.name);
  const entityType = entityData?.type || '';
  const streetAddress = getMultilingualFields(entityData?.address?.streetAddress);
  const addressLocality = getMultilingualFields(entityData?.address?.addressLocality);
  const postalCode = entityData?.address?.postalCode || '';
  const placeAddress = `${streetAddress}, ${addressLocality}, ${postalCode}`;

  const previewHeader = CardService.newCardHeader()
    .setTitle(entityName)
    .setSubtitle(entityType);

  const cardContent = CardService.newCardSection().addWidget(
    CardService.newTextParagraph().setText(placeAddress)
  );

  return CardService.newCardBuilder()
    .setHeader(previewHeader)
    .addSection(cardContent)
    .build();
};

export default createLocationCard;
