import {Post} from '@/public/mod/post'
import React from 'react'

interface HomePagePostsProps {
    paginatedPosts: Post[]
}

export default function HomePagePosts({paginatedPosts}: HomePagePostsProps) {
  return (
    <div>
        
        <div>
            <h2>
                Posts
            </h2>
            <ul>
                {paginatedPosts.map(post => (
                    <li key={post.id}>
                        <h3>
                            {post.title}
                        </h3>
                        <p>
                            {post.body}
                        </p>
                    </li>
                ))}
            </ul>
        </div>


    </div>
  )
}
