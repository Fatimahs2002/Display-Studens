
// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))


// fetch('http://localhost:5000/students')
//       .then(response => response.json())
//       .then(json => console.log(json))

fetch('http://localhost:5000/students')
      .then(response => response.json())
      .then(json=>{
          json.forEach(student => {


          console.log(student);
          let ddl=document.getElementById('select_students')
          let option=document.createElement('option');
          option.innerHTML=student.name;
          ddl.appendChild(option);

      })
     });