describe("Address Book", function () {
  // declaring global variables
  var addressBook, thisContact;

  // will run before every it();
  beforeEach(function () {
    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  // adding a contact
  it("should be able to add a contact", function () {
    addressBook.addContact(thisContact);

    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  // deleting a contact
  it("should be able to delete a contact", function () {
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

// Async testing
describe("Async Address Book", function () {
  var addressBook = new AddressBook();

  beforeEach(function (done) {
    addressBook.getInitialContacts(function () {
      done();
    });
  });

  it("should grab initial contacts", function (done) {
    expect(addressBook.initialComplete).toBe(true);
    done();
  });
});
