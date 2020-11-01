// Write code under this line
const getUsersWithGender = (array, gender) => array.filter(function (user) {
   return user.gender === gender
}).map(function ({name}) {
   return name;
});

 console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",  
  "Carey Barr",  
  "Blackburn Dotson"  
] */
