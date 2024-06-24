const artsdataSearch = () => {
  const ui = SpreadsheetApp.getUi();
  const cell = SpreadsheetApp.getActiveSpreadsheet()
    .getActiveSheet()
    .getActiveCell();
  const value = cell.getValue();

  const query = encodeURIComponent(`{"q0":{"query":"${value}"}}`);
  const url = `https://api.artsdata.ca/recon?queries=${query}`;

  try {
    const response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    const results = response?.q0?.result;

    if (results && results.length > 0) {
      const choices = results.map(result => `${result.id} - ${result.name}`).join('\n');
      const userChoice = ui.prompt('Enter an ID from the list:', choices, ui.ButtonSet.OK_CANCEL);

      if (userChoice.getSelectedButton() === ui.Button.OK) {
        const chosenId = userChoice.getResponseText();
        cell.setValue(`http://kg.artsdata.ca/resource/${chosenId}`);
      } else {
        ui.alert('No ID chosen.');
      }
    } else {
      ui.alert('No results found.');
    }
  } catch (e) {
    ui.alert(`An error occurred: ${e.message}`);
  }
};

export default artsdataSearch;
