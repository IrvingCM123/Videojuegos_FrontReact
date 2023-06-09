import React, { useState } from 'react';
import List from '../services/text-davinci-003/service.list'

console.log("dadw")
console.log("dadw")
function ListFrontend() {
  console.log("dadw")

  const [animal, setAnimal] = useState('');
  const [response, setResponse] = useState('');
  console.log("dadw")

  const handleAnimalChange = (e) => {
    setAnimal(e.target.value);
  };
  console.log("dadw")

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("dadw")

    // Verifica si se ingresó un animal válido
    if (animal.trim().length === 0) {
      return;
    }

    try {
      console.log("dadw")
      const response = await List.getDaVinci({ animal });

      if (response.status === 200) {
        setResponse(response.result);
      } else {
        console.error(response.error);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Animal:
          <input type="text" value={animal} onChange={handleAnimalChange} />

        </label>
        <button type="submit">Generate List</button>
      </form>
      {response && (
        <div>
          <h2>Generated List:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default ListFrontend;
