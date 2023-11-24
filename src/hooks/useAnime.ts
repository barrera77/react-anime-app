import { Genre } from "./UseGenres";
import useData from "./useData";

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

const useAnime = (selectedGenre: Genre | null) =>
  useData<Anime>(
    "/top/anime?genre=14",
    {
      params: { genre: selectedGenre?.mal_id },
    },
    [selectedGenre?.mal_id]
  );

export default useAnime;
