describe('ToDoList', function() {

  beforeEach(function(){
    browser.get('http://localhost:3000');
  });

  describe('When initialized', function(){

    it('has a title', function() {
      expect(browser.getTitle()).toEqual('To Do List');
    });

    it('has an input form', function() {
      expect(browser.isElementPresent(by.model('newItem'))).toBe(true);
    });

    it('has a submit button', function() {
      expect(browser.isElementPresent(by.id('addNewItem'))).toBe(true);
    });
  });


  describe('When creating an item', function(){

    var activeItems;

    beforeEach(function(){
      element(by.model('newItem')).sendKeys("Get milk");
      element(by.buttonText('Add')).click();
      activeItems = element.all(by.repeater('item in ctrl.itemList'));
    });

    it('it can display the item', function(){
      expect(activeItems.get(0).getText()).toEqual('Get milk');
      expect(activeItems.count()).toEqual(1);
    });

    xit('it has a checkbox to mark item as completed', function(){
      expect(browser.isElementPresent(by.id('completeCheckbox'))).toBe(true);
    });

    xit('can clear completed items', function(){
      element(by.id('completeCheckbox')).click();
      element(by.buttonText('Clear Completed')).click();
      expect(activeItems.getText()).toBeEmpty;
    });
  });
});
