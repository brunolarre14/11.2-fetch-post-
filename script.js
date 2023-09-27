const url = "https://jsonplaceholder.typicode.com/users"


function enviarDatos(){
  
  let nom = document.getElementById("nombre").value
  let ape = document.getElementById("apellido").value
  let fecha = document.getElementById("fecha").value
  

function limpiarCampos(){
  document.getElementById("nombre").value= " "
  document.getElementById("apellido").value= " "
  document.getElementById("fecha").value = 0
  
}




fetch(url, {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
    nombre: nom ,
    apellido: ape ,
    FechaNac: fecha,
    

  })
})
.then(response => response.json())
.then(data => console.log(data))
document.getElementById("submit").addEventListener("click", alert("Datos enviados correctamente!"),
document.getElementById("submit").addEventListener("click", limpiarCampos())

)}

document.addEventListener(`DOMContentLoaded`, function(){
    
    document.getElementById("submit").addEventListener("click", enviarDatos)
    
  })