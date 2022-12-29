import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SmallSpinner from '../Shared/Spinner/SmallSpinner';
import SinglePost from './SinglePost';

const Media = () => {
    const { data: posts, isLoading = [] } = useQuery({
        queryKey: ['myMedia'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/myMedia')
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <SmallSpinner></SmallSpinner>
    }
    return (
        <div>
            <h3 className='text-center text-3xl text-slate-700 mb-5'>All Post in the Newsfeed</h3>
            <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2'>
                {
                    posts.map(post => <SinglePost key={post._id} post={post}></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Media;