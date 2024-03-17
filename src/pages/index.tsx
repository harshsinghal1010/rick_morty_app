import React, { useState } from "react";
import theme from "../styles/theme.module.css";
import useFetchEpisode from "@/hooks/useFetchEpisode";
import EpisodeList from "@/components/EpisodeList";
import CharacterList from "@/components/CharacterList";

const IndexPage = () => {
  const { episodes, error, loading } = useFetchEpisode();
  const [selectedEpisode, setSelectedEpisode] = useState<number>(0);

  const handleEpisodeSelect = (episodeId: number) => {
    if (selectedEpisode === episodeId) {
      setSelectedEpisode(0);
    } else {
      setSelectedEpisode(episodeId);
    }
  };
  if (loading) {
    return (
      <div>
        <span className={theme.loader}></span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!episodes) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <div className={theme.headers}>
        <h2 className={theme.font}>Rick and Morty Characters</h2>
      </div>
      <div className={theme.container}>
        <div className={theme.episodes}>
          <h2 className={`${theme.centerText} ${theme.font}`}>EPISODES</h2>
          <EpisodeList
            episodes={episodes}
            selectedEpisode={selectedEpisode}
            onEpisodeSelect={handleEpisodeSelect}
          />
        </div>
        <div className={theme.characters}>
          <h2 className={`${theme.centerText} ${theme.font}`}>CHARACTERS</h2>
          <CharacterList episodeId={selectedEpisode} />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
