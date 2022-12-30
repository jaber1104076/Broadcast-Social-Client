import { useQuery } from '@tanstack/react-query';
import React from 'react';
import TopPostInfo from './TopPostInfo';

const TopPost = () => {
    const { data: userPost = [] } = useQuery({
        queryKey: ['homePost'],
        queryFn: async () => {
            const res = await fetch('https://social-media-platform-server-five.vercel.app/homePost')
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <h3 className='mt-5 mb-5 text-center text-xl font-semibold text-slate-700'>Post By user</h3>
            <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2'>
                {
                    userPost.sort((a, b) => b.postLike - a.postLike).map(post => <TopPostInfo
                        key={post._id}
                        userpost={post}
                    ></TopPostInfo>)
                }
            </div>
        </div>
    );
};

export default TopPost;