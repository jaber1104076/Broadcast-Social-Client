import React from 'react';
import TopPost from '../TopPost/TopPost';
import UserRegistration from '../UserRegistration/UserRegistration';
const Home = () => {
    return (
        <div>
            <UserRegistration></UserRegistration>
            <TopPost></TopPost>
        </div>
    );
};

export default Home;