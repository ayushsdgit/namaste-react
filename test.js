const user = [
  { firstname: "Mohammad", lastname: "Noushad", age: 22 },
  { firstname: "Aniket", lastname: "Bhalla", age: 45 },
  { firstname: "Bidhi", lastname: "Chand", age: 21 },
  { firstname: "Saif", lastname: "Siddiqi", age: 67 },
];
[
  { firstname: "Mohammad", lastname: "Noushad", age: 22 },
  { firstname: "Aniket", lastname: "Bhalla", age: 45 },
  { firstname: "Bidhi", lastname: "Chand", age: 21 },
  { firstname: "Saif", lastname: "Siddiqi", age: 67 },
];


const getPeople = user.reduce(function(acc, curr) {

if(curr.age>30){
acc.push(curr.firstname)
}    
return acc 
},[])

console.log(getPeople);