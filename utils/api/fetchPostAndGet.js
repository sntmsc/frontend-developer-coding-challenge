import fetchPostConfig from './fetchPostConfig'
import fetchHeaders from './fetchHeaders'

const fetchGet = (setAeropoints) =>{

    const headers = fetchHeaders(process.env.NEXT_PUBLIC_TOKEN);

    fetch(process.env.NEXT_PUBLIC_GET_USER, {
        method: "GET",
        headers,
    })
    .then(response => response.json())
    .then(data =>  {setAeropoints(data.points)})
}


const fetchPostAndGet = (postObject, postURL, setAeropoints, toast, setToast, event, product, setIsLoading) =>{
    const post =fetchPostConfig(postObject);
    const verifiedProduct =  product ? product : ''
    fetch(postURL,post)
    .then(response => response.json())
    .then(() => {
        setToast([...toast].concat({status: 'success', fade:'in', event, product: verifiedProduct}));
        setIsLoading(false);
        return fetchGet(setAeropoints);
    })
    .catch(() => {
        setToast([...toast].concat({status: 'error', fade:'in', event}));
        setIsLoading(false);
    });
}

export default fetchPostAndGet