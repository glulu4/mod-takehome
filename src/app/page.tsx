"use client"
import {useState} from "react";
import {getPaginatedPosts} from "../lib/get-paginated-post";
import HomePagePosts from "../components/HomePagePosts";
import PaginationControls from "../components/PaginationControls";

export default function Home() {

  const [currentPage, setCurrentPage] = useState(1);

  const paginatedPosts = getPaginatedPosts(currentPage);
  console.log("paginatedPosts", paginatedPosts.length);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 pb-20 gap-16 sm:p-14 ">
        <h1 className="text-4xl font-nunito font-bold text-center sm:text-left">
          Mod TakeHome Posts
        </h1>



      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="h-full w-11/12">
          <HomePagePosts paginatedPosts={paginatedPosts} />
        </div>

      </div>
      <div className="flex justify-center w-full pb-16">
        <PaginationControls
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
