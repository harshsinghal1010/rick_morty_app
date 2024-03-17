const fetchData= async (query:string)=>{
    const response = await fetch("https://rickandmortyapi.com/graphql/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query:query,
        }),
    });
    
    return await response.json();
}

export default fetchData;