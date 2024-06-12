import getMultilingualFields from './get_multilingual_fields';

const createConceptCard = entityData => {
  const entityName = getMultilingualFields(entityData?.name);
  const url = entityData?.type?.filter(type =>
    type.startsWith('http://kg.artsdata.ca/ontology')
  )?.[0];
  const parts = url.split('/');
  const entityType = parts[parts.length - 1];

  const formattedEntityType = entityType.replace(/([a-z])([A-Z])/g, '$1 $2');
  const disambiguatingDescription = getMultilingualFields(entityData.disambiguatingDescription);

  const previewHeader = CardService.newCardHeader()
    .setTitle(entityName)
    .setSubtitle(formattedEntityType);

  const cardContent = CardService.newCardSection().addWidget(
    CardService.newTextParagraph().setText(disambiguatingDescription)
  );

  return CardService.newCardBuilder()
    .setHeader(previewHeader)
    .addSection(cardContent)
    .build();
};

export default createConceptCard;
