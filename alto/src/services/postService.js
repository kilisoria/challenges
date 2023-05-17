const POSTS_KEY = 'posts';

const VIDEO_DEFAULT = 'https://www.youtube.com/watch?v=PoRJizFvM7s';
const IMAGE_DEFAULT = 'https://www.peerbits.com/static/e20c145828934cd208746a10ce4c2380/189bc/full-stack-developers-vs-specialised-developers-main.jpg';

const POSTS = [
    {
        id: 1,
        title: 'React the definite guide',
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake",
        videoURL: '',
        imageURL: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png',
        createdAt: '2023-05-01T20:38:22.793Z',
    },
    {
        id: 2,
        title: 'React advanced',
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake",
        videoURL: '',
        imageURL: '',
        createdAt: '2023-05-01T20:38:22.793Z',
    },
    {
        id: 3,
        title: 'React interview',
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake",
        videoURL: VIDEO_DEFAULT,
        imageURL: 'https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483336.jpg',
        createdAt: '2023-05-01T20:38:22.793Z',
    },
    {
        id: 4,
        title: 'React in deep',
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake",
        videoURL: VIDEO_DEFAULT,
        imageURL: 'https://www.siliconithub.com/wp-content/uploads/2018/07/ReactJS-App-Development.jpg',
        createdAt: '2023-05-01T20:38:22.793Z',
    },
    {
        id: 5,
        title: 'Angularjs the definite guide',
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake",
        videoURL: '',
        imageURL: '',
        createdAt: '2023-05-01T20:38:22.793Z',
    },
    {
        id: 6,
        title: 'Angularjs advanced',
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake",
        videoURL: '',
        imageURL: '',
        createdAt: '2023-05-01T20:38:22.793Z',
    },
    {
        id: 7,
        title: 'Angularjs interview',
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake",
        videoURL: '',
        imageURL: IMAGE_DEFAULT,
        createdAt: '2023-05-01T20:38:22.793Z',
    },
    {
        id: 8,
        title: 'Angularjs in deep',
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake",
        videoURL: '',
        imageURL: '',
        createdAt: '2023-05-01T20:38:22.793Z',
    },
]

const loadPosts = () => {
    const posts = localStorage.getItem(POSTS_KEY);
    if (!posts || posts === null) {
        localStorage.setItem(POSTS_KEY, JSON.stringify(POSTS));
    }
};

const getPosts = () => {
    let posts = localStorage.getItem(POSTS_KEY);
    if (!posts || posts === null) {
        return;
    }

    posts = JSON.parse(posts);
    posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return posts;
};

const getPostsSelected = () => {
    let posts = localStorage.getItem(POSTS_KEY);
    if (!posts || posts === null) {
        return;
    }

    posts = JSON.parse(posts);
    posts.sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt)
    });

    const postWithImage = posts.filter(p => p.imageURL);
    const imagePostFirst = postWithImage[0]; 
    const imagePostSecond = postWithImage[1]; 
    const imagePostThree = postWithImage[2]; 
    const imagePostFour = postWithImage[3]; 

    const postWithVideo = posts.filter(p => p.videoURL);
    const videoPost = postWithVideo[0];

    const postWithText = posts.filter(p => p.details);
    const textPostFirst = postWithText[0];
    const textPostSecond = postWithText[1];
    const textPostThree = postWithText[2];
    
    return {
        imagePostFirst,
        imagePostSecond,
        imagePostThree,
        imagePostFour,
        videoPost,
        textPostFirst,
        textPostSecond,
        textPostThree
    };
};

const getPostById = postId => {
    let posts = localStorage.getItem(POSTS_KEY);
    posts = JSON.parse(posts);
    if (!posts || posts === null) {
        return;
    }

    return posts.find(p => p.id.toString() === postId);
};

const getPostByTitle = postTitle => {
    let posts = localStorage.getItem(POSTS_KEY);
    posts = JSON.parse(posts);
    
    if (!posts || posts === null) {
        return;
    }

    return posts.find(p => p.title === postTitle);
};

const addPost = post => {
    const { title } = post;

    const id = `${title?.toLowerCase().trim()}_${Math.floor((Math.random() * 100000) + 1)}`;
    const postToAdd = {
        id,
        createdAt: new Date().toISOString(),
        ...post,
    };

    const posts = localStorage.getItem(POSTS_KEY);
    const postsList = JSON.parse(posts);

    const postListToUpdate = [...postsList];
    postListToUpdate.push(postToAdd);
    
    localStorage.setItem(POSTS_KEY, JSON.stringify(postListToUpdate));
};

const updatePost = post => {

};

export {
    loadPosts,
    getPosts,
    getPostsSelected,
    getPostById,
    getPostByTitle,
    addPost,
    updatePost
};
