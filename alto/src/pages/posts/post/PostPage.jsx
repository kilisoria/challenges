import React, { useEffect, useContext } from 'react'

import AppContext from '../../../AppContext';

import Post from '../../../components/Posts/Post';

import { useNavigate } from "react-router-dom";

import { addPost } from '../../../services/postService';

import { TABS } from '../../../common/constants';

const PostPage = ({ }) => {
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
