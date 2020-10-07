var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];

  this.getFullName = () => {return firstName + ' ' + lastName};
  
  this.getFirstName = () => {return firstName}

  this.getLastName = () => {return lastName}

  this.setFirstName = first => {firstName = first; 
    return firstName + ' ' + lastName
  }

  this.setLastName = last => {lastName = last; 
    return firstName + ' ' + lastName;
  }

  this.setFullName = newName => {
    firstName = newName.split(' ')[0];
    lastName = newName.split(' ')[1];
    return firstName + ' ' + lastName;
  }
};

var bob = new Person('Bob Ross');