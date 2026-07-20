
import { Asiento } from "./Asiento";

export interface Sala {

    id:string;

    nombre:string;

    tipo_butacas:string;

    filas:number;

    columnas:number;

    asientos: Asiento[];

}