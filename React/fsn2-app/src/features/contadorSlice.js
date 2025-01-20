// features/contadorSlice.js
import { createSlice } from "@reduxjs/toolkit";

const contadorSlice = createSlice({
    name: "contador",
    initialState: { valor: 0 },
    reducers: {
        incrementar: (state) => {
            state.valor += 1;
        },
        decrementar: (state) => {
            state.valor -= 1;
        },
        multi: (state) => {
            state.valor *= 2;
        },
    },
});

export const { incrementar, decrementar, multi } = contadorSlice.actions;
export default contadorSlice.reducer;
