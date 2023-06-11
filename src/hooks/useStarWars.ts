import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

type SwapiPerson = {
  name: string;
};

type SwapiResponse = {
  results: SwapiPerson[];
};

const useStarWars = () => {
  const [data, setData] = useState<SwapiPerson[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get<SwapiResponse>('https://swapi.dev/api/people')
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err: AxiosError<Error>) => {
        if (err.response) {
          const { data, status, headers } = err.response;
          console.log(data, status, headers);
          setError(err.message);
        } else if (err.request) {
          console.log(err.request);
          setError(err.message);
        } else {
          console.log('Error', err.message);
          setError(err.message);
        }
        setIsLoading(false);
      });
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useStarWars;
