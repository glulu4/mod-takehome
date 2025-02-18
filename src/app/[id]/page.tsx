import PostDisplay from "@/src/components/PostDisplay";
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
        return notFound(); 
    }

    return (
        <div className="flex items-start pt-20 sm:pt-32 justify-center min-h-screen max-w-3xl mx-auto p-6">

            <PostDisplay post={post} />

        </div>
    );
}
