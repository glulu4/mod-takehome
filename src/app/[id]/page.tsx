import {fetchPost} from "@/src/lib/fetch-post";
import {notFound} from "next/navigation";

interface PostPageProps {
    params: {id: string};
}

export default function PostPage({params}: PostPageProps) {

    const {id} = params;

    // Fetch post data (You may replace this with an actual fetch function)
    const post = fetchPost(parseInt(id));

    if (!post) {
        return notFound(); // Handles 404 if post is not found
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="mt-4">{post.content}</p>
        </div>
    );
}
