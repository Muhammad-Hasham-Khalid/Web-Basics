class AddressBook {
  constructor() {
    this.contacts = [];
    this.initialComplete = false;
  }

  addContact(newContact) {
    this.contacts.push(newContact);
  }

  getContact(index) {
    return this.contacts[index];
  }

  deleteContact(index) {
    this.contacts.splice(index, 1);
  }

  getInitialContacts(cb) {
    var self = this;
    setTimeout(function () {
      self.initialComplete = true;
      if (cb) {
        return cb();
      }
    }, 3);
  }
}
