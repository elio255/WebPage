function getStudents() {
    fetch('https://trainingapi-kns1.onrender.com/students')
        .then(response => response.json())
        .then(data => {
            var select_users = document.getElementById('select_users');
            data.forEach(st => {
                var opt = document.createElement('option');
                opt.value = st.id;
                opt.innerHTML = st.name;
                select_users.appendChild(opt);
            });
        });
}

function getUserInfo() {
    var select_users = document.getElementById('select_users');
    var selectedId = select_users.value;

    fetch(`https://trainingapi-kns1.onrender.com/students/${selectedId}`)
        .then(response => response.json())
        .then(data => {
            var user_info = document.getElementById('user_info');
            user_info.innerHTML = `ID: ${data.id}<br>Name: ${data.name}<br>Age: ${data.age}<br>Email: ${data.email}`;
        });
}

document.getElementById('get_user_info').addEventListener('click', getUserInfo);

getStudents();
