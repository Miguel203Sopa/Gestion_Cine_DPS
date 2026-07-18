import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Asiento } from "../../types/Asiento";

interface SalaState {
    asientos: Asiento[];
    reservados: string[];
}

const initialState: SalaState = {
    asientos: [
        { id: 1, numero: "A1", estado: "libre" },
        { id: 2, numero: "A2", estado: "ocupado" },
        { id: 3, numero: "A3", estado: "libre" },
        { id: 4, numero: "A4", estado: "libre" },
        { id: 5, numero: "A5", estado: "libre" },
        { id: 6, numero: "A6", estado: "ocupado" },
        { id: 7, numero: "B1", estado: "libre" },
        { id: 8, numero: "B2", estado: "ocupado" },
        { id: 9, numero: "B3", estado: "libre" },
        { id: 10, numero: "B4", estado: "libre" },
        { id: 11, numero: "B5", estado: "libre" },
        { id: 12, numero: "B6", estado: "ocupado" },
        { id: 13, numero: "C1", estado: "libre" },
        { id: 14, numero: "C2", estado: "libre" },
        { id: 15, numero: "C3", estado: "libre" },
        { id: 16, numero: "C4", estado: "libre" },
        { id: 17, numero: "C5", estado: "libre" },
        { id: 18, numero: "C6", estado: "ocupado" },
    ],
    reservados: [],
};

const salaSlice = createSlice({
    name: "sala",
    initialState,
    reducers: {

        seleccionarAsiento: (state, action: PayloadAction<number>) => {
            const asiento = state.asientos.find(item => item.id === action.payload);
            if (!asiento || asiento.estado === "ocupado") return;

            asiento.estado = asiento.estado === "elegido" ? "libre" : "elegido";
        },

        confirmarReserva: (state) => {
            state.asientos.forEach(asiento => {
                if (asiento.estado === "elegido") {
                    asiento.estado = "ocupado";
                    state.reservados.push(asiento.numero);
                }
            });
        },
        cancelarSeleccion: (state) => {
            state.asientos.forEach(asiento => {
                if (asiento.estado === "elegido") {
                    asiento.estado = "libre";
                }
            });
        },

    }
});

export const {
    seleccionarAsiento,
    confirmarReserva,
    cancelarSeleccion,
} = salaSlice.actions;

export default salaSlice.reducer;