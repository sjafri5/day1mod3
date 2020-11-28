






function generateLottoNum(){
  return Math.random() *32
}




const names = [{ fName: 'raza', lName: 'jafri'}]


names[0].fullName = 'asfasf'









const fullNames = names.map(function(person){
  return { fullName: `${person.fName} ${person.lName}`}
})











































const nums = [1, 43, 55, 99]


console.log(nums[2], '------');













const newNums = nums.map(function(x){
  return x * 10
})

console.log(newNums, '------');






















function sayName(name) {
  return 'hello my name is ' + name
}



// console.log(sayName('raza'))


















