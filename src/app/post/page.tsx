"use client";
import React from 'react';
import usePosts from '../hooks/usePosts';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken, faEye } from '@fortawesome/free-solid-svg-icons';

const Posts: React.FC = () => {
  const { posts, loading, error, handleLike, handleDislike, handleViews } = usePosts();
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen p-5">
        <p>Loading...</p>
      </div>
    );
  } 
  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-screen p-5">
        <p className="text-black-500">Error: {error}</p>
      </div>
    );
  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 ">
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className="w-full border p-5 rounded-md shadow-md text-center bg-red-300 ">
            <h1 className="text-xl font-bold mb-4">{post.title}</h1>
            <Image
              src="/images/story.jpeg"
              alt={post.title || 'Post image'}
              className="mb-4 w-full h-auto rounded-md object-cover"
              width={500}
              height={300}
            />
            <p className="text-left mb-4">{post.body}</p>
            <div className="flex justify-around mb-4">
              

            <button
             onClick={() => handleLike(post.id)}
             className="bg-purple-500 text-white py-2 px-4 rounded-md flex items-center"
            >
            <FontAwesomeIcon icon={faHeart} className="mr-2 text-red-500" />
               ({post.reactions?.likes || 0})
            </button>

            
<button
  onClick={() => handleDislike(post.id)}
  className="bg-yellow-500 text-black py-2 px-4 rounded-md flex items-center"
>
  <FontAwesomeIcon icon={faHeartBroken} className="mr-2 text-black-500" />
  ({post.reactions?.dislikes || 0})
</button>
                                     

<button
  onClick={() => handleViews(post.id)}
  className="bg-pink-500 text-white py-2 px-4 rounded-md flex items-center"
>
  <FontAwesomeIcon icon={faEye} className="mr-2" />
  ({post.views || 0})
</button>
            </div>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};
export default Posts;