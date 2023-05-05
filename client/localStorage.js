//set
localStorage.setItem('name', 'Dung');
localStorage.setItem('age', 21);

//get
console.log(localStorage.getItem('age'));
console.log(localStorage.getItem('name'));

//remove
localStorage.removeItem('name');
localStorage.removeItem('age');

//remove all
localStorage.clear();

console.log(localStorage.key('name'));
console.log(localStorage); //Storage {length: 0}
console.log(localStorage.length); //0
