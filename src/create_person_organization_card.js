import getMultilingualFields from './get_multilingual_fields';

const createPersonOrganizationCard = entityData => {
  const entityName = getMultilingualFields(entityData?.name);
  const entityType = entityData?.type || '';
  const disambiguatingDescription = getMultilingualFields(entityData.disambiguatingDescription);
  const entityImage = entityData?.image || '';

  const previewHeader = CardService.newCardHeader()
    .setTitle(entityName)
    .setSubtitle(entityType);

  const previewImage = CardService.newImage()
    .setAltText('Image of entity')
    .setImageUrl(entityImage);

  const cardContent = CardService.newCardSection()
    .addWidget(CardService.newTextParagraph().setText(disambiguatingDescription))
    .addWidget(previewImage);

  return CardService.newCardBuilder()
    .setHeader(previewHeader)
    .addSection(cardContent)
    .build();
};

export default createPersonOrganizationCard;
