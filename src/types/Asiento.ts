export interface Asiento{
    id: number;
    numero: string;
    estado: "libre"|"ocupado"|"elegido";
}