import React from 'react';

import {
    Box,
    Grid
} from '@mui/material';

import ReactPlayer from 'react-player';

const PostView = ({ post }) => {
    return (
        <Box sx={{ flexGrow: 1, padding: 5 }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <h1>{post.title}</h1>
                </Grid>
                <Grid xs={12} sx={{ padding: '20px', textAlign: 'left' }}>
                    {post.details}
                </Grid>
                {post.videoURL &&
                    <Grid xs={6} sx={{ padding: '20px' }}>
                        <div className='player-wrapper'>
                            <ReactPlayer
                                className='react-player'
                                url={post.videoURL}
                                width='100%'
                                height='440px'
                            />
                        </div>
                    </Grid>
                }
                {post.imageURL &&
                    <Grid xs={6} sx={{ padding: '20px' }}>
                       <img src={post.imageURL} width="100%" />
                    </Grid>
                }
            </Grid>
        </Box>
    )
}

export default PostView;
