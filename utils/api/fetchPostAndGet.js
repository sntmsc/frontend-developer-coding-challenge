import fetchPostConfig from './fetchPostConfig'
import fetchHeaders from './fetchHeaders'

const fetchPostAndGet = (postObject, postURL, setState) =>{
    const post =fetchPostConfig(postObject);
    const headers = fetchHeaders(process.env.NEXT_PUBLIC_TOKEN);
    fetch(postURL,post)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return fetch(process.env.NEXT_PUBLIC_GET_USER, {
            method: "GET",
            headers,
        })
        .then(response => response.json())
        .then(data =>  {setState(data.points)})
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err))
}

export default fetchPostAndGet