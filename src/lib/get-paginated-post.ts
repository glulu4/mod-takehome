import {posts, Post} from "../../public/mod/post";

export function getPaginatedPosts(currentPage: number): Post[] {
    const postsPerPage = 10;
    const offset = (currentPage - 1) * postsPerPage;
    return posts.slice(offset, offset + postsPerPage);

}