"use client";

interface Busqueda{
    busqueda: string;
    setSearch: (value: string) => void;
}

export default function BuscaPelis({busqueda,setSearch}:Busqueda){
    return(
         <div className="busqueda-container">
      <input
        className="search-input"
        type="text"
        placeholder="🔍 Buscar pelicula..."
        value={busqueda}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    )
}