import {Post} from '@/public/mod/post'
import React from 'react'
import PostRow from './PostRow'

interface HomePagePostsProps {
    paginatedPosts: Post[]
}

export default function HomePagePosts({paginatedPosts}: HomePagePostsProps) {
  return (
        
        <div className='flex flex-col items-start w-full' >
            <ul>
                {paginatedPosts.map(post => (
                    <li key={post.id}>
                        <PostRow post={post}/>
                        {/* <p>
                            {post.body}
                        </p> */}
                    </li>
                ))}
            </ul>
        </div>


  )
}
