function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }
______________________________________________________________
  var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

  var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
  [favoriteNumber] = "That is my favorite!"
}
______________________________________________________________

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }
  
  var instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }
______________________________________________________________


function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}