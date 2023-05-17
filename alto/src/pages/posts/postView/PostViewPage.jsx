import React, { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";

import usePost from '../../../hooks/usePost';

import AppContext from '../../../AppContext';

import PostView from '../../../components/Posts/PostView';

// import { getPostById } from '../../../services/postService';

import { TABS } from '../../../common/constants';

const PostViewPage = ({ }) => {
    const { postId } = useParams();
    const { post: postView } = usePost(postId);
    const appContextValue = useContext(AppContext);

    useEffect(() => {
        appContextValue.setTabSelectedValue(TABS.POSTS);
    }, []);

    if (!postView) {
        return null;
    }

    return <PostView post={postView} />
};

export default PostViewPage;
