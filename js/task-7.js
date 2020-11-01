// Write code under this line
 
 const calculateTotalBalance = array => array.reduce(function(acc, {balance}){
   return acc + balance;
 }, 0);

 console.log(calculateTotalBalance(users)); 
// 20916

