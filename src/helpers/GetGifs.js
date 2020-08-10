
export const getGifs = async ( category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=2andotrzyCGnYVUNKnyAqFQU7mhXZny2`;

    const response = await fetch( url );

    //haga la desestruturación de la respuesta para quedarme con data que contiene la info que preciso
    const {data} = await response.json();

    const gifsList = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifsList;
}