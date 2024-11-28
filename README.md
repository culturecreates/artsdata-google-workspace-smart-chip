# artsdata-google-workspace-smart-chip

# To edit the RDF Mapping
To run OntoRefine locally check the Docker daemon is running and type ./run_ontorefine.sh. This will run OntoRefine 'transform' API in Docker with the data and configuration files from the ontorefine directory.  If the 'transform' returns an HTTP 400 error then use OntoRefine to open the RDF mapping and check for error messages that pop-up in Ontorefine's  user interface. 

# To deploy to Google
1. npx clasp login
2. npm run deploy

# Making a demo
URL to demo Google sheet:
https://docs.google.com/spreadsheets/d/1fPcWbdSL-gcLmeGWVCID9TjBq5fGk4vG4HG2E7kSAb0

To reload this sheet use Nebula and view the artifact here:
https://kg.artsdata.ca/entity?uri=http%3A%2F%2Fkg.artsdata.ca%2Fdatabus%2Fculture-creates%2Fgoogle-sheet%2Ftest-events

# Notes

* The Artsdata reconciliation feature previously included in this project was deprecated and officially removed as of November 28, 2024.