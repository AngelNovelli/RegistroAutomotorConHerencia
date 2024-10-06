import { Vehiculo } from "./vehiculo";
import { RegistroAutomotor } from "./automotor";
 

const registroAutomotor = new RegistroAutomotor();

// Crear vehiculos
const auto = new Vehiculo("Auto","Ford","Mustang", 2024);
const moto = new Vehiculo("Moto","Kawasaki","Vulcan", 2021);
const camion = new Vehiculo("Camion","Iveco","Eurotech", 2020);

registroAutomotor.agregarVehiculo("Auto", auto);
registroAutomotor.agregarVehiculo("Moto", moto);
registroAutomotor.agregarVehiculo("Camion", camion);
console.log("Auto registrado:", registroAutomotor.getAuto());
console.log("Moto registrada:", registroAutomotor.getMoto() );
console.log("Camion registrado:", registroAutomotor.getCamion() );

const nuevoAuto = new Vehiculo("Auto", "Peugeot", "206", 2007);
const nuevaMoto = new Vehiculo("Moto", "Honda", "Accord", 2019);
const nuevoCamion = new Vehiculo("Camion", "Volvo", "FH 500", 2018);
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