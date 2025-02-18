import {Post} from '@/public/mod/post';
import React from 'react'
import {capitalizeFirstLetter} from '../app/util/utils';
import {MoveLeft} from 'lucide-react';
import Link from 'next/link';

interface PostDisplayProps {
    post: Post;
}

export default function PostDisplay({post}: PostDisplayProps) {
    return (
        <div className='pt-10'>
            <div className='space-y-5'>
                <h1 className='text-3xl sm:text-5xl font-nunito font-bold border-b border-gray-300 dark:border-neutral-600 pb-4'>
                    {capitalizeFirstLetter(post.title)}
                </h1>
                <p className='text-lg sm:text-xl sm:leading-loose font-cabin dark:text-neutral-50 font-medium sm:pt-4 pt-3'>
                    {capitalizeFirstLetter(post.body)}
                </p>
            </div>

            <Link href={`/`}>
                <div className="absolute top-5 left-5 bg-slate-300 dark:bg-neutral-700 p-3 rounded-full shadow-md hover:bg-slate-400 transition duration-200">

                    <MoveLeft size={20} className="text-black dark:text-white" />
                </div>
            </Link>

        </div>
    )
}
