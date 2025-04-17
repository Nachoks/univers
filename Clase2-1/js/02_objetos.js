//objeto
const alumno = {
    rut: "20484072-5",
    nombre: "Ignacio Miranda",
    edad: 24
}

//mostrar datos
console.log(alumno)
console.table(alumno) //formato tabla para ver los datos
console.log(alumno.nombre) //sintaxis de punto
console.log(alumno.direccion) //undefined

//extraer datos

//const rut = alumnos.rut
//const edad = alumno.edad

const{ rut,edad } = alumno // equivalente a las dos lineas comentadas arriba
console.log(rut+" "+edad)

//enhanced object literals: permite crear objetos mas rapidos 

const jornada = "Diurna"
const gratuidad = true

//const nuevoObjeto = {
   // jornada: jornada, //Key: variable que tiene el dato
   // gratuidad: gratuidad
//}

const nuevoObjeto = { //equivalente a lo de arriba
    jornada,
    gratuidad
}