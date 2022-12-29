import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SkeletonSpinner from '../Shared/Spinner/SkeletonSpinner';
import SinglePost from './SinglePost';

const Media = () => {
    const { data: posts, isLoading, refetch = [] } = useQuery({
        queryKey: ['myMedia'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/myMedia')
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <SkeletonSpinner></SkeletonSpinner>
    }
    return (
        <div>
            <h3 className='text-center text-3xl text-slate-700 mb-5'>All Post in the Newsfeed</h3>
            <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2'>
                {
                    posts.sort((a, b) => b.time - a.time).map(post =>
                        <SinglePost
                            key={post._id}
                            post={post}
                            refetch={refetch}
                        ></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Media;