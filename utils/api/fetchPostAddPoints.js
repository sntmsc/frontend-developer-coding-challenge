import fetchHeaders from "./fetchHeaders";

const fetchPostAddPoints = (points) =>{
    const headers= fetchHeaders(process.env.NEXT_PUBLIC_TOKEN);
    const post = {
        method: "POST",
        body: JSON.stringify({
            'message': 'Points Updated',
            'new Points': points
        }),
        headers
    }

    return post;
}

export default fetchPostAddPoints