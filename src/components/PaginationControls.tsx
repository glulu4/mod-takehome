import React, {Dispatch, SetStateAction} from 'react'
import {posts, PAGE_SIZE} from '@/public/mod/post';
import {MoveLeft, MoveRight} from 'lucide-react';

interface PaginationControlsProps {
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function PaginationControls({currentPage, setCurrentPage}: PaginationControlsProps) {

    const totalPages = Math.ceil(posts.length / PAGE_SIZE);



    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const startItem = (currentPage - 1) * PAGE_SIZE + 1;
    const endItem = Math.min(currentPage * PAGE_SIZE, posts.length);

    function pageIsInRange(page: number):boolean {
    
        return page > 0 && page <= totalPages
    }

    return (
        <div className="flex flex-col space-y-4">
            {/* Small Screen Pagination */}

            <div className="sm:hidden flex items-center justify-center space-x-6">
                <button onClick={() => handlePageChange(currentPage - 1)}>
                    <MoveLeft size={15} />
                </button>
                
                {/* Previous page */}
                {currentPage > 1 && (
                    <button onClick={() => handlePageChange(currentPage - 1)}>
                        {currentPage - 1}
                    </button>
                )}
                
                {/* Current page */}
                <span className="bg-blue-500 shadow-sm text-white px-4 py-2 rounded-full">
                    {currentPage}
                </span>

                {/* Next page */}
                {currentPage < totalPages && (
                    <button onClick={() => handlePageChange(currentPage + 1)}>
                        {currentPage + 1}
                    </button>
                )}
                <button onClick={() => handlePageChange(currentPage + 1)}>
                    <MoveRight size={15} />
                </button>
            </div>

            {/* Large Screen Pagination */}
            <div className="hidden sm:flex items-center justify-center space-x-2">
                <button onClick={() => handlePageChange(currentPage - 1)}>
                    <MoveLeft size={20}/>
                </button>

                {/* Dot display with numbers */}
                {[...Array(5)].map((_, index) => {
                    const page = currentPage - 2 + index;
                    
                    if (pageIsInRange(page)) {
                        return (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={
                                    `px-4 py-2 rounded-full 
                                    ${currentPage === page ? "bg-blue-500 text-white shadow-sm" : ""
                                    }`}>
                                {page}
                            </button>
                        );
                    }
                    // return null;
                })}
                <button onClick={() => handlePageChange(currentPage + 1)}>
                    <MoveRight size={20} />
                </button>
            </div>

            {/* shows content amount on page and total content */}
            <p className="text-center text-gray-600">
                {startItem} - {endItem} of {posts.length} items
            </p>
        </div>
    )
}
