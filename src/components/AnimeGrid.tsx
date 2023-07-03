import useAnime from "../hooks/useAnime";

const AnimeGrid = () => {
  const { animeList, error } = useAnime();
  return (
    <ul>
      {animeList.map((anime) => (
        <li key={anime.mal_id}>{anime.title}</li>
      ))}
    </ul>
  );
};

export default AnimeGrid;
