const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu('Custom Menu')
    .addItem('First Item', 'menuItem')
    .addToUi();

    
};

export default onOpen;
