import {posts, Post} from "../../public/mod/post";


export function fetchPost(id: number): Post | null {
    const post = posts.find(post => post.id === id);
    return post || null;
    
}