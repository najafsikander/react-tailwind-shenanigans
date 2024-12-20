type Post = {
    userId: number,
    id:number,
    title: string,
    body: string,
}

const fetchPosts = ():Promise<Array<Post>> => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(async (response) => {
        return await response.json() as Array<Post>;
    })
}

export {fetchPosts};