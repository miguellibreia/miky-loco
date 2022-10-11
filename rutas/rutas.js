//Importaciones
const { Router }= require("express")
const { getautor, getautorNombres, getautorBYID, postautor, deleteautor, putlautor } = require("../controladores/autor.controladores")
const { getlibros, getlibrosByid, postlibros, putlibros, deletelibro } = require("../controladores/libros.controladores")
const rutas = Router()
const URLV1 = "/v1"
 //Rutas autor
rutas.get(URLV1+"/autor",getautor)
rutas.get(URLV1+"/autor/:id",getautorBYID)
rutas .get(URLV1+"/libro/autor",getautorNombres)
rutas.post(URLV1+"/autor",postautor)
rutas.put(URLV1+"/autor",putlautor)
rutas.delete(URLV1+"/autor/:id",deleteautor)

//Rutas elibros
rutas.get(URLV1+"/libros",getlibros)
rutas.get(URLV1+"/libros/:id",getlibrosByid)
rutas.post(URLV1+"/libros",postlibros)
rutas.put(URLV1+"/libros",putlibros)
rutas.delete(URLV1+"/libros/:id",deletelibro)
 module.exports = rutas