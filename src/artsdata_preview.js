import getEntityDetails from './get_entity_details';

const artsdataPreview = event => {
  const url = event?.sheets?.matchedUrl?.url;
  if (url) {
    const entityData = getEntityDetails(url);
    let entityName = entityData?.name?.fr || entityData?.name?.en || '';
    const entityType = entityData?.type;
    if (entityData?.type?.includes('skos:Concept')) {
      entityName = entityData?.['skos:prefLabel']?.fr || entityData?.['skos:prefLabel']?.en;
    }
    const previewHeader = CardService.newCardHeader()
      .setTitle(entityName)
      .setSubtitle(entityType);
    return CardService.newCardBuilder()
      .setHeader(previewHeader)
      .build();
  }
  return null;
};

export default artsdataPreview;
