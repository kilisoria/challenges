import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import ReactPlayer from 'react-player';

const Landing = ({ posts }) => {
    const {
        imagePostFirst,
        imagePostSecond,
        imagePostThree,
        imagePostFour,
        videoPost,
        textPostFirst,
        textPostSecond,
        textPostThree
    } = posts;

    return (
        <Box sx={{ flexGrow: 1, padding: 5 }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url={videoPost.videoURL}
                            width='100%'
                            height='440px'
                        />
                    </div>
                </Grid>
                <Grid xs={4}>
                    <p style={{ textAlign: 'justify' }}>{textPostFirst.details}</p>
                </Grid>
                <Grid xs={4}>
                    <img src={imagePostFirst.imageURL} width="100%" />
                </Grid>
                <Grid xs={4}>
                    <p style={{ textAlign: 'justify' }}>{textPostSecond.details}</p>
                </Grid>
                <Grid xs={3}>
                    <p style={{ textAlign: 'justify' }}>{textPostThree.details}</p>
                </Grid>
                <Grid xs={3}>
                    <img src={imagePostSecond.imageURL} width="100%" />
                </Grid>
                <Grid xs={3}>
                    <img src={imagePostThree.imageURL} width="100%" />
                </Grid>
                <Grid xs={3}>
                    <img src={imagePostFour.imageURL} width="100%" />
                </Grid>
                
            </Grid>
        </Box>
    );
};

export default Landing;
