import React, { useState } from 'react';

function App() {
  const [numeros, setNumeros] = useState({
    numero1: '',
    numero2: '',
    numero3: ''
  });

  const handleChange = (b) => {
    setNumeros({ ...numeros, [b.target.name]: b.target.value });
  };

  const handleClick = () => {
    const { numero1, numero2, numero3 } = numeros;
    const numerosArray = [numero1, numero2, numero3];
    const numeroRandom = numerosArray[Math.floor(Math.random() * numerosArray.length)];
    alert(`El número aleatorio es: ${numeroRandom}`);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Generador de números randoms</h1>
      <input
        type="number"
        name="numero1"
        value={numeros.numero1}
        onChange={handleChange}
        className="w-full mb-4 p-2 rounded border border-gray-300"
        placeholder="Número 1"
      />
      <input
        type="number"
        name="numero2"
        value={numeros.numero2}
        onChange={handleChange}
        className="w-full mb-4 p-2 rounded border border-gray-300"
        placeholder="Número 2"
      />
      <input
        type="number"
        name="numero3"
        value={numeros.numero3}
        onChange={handleChange}
        className="w-full mb-4 p-2 rounded border border-gray-300"
        placeholder="Número 3"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generar número random
      </button>

    </div>
  );
}
export default App;

