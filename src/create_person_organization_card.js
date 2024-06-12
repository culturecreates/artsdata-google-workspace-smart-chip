import getMultilingualFields from './get_multilingual_fields';

const createPersonOrganizationCard = entityData => {
  const entityName = getMultilingualFields(entityData?.name);
  const entityType = entityData?.type || '';
  const disambiguatingDescription = getMultilingualFields(entityData.disambiguatingDescription);

  const previewHeader = CardService.newCardHeader()
    .setTitle(entityName)
    .setSubtitle(entityType);

  const cardContent = CardService.newCardSection().addWidget(
    CardService.newTextParagraph().setText(disambiguatingDescription)
  );

  return CardService.newCardBuilder()
    .setHeader(previewHeader)
    .addSection(cardContent)
    .build();
};

export default createPersonOrganizationCard;
