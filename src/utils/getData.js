import { useEffect, useState } from 'react';

export const getData = (endpoint, id) => {
  const [state, setstate] = useState('none');

  useEffect(() => {
    fetch(`https://63058cf4697408f7edc71966.mockapi.io/${endpoint}/${id}`)
      .then((response) => response.json())
      .then((data) => setstate(data));
  }, []);

  return state
};
