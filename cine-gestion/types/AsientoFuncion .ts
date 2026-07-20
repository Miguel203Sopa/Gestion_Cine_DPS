import { Asiento } from "./Asiento"

export interface AsientoFuncion {

    asiento: Asiento;

    estado:"libre"|"ocupado"|"elegido";

}