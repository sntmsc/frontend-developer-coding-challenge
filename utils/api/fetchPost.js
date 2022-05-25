import fetchHeaders from "./fetchHeaders";

const fetchPost = (bodyObject) =>{
    const headers= fetchHeaders(process.env.NEXT_PUBLIC_TOKEN);
    const post = {
        method: "POST",
        body: JSON.stringify(bodyObject),
        headers
    }

    return post;
}

export default fetchPost