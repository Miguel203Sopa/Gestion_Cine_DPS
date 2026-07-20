"use client";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
} from "recharts";
import { useAppSelector } from "@/redux/hooks";
import Estadictica from "@/components/Dashboard";

export default function GraficoPeliculas() {
  const peliculas = useAppSelector((state) => state.peliculas.peliculas);

  const data = peliculas.map((pelicula) => ({
    nombre: pelicula.nombre,
    precio: pelicula.precio,
  }));

  return (
    <>
      <Estadictica />

      <div className="chart-card">
        <div style={{ width: "100%", height: "400px" }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nombre" angle={-20} textAnchor="end" height={70} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="precio" fill="#A8120B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}