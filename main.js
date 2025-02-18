"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vehiculo_1 = require("./vehiculo");
var automotor_1 = require("./automotor");
var registroAutomotor = new automotor_1.RegistroAutomotor();
// Crear vehiculos
var auto = new vehiculo_1.Vehiculo("Auto", "Ford", "Mustang", 2024);
var moto = new vehiculo_1.Vehiculo("Moto", "Kawasaki", "Vulcan", 2021);
var camion = new vehiculo_1.Vehiculo("Camion", "Iveco", "Eurotech", 2020);
registroAutomotor.agregarVehiculo("Auto", auto);
registroAutomotor.agregarVehiculo("Moto", moto);
registroAutomotor.agregarVehiculo("Camion", camion);
console.log("Auto registrado:", registroAutomotor.getAuto());
console.log("Moto registrada:", registroAutomotor.getMoto());
console.log("Camion registrado:", registroAutomotor.getCamion());
var nuevoAuto = new vehiculo_1.Vehiculo("Auto", "Peugeot", "206", 2007);
var nuevaMoto = new vehiculo_1.Vehiculo("Moto", "Honda", "Accord", 2019);
var nuevoCamion = new vehiculo_1.Vehiculo("Camion", "Volvo", "FH 500", 2018);
registroAutomotor.modificarVehiculo("Auto", auto, nuevoAuto);
registroAutomotor.modificarVehiculo("Moto", moto, nuevaMoto);
registroAutomotor.modificarVehiculo("Camion", camion, nuevoCamion);
console.log("Auto modificado:", registroAutomotor.getAuto());
console.log("Moto modificado:", registroAutomotor.getMoto());
console.log("Camion modificado:", registroAutomotor.getCamion());
registroAutomotor.darBaja("Auto", nuevoAuto);
registroAutomotor.darBaja("Moto", nuevaMoto);
registroAutomotor.darBaja("Camion", nuevoCamion);
console.log("Autos dado de baja:", registroAutomotor.getAuto());
console.log("Motos dado de baja:", registroAutomotor.getMoto());
console.log("Camion dado de baja:", registroAutomotor.getCamion());
