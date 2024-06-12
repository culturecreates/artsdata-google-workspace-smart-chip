import getEntityDetails from './get_entity_details';
import createPersonOrganizationCard from './create_person_organization_card';
import createLocationCard from './create_location_card';
import createConceptCard from './create_concept_card';
import createErrorCard from './create_error_card';

const artsdataPreview = event => {
  const url = event?.sheets?.matchedUrl?.url;
  if (url) {
    const entityData = getEntityDetails(url);
    if (entityData?.type?.includes('skos:Concept')) {
      return createConceptCard(entityData);
    }
    switch (entityData?.type) {
      case 'Organization':
      case 'Person':
        return createPersonOrganizationCard(entityData);
      case 'Place':
        return createLocationCard(entityData);
      default:
        return createErrorCard();
    }
  }
  return null;
};

export default artsdataPreview;
