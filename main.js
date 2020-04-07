/******************
 * YOUR CODE HERE *
 ******************/
const newPerson = (firstName ,lastName , age, married = false ) => {
  // if (firstName === undefined)
  //  {firstName = 'Anonymous'}
  let newPer = {firstName,
                lastName,
                age,
                married,
                goingOn: function(){
                    return this.age +1
                  },
                ageUp: function(){
                    return this.age += 1
                  },
                getFullName: function(){
                    return this.firstName + ' ' + this.lastName
                  },
                marry: function(obj){
                    this.married = true
                    obj.married = true
                    this.spouseName = obj.getFullName()
                    obj.spouseName = this.getFullName()
                  },
                divorce: function(obj){
                    this.married = false
                    obj.married = false
                    delete this.spouseName
                    delete obj.spouseName
                  },
                }
                
                
                if (firstName === undefined){
                        newPer.firstName = 'Anonymous'
                        newPer.lastName = 'Person'
                    }
    return newPer
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = {
  newPerson,
}
