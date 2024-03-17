import React from "react";
import useFetchCharacters from "../hooks/useFetchCharacters";
import theme from "../styles/theme.module.css";

interface CharacterListProps {
  episodeId: number;
}

const CharacterList: React.FC<CharacterListProps> = ({ episodeId }) => {
  const { characters, loading, error, episodeName } =
    useFetchCharacters(episodeId);

  if (loading) {
    return (
      <div>
        <span className={theme.loader}></span>
      </div>
    );
  }

  if (error) {
    console.log("characters", characters);
    return <div>Error: {error.message}</div>;
  }

  if (!characters) {
    return <div>No characters found for this episode</div>;
  }

  return (
    <div>
      {episodeName ? <strong className={ theme.font}> {`${characters.length} characters in episode "${episodeName}"`}</strong> : ""}
      <div className={theme.CharacterList}>
        {characters.map((character) => (
          <span key={character.id} className={`${theme.customSpan} ${ theme.font}`}>
            <img
              src={character.image}
              alt={character.name}
              className={theme.characterWidth}
            />
            <p>{character.name}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
