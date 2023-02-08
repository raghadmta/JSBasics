// local storage
localStorage.setItem('name', 'raghad');
let name = localStorage.getItem('name');
console.log(name);

localStorage.removeItem('name'); // to remove the item from the memory
localStorage.clear(); // remove all the memory


// sessionStorage
sessionStorage.setItem('email', 'raghad@gmail.com');
let email = sessionStorage.getItem('email');
console.log(email);


sessionStorage.removeItem('name'); // to remove the item from the memory
sessionStorage.clear(); // remove all the memory
