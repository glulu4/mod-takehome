"use client"
import Image from "next/image";
import {useState} from "react";
import {getPaginatedPosts} from "../lib/get-paginated-post";
import HomePagePosts from "../components/HomePagePosts";
import PaginationControls from "../components/PaginationControls";

export default function Home() {

  const [currentPage, setCurrentPage] = useState(1);

  const paginatedPosts = getPaginatedPosts(currentPage);
  console.log("paginatedPosts", paginatedPosts.length);
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-6 pb-20 gap-16 sm:p-14 ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-7xl">

        <h1 className="text-4xl font-bold text-center sm:text-left">
          Mod TakeHome Posts
        </h1>

        <div className="h-full">
          <HomePagePosts paginatedPosts={paginatedPosts} />

        </div>

    <div className="flex justify-center w-full pt-10">
          <PaginationControls
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
    </div>




      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
