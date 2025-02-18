import {Post} from '@/public/mod/post'
import {MoveRight} from 'lucide-react';
import Link from 'next/link';
import React, {useEffect, useState} from 'react'
import {capitalizeFirstLetter} from '../app/util/utils';

interface PostRowProps {
    post:Post;
}

export default function PostRow({post}: PostRowProps) {


  return (
      <Link href={`/${post.id}`} className="block mx-auto ">
          <div className='border-b  border-gray-300 dark:border-neutral-600 w-full py-5 px-2 hover:shadow-lg hover:rounded-md transition duration-200 ease-in-out'>
              <div className='flex-1 flex items-center justify-between '>
                  <div className='space-y-3 flex-[0.7]'>
                      <h3 className='font-bold text-xl font-nunito'>
                        {capitalizeFirstLetter(post.title)}
                        </h3>
                      <p className=' text-md font-cabin sm:text-lg text-gray-500 font-medium '>
                        Read Now
                      </p>
                  </div>

                <div className=''>
                      <MoveRight className='text-[#6E44FF] ' size={20} />

                </div>
              </div>

          </div>
    </Link>

  )
}
