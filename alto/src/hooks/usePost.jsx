import { useEffect, useState } from 'react';

import { getPostById } from '../services/postService';

const usePost = (id) => {
    console.log('pppp', id);
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (id) {
            console.log('hi');
            setPost(getPostById(id));
        }
    }, [id]);

    return {
        post,
    }
};

export default usePost;
