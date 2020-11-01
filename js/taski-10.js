// Write code under this line
const getSortedUniqueSkills = (array) => array.reduce(function (users, skills) {
  users = [...users, ...skills.skills]

  return users

}, []).filter((item, idx, arr) => arr.indexOf(item) === idx).sort()

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
