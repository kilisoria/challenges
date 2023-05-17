import React, { useEffect, useContext } from 'react'

import usePosts from '../../../hooks/usePosts';

import AppContext from '../../../AppContext';

import Post from '../../../components/Posts/Post';

import { useNavigate } from "react-router-dom";



import { TABS } from '../../../common/constants';

const PostPage = ({ }) => {
    const { addPost } = usePosts();
    const appContextValue = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        appContextValue.setTabSelectedValue(TABS.POSTS);
    }, [])

    const handleSave = (post, isEdit = false) => {
        addPost(post);
    }

    return <Post onSave={handleSave} onCancel={() => navigate('/posts')} />
};

export default PostPage;
