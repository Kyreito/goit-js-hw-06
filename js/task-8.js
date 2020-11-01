// Write code under this line
const getUsersWithFriend = (array, friendName) => array.filter(function({friends}){
  return friends.includes(friendName)
}).map(function({name}){
  return name
});

 console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]