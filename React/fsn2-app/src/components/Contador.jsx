import React, { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(1);

    return (
        <div>
            <h1>Contador: {contador} </h1>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <p> - </p>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        </div>
    );
}
export default Contador;