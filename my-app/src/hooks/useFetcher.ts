import { useEffect, useState } from "react";
import { IEmployee } from "../common/employee";

const PROTOCOL = "http";
const HOST = "localhost";
const PORT = 3000;

const BASE_URL = `${PROTOCOL}://${HOST}:${PORT}`;

export function useFetcher(endpoint: string) {
  const [data, setData] = useState<IEmployee[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const finalUrl = `${BASE_URL}/${endpoint}`;

    fetch(finalUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados da API: ${response.status}`);
        }

        return response.json();
      })
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [endpoint]);

  return { data, isLoading, error };
}
