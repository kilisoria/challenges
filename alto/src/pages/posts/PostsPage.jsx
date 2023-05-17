import React, { useContext, useEffect } from 'react'

import usePosts from '../../hooks/usePosts';

import AppContext from '../../AppContext';

import Posts from '../../components/Posts';

import { TABS } from '../../common/constants';

const PostsPage = ({ }) => {
    const appContextValue = useContext(AppContext);
    const { posts } = usePosts();

    useEffect(() => {
        appContextValue.setTabSelectedValue(TABS.POSTS);
    }, [])

    if (!posts || posts.length === 0) {
        return null;
    }

    return <Posts posts={posts} />;
};

export default PostsPage;
