const form = document.querySelector('#form');
const btn = document.getElementById('btn');
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

    fetch('http://localhost:4000', {})
        .then((res) => {
            return res.json();
        })
        .then((data) => console.log(data));
};
