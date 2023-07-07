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

const useAnime = () => useData<Anime>("/top/anime?filter=bypopularity");

export default useAnime;
