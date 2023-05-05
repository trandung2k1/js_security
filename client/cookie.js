//set cookie
document.cookie = `name=Dung; expires=${new Date(
    '2024-06-05 10:00:00',
).toUTCString()}; path=/; signed=false; secure=false; sameSite=strict`;
document.cookie = `age=21; expires=${new Date(
    '2024-06-05 10:00:00',
).toUTCString()}; path=/; signed=false; secure=false; sameSite=strict`;
//httpOnly=false not working
// console.log(document.cookie)// string
let cookies = document.cookie.split('; ');
cookies = cookies.map((item) => {
    const array = item.split('=');
    return {
        [array[0]]: array[1],
    };
});
console.log(cookies);
console.log(document.cookie.search('age'));

//Delete cookie
// Delete application above browser
//Set cookie = null
document.cookie = `name=null;`;
