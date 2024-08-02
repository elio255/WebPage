function getStudents(){
    fetch('https://trainingapi-kns1.onrender.com/students')
      .then(response => response.json())
      .then(json => console.log(json))
}

getStudents();