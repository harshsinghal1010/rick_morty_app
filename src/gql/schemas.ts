const getCharacterByEpisodeSchema = (episodeId: number) => `
query {
    episode(id: ${episodeId}) {
        name
        characters {
            id
            name
            image
        }
    }
}
`;

const getAllCharacterSchema = () => `
query {
    characters{
      results{
        name
        image
        id
      }
    }
  }
`;

const getAllEpisodeSchema = ()=> `
query {
    episodes {
        results {
            id
            name
        }
    }
}
`

export {getCharacterByEpisodeSchema , getAllCharacterSchema , getAllEpisodeSchema}
