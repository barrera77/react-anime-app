import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  mal_id: number;
  name: string;
}

interface FetchResponse {
  data: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const contoller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchResponse>("/genres/anime", {
        signal: contoller.signal,
      })
      .then((response) => {
        setGenres(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => contoller.abort();
  }, []);

  return { genres, error, isLoading };
};
export default useGenres;
