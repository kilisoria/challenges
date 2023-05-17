import { useMemo } from 'react';

import { addPost as serviceAddPost, getPosts, getPostsSelected, getPostByTitle } from '../services/postService';

const usePosts = () => {
    const posts = useMemo(() => {
        return getPosts();
    }, []);

    const postsSelected = useMemo(() => {
        return getPostsSelected();
    }, []);

    const redirectToPostView = (title) => {
        const post = getPostByTitle(title);
        if (!post) {
            // TODO: Shows an error message.
            return;
        }

        window.location.replace(`/post/${post.id}/view`);
    };

    const addPost = (post) => {
        serviceAddPost(post);
    };
    

    return {
        addPost,
        posts,
        postsSelected,
        redirectToPostView
    }
};

export default usePosts;
