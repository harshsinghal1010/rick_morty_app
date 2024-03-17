import { useEffect, useState } from "react";
import { Character } from "../types";
import { getCharacterByEpisodeSchema, getAllCharacterSchema } from "@/gql/schemas";
import fetchData from "../services/httpService";

const useFetchCharacters = (
  episodeId: number
): {
  characters: Character[] | null;
  loading: boolean;
  error: Error | null;
  episodeName: String | null
} => {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [episodeName, setEpisodeName] = useState<String | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        if (episodeId > 0) {
          const data = await fetchData( getCharacterByEpisodeSchema(episodeId))
          setEpisodeName(data.data.episode.name)
          setCharacters(data.data.episode.characters);
        } else {
          const data = await fetchData( getAllCharacterSchema())
          setEpisodeName(null)
          setCharacters(data.data.characters.results);
        }
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [episodeId]);

  return { characters, loading, error , episodeName };
};

export default useFetchCharacters;
