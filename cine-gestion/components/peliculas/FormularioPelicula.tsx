"use client";



import { useState, useEffect } from "react";
import { Pelicula } from "@/types/pelicula";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addPelicula, updatePelicula,selectPelicula } from "@/redux/slices/peliculasSlice";
import './FormularioPelicula.css'



  export  const peliculaInicial: Pelicula = {
    codigo: "",
    nombre: "",
    genero: "",
    duracion: 0,
    clasificacion: "",
    precio: 0,
    disponible: true,
};

export default function FormularioPelicula() {

    //Metodo Error
    const [error, setError] = useState("");

    //objeto
    const [pelicula, setPelicula] = useState<Pelicula>(peliculaInicial);

    
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {

        const { name, value} = e.target;

        if (e.target instanceof HTMLInputElement){
            setPelicula({
                ...pelicula,
                [name]:
                    e.target.type === "checkbox"
                        ? e.target.checked
                        : e.target.type === "number"
                        ? Number(value)
                        : value
            })
        }else{
            setPelicula({
                ...pelicula,
                [name]:value
            });
        }
    }

    const dispatch = useAppDispatch();

    const peliculaSeleccionada = useAppSelector(
        state => state.peliculas.peliculaSeleccionada

    );
    useEffect(() => {

    if (peliculaSeleccionada) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPelicula(peliculaSeleccionada);
    }

    }, [peliculaSeleccionada]);

    const peliculas = useAppSelector(
        state => state.peliculas.peliculas
    );

    

const guardarPelicula = ()=>{


    //validacion------------

    const existe = peliculas.some(
        p => p.codigo === pelicula.codigo
    );
    
    if (!pelicula.nombre.trim()) {
        setError("El nombre de la película es obligatorio.");
        return;
    }

    if (!pelicula.codigo.trim()) {
    setError("El código es obligatorio.");
    return;
    }

    if (!pelicula.genero.trim()) {
        setError("El genero de la pelicula es obligatorio.");
        return;
    }

    if (pelicula.duracion <= 0 ) {
        setError("El genero de la pelicula es obligatorio.");
        return;
    }

    if (!pelicula.clasificacion.trim()) {
        setError("La clasificación película es obligatorio.");
        return;
    }

    if (pelicula.precio <= 0) {
        setError("Escriba un precio valido.");
        return;
    }

    if (!peliculaSeleccionada && existe) {
        setError("Ya existe una película con ese código.");
        return;
    }

    //----------------------

    //agregar pelicula
    if (peliculaSeleccionada) {

    dispatch(updatePelicula(pelicula));

} else {

    dispatch(addPelicula(pelicula));

}
setPelicula(peliculaInicial);
dispatch(selectPelicula(null));

}

 return (
 <>


 <div className="formcontrolador">

    <h1>Reguistro de Peliculas</h1>

    <input className="input"
        type="text"
        name="nombre"
        placeholder="Nombre de la película"
        value={pelicula.nombre}
        onChange={handleChange}
    />

    <input className="input"
        type="text"
        name="codigo"
        placeholder="Codigo de la pelicula"
        value={pelicula.codigo}
        onChange={handleChange}
    />

    <select className="input"
        name = "genero"
        value={pelicula.genero}
        onChange={handleChange}>
        
        <option value="">Seleccione un genero</option>
        <option value="Accion">Accion</option>
        <option value="Comedia">Comedia</option>
        <option value="Drama">Drama</option>
        <option value="Terror">Terror</option>
        <option value="Thriller">Thriller</option>
        <option value="Ciencia Ficcion">Ciencia Ficcion</option>
        
        
    </select>
    

    <input className="input"
        type="number"
        name="duracion"
        placeholder="tiempo de duracion de la pelicula"
        value={pelicula.duracion}
        onChange={handleChange}
    />

    <select className="input"
        name = "clasificacion"
        value={pelicula.clasificacion}
        onChange={handleChange}>
        
        <option value="">Seleccione una clasificacion</option>
        <option value="G">G - Todas las Audiencias</option>
        <option value="PG">PG - Guia Paternal Sugerida</option>
        <option value="PG-13">PG-13 - Guia Paternal Estricta</option>
        <option value="NC-17">NC-17 - Sin admitir audiencias de menor de edad y 17</option>
        <option value="NR">NR - No calificado</option>
    
        
    </select>

    <input className="input"
        type="number"
        name="precio"
        placeholder="precio de la pelicula"
        value={pelicula.precio}
        onChange={handleChange}
    />

    <input className="input"
        type="checkbox"
        name="disponible"
        checked={pelicula.disponible}
        onChange={handleChange}
    />


        <button  className="button" onClick={guardarPelicula}>
        Guardar
    </button>

    {error && (
    <p style={{ color: "red" }}>
        {error}
    </p>
    )}

</div>

</>


    );  

}
