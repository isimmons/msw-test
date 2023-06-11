import { useEffect, useState } from 'react';
import axios from 'axios';

export const BASE_URL = 'https://swapi.dev/api/';

type SwapiPerson = {
  name: string;
};

type SwapiData = {
  results: SwapiPerson[];
};

const useStarWars = () => {
  const [data, setData] = useState<SwapiData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(BASE_URL + 'people');

        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);

  return {
    data,
    loading,
  };
};

export default useStarWars;
