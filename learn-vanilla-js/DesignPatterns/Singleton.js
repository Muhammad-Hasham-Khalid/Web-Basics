/* Singleton */

var mySingleton = (function () {
  // Instance stores a reference to the Singleton
  var instance;
  function init() {
    // Singleton
    // Private methods and variables
    function privateMethod() {
      console.log("I am private.");
    }
    var privateVariable = "I am also private.";
    var privateRandomNumber = Math.random();
    return {
      // Public methods and variables
      publicMethod: function () {
        console.log("The public can see me!");
      },
      publicProperty: "I am also public",
      getRandomNumber: function () {
        return privateRandomNumber;
      },
    };
  }
  return {
    // Get the singleton instance if one exists
    // or create one if it doesnot
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

// These both will give the same
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();

singleA.publicMethod();

console.log(singleA.publicProperty);
console.log(singleA.getRandomNumber() === singleB.getRandomNumber());
