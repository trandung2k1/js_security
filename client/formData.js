const form = document.querySelector('#form');
const btn = document.getElementById('btn');
// document.cookie = `name=Dung; expires=${new Date(
//     '2024-06-05 10:00:00',
// ).toUTCString()}; path=/; signed=false; secure=false; sameSite=strict`;
// document.cookie = `age=21; expires=${new Date(
//     '2024-06-05 10:00:00',
// ).toUTCString()}; path=/; signed=false; secure=false; sameSite=strict`;
btn.onclick = function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    formData.append('age', 21);
    const data = new URLSearchParams(formData);
    fetch('http://localhost:4000/login', {
        method: 'POST',
        body: data,
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
};
