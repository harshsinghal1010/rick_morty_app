import { useEffect, useState } from "react";
import { Episode } from "../types";
import { getAllEpisodeSchema } from "@/gql/schemas";
import fetchData from "../services/httpService";

const useFetchEpisode = (): { episodes: Episode[] | null; loading: boolean; error: Error | null } => {
    const [episodes, setEpisodes] = useState<Episode[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchEpisodes = async () => {
            setLoading(true);
            try {
                const data = await fetchData(getAllEpisodeSchema())
                setEpisodes(data.data.episodes.results);
            } catch (error:any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchEpisodes();
    }, []);

    return { episodes, loading, error };
};

export default useFetchEpisode;
