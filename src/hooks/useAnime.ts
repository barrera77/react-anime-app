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

  useEffect(() => {
    const contoller = new AbortController();

    apiClient
      .get<FetchResponse>("/top/anime?filter=bypopularity", {
        signal: contoller.signal,
      })
      .then((response) => setAnimeList(response.data.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => contoller.abort();
  }, []);

  return { animeList, error };
};

export default useAnime;
