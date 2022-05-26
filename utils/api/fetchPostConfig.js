import fetchHeaders from "./fetchHeaders";

const fetchPostConfig = (bodyObject) =>{
    const headers= fetchHeaders(process.env.NEXT_PUBLIC_TOKEN);
    const post = {
        method: "POST",
        body: JSON.stringify(bodyObject),
        headers
    }

    return post;
}

export default fetchPostConfig