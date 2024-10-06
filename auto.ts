import { Vehiculo } from "./vehiculo";

export class Auto extends Vehiculo {
    constructor(tipo:string,marca: string, modelo: string, anio: number) {
        super(tipo,marca, modelo, anio);
    }
}