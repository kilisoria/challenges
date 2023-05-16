import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import AppContext from '../../../AppContext';

import PostView from '../../../components/Posts/PostView';

import { getPostById } from '../../../services/postService';

import { TABS } from '../../../common/constants';

const PostViewPage = ({ }) => {
    const { postId } = useParams();
    const [postView, setPostView] = useState(null);
    const appContextValue = useContext(AppContext);

    useEffect(() => {
        appContextValue.setTabSelectedValue(TABS.POSTS);
    }, []);

    useEffect(() => {
        const postView = getPostById(postId);
        setPostView(postView);
    }, []);

    if (!postView) {
        return null;
    }

    return <PostView post={postView} />
};

export default PostViewPage;
