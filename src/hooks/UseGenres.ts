import useData from "./useData";

export interface Genre {
  mal_id: number;
  name: string;
}

const useGenres = () => useData<Genre>("/genres/anime?filter=genres");

export default useGenres;
