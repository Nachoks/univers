const alumno = {
    rut: "20484072-5",
    nombre: "Ignacio Miranda",
    edad: 24 
} //es constante alumno, la referencia, no los datos internos

//Object.freeze(alumno) //bloque un objeto para no modificarlo

//cambiar valor de un atributo
console.log(alumno.edad)
alumno.edad = 60
console.log(alumno.edad)

//agragar propiedad
alumno.tieneGratuidad = true
console.log(alumno)

//quitar propiedad
delete alumno.tieneGratuidad
console.log(alumno)