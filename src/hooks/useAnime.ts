import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Anime {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  rating: string;
}

interface FetchResponse {
  data: Anime[];
}

const useAnime = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const contoller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchResponse>("/top/anime?filter=bypopularity", {
        signal: contoller.signal,
      })
      .then((response) => {
        setAnimeList(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => contoller.abort();
  }, []);

  return { animeList, error, isLoading };
};

export default useAnime;
