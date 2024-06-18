const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu('Artsdata Reconciliation')
    .addItem('Search', 'artsdataSearch')
    .addToUi();
};

export default onOpen;
