import React, { useState } from 'react';
import Traductor from './../services/text-davinci-003/service.traductor';

function TraductorComponent() {
  const [animal, setAnimal] = useState('');
  const [response, setResponse] = useState('');

  const handleAnimalChange = (e) => {
    setAnimal(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (animal.trim().length === 0) {
      return;
    }

    try {
      const result = await Traductor.getTraduccion({ animal });
      if (result.status === 200) {
        setResponse(result.result);
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Animal:
          <input type="text" value={animal} onChange={handleAnimalChange} />
        </label>
        <button type="submit">Translate</button>
      </form>
      {response && <div>{response}</div>}
    </div>
  );
}

export default TraductorComponent;