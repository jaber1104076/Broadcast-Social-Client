import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import TopPost from '../TopPost/TopPost';
import UserRegistration from '../UserRegistration/UserRegistration';
const Home = () => {
    useTitle('Home')
    return (
        <div>
            <UserRegistration></UserRegistration>
            <TopPost></TopPost>
        </div>
    );
};

export default Home;