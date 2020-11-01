// Write code under this line
const getNamesSortedByFriendsCount = (array) => array = [...array].sort(function(prev, next){
  return prev.friends.length - next.friends.length
}).map(function({name}){
  return name
});


 console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
