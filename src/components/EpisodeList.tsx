import React from 'react';
import { Episode } from '../types';
import theme from "../styles/theme.module.css";

interface EpisodeListProps {
  episodes: Episode[];
  selectedEpisode: number | null;
  onEpisodeSelect: (episodeId: number) => void;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes, selectedEpisode, onEpisodeSelect }) => {
  return (
    <div >
      <div  >
        {episodes.map((episode) => (
          <div
            key={episode.id}
            onClick={() => onEpisodeSelect(episode.id)}
            className={selectedEpisode === episode.id ? theme.selected :theme.episodeList}
          >
            <label>{episode.name}</label>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;
