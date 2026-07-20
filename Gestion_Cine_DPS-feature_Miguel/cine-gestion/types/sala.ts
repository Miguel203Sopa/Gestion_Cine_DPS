export interface Asiento {
    codigo: string;
    reservado:boolean;

}

export interface Sala {
    nombre:string;
    asientos: Asiento[];
    
}