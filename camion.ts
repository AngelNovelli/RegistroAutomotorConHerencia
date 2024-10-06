import { Vehiculo } from "./vehiculo";

export class Camion extends Vehiculo {
    constructor(tipo:string,marca: string, modelo: string, anio: number) {
        super(tipo,marca, modelo, anio);
    }
}