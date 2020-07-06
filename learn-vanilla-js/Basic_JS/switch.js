// JS Nuggets: Switch Statements

let day;
switch (new Date().getDay()) {
    case 0:
    	day = "Sunday";
        break;
    case 1:
    	day = "Monday";
        break;
    case 2:
    	day = "Tuesday";
        break;
    case 3:
    	day = "Wednesday";
        break;
    case 4:
    	day = "Thursday";
        break;
    case 5:
    	day = "Friday";
        break;
    case 6:
    	day = "Saturday";
}
console.log(day)


var Animal = 'chicken';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
    console.log('This animal will go on Noah\'s Ark.');
    Break;
  case 'Spoon':
    console.log('A spoon is not an animal!');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not be on the Ark.');
}