function getStudents(){
    fetch('https://trainingapi-kns1.onrender.com/students')
      .then(response => response.json())
      .then(data => {
        var select_users = document.getElementById('select_users')
        data.forEach(st => {
            var opt = document.createElement('option');
            opt.innerHTML = st.name;
        select_users.appendChild(opt);
        });
      })
}

getStudents();