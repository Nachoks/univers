//Arreglos
const valores = [10,15,20,25]

//mostrar elementos tabla
console.table(valores)
console.log(valores)
console.log(valores[1]) //mostrar segundo elemento

//Modificar array
const alumnos = ["Dagoberto","Gonzalo","Gabriel"]
console.log("\n")
console.log(alumnos)

alumnos[2] = "Carlos"
console.log(alumnos)
alumnos[3] = "Ricardo"
console.log(alumnos)

//Poner elementos de alumnos en nuevo array mas otro alumno nuevo
const alumnos2 = [...alumnos, "Federico"]
console.log(alumnos2)

//Filtrar
alumnos[2] = "Gabriel"
console.log("Arreglo original")
console.log(alumnos)

//Filtrar a todos los que el nombre no empieza con G
const alumnosFiltrado = alumnos.filter(function(alumno){
    if(alumno[0] == "G"){
        return alumno
    }      
}) //Alumno es puntero, filter ejecuta la funcion, en base a la cantidad de datos en el arreglo
console.log(alumnosFiltrado)

//Mapear
const alumnosModificados = alumnos.map(function(alumno){    
    if(alumno === "Dagoberto"){
        alumno = "Dagoberto Cabrera"
    }
    return alumno
})


