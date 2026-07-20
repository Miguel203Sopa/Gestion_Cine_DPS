"use client";

interface Props{

    titulo:string;

    valor:string | number;

    icono:string;

}

export default function TarjetaEstadistica({

    titulo,

    valor,

    icono

}:Props){

    return(

        <div className="tarjeta-estadistica">

            <div className="icono">

                {icono}

            </div>

            <h3>

                {titulo}

            </h3>

            <h2>

                {valor}

            </h2>

        </div>

    );

}