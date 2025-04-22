// src/pages/Posts.jsx
import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/postSlice';

const Posts = () => {
    const dispatch = useDispatch();
    const { posts, page, hasMore, loading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        if (posts.length === 0) {
            dispatch(fetchPosts(1));
        }
    }, [dispatch]);

    const fetchMoreData = () => {
        if (hasMore && !loading) {
            dispatch(fetchPosts(page + 1));
        }
    };

    return (
        <div className="p-4 ">
            <h1 className="text-2xl font-semibold mb-4">Posts</h1>

            {error && <p className="text-red-500 mb-4">Error: {error}</p>}

            <InfiniteScroll
                dataLength={posts.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<p className="text-blue-500">Loading more posts...</p>}
                endMessage={<p className="text-center text-gray-500 mt-4">No more posts</p>}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-4">
                    {posts.map((post) => (
                        <div key={post.id} className="p-4 border rounded shadow bg-white">
                            <h2 className="font-bold text-lg mb-2">{post.title}</h2>
                            <p className="text-sm text-gray-700">{post.body}</p>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default Posts;
