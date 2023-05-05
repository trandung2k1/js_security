//set
sessionStorage.setItem('name', 'Dung');
sessionStorage.setItem('age', 21);

//get
console.log(sessionStorage);
console.log(sessionStorage.getItem('age'));
console.log(sessionStorage.getItem('name'));

//remove
sessionStorage.removeItem('name');
sessionStorage.removeItem('age');

//remove all sessions storage
// sessionStorage.clear()

console.log(sessionStorage.key('name'));
console.log(sessionStorage.length);
