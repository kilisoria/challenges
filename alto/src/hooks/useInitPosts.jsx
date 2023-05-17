import { useEffect } from 'react';

import { loadPosts } from '../services/postService';

const useInitPosts = () => {
   useEffect(() => {
        loadPosts();
    }, []);
};

export default useInitPosts;
