import React, { useContext, useEffect, useMemo } from 'react'

import AppContext from '../../AppContext';

import Posts from '../../components/Posts';
import { getPosts } from '../../services/postService';

import { TABS } from '../../common/constants';

const PostsPage = ({ }) => {
    const appContextValue = useContext(AppContext);

    useEffect(() => {
        appContextValue.setTabSelectedValue(TABS.POSTS);
    }, [])

    const posts = useMemo(() => {
        return getPosts();
    }, []);

    if (!posts || posts.length === 0) {
        return null;
    }

    return <Posts posts={posts} />;
};

export default PostsPage;
