import React, { useState, useCallback } from "react";

import {
    Alert,
    Stack,
    Button,
    TextField,
    Snackbar
} from '@mui/material';

const Post = ({ onCancel, onSave }) => {
    const [open, setOpen] = useState(false);
    const [dialogSeverety, setDialogSeverety] = useState('success');
    const [dialogMessage, setDialogMessage] = useState('');
    
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [videoURL, setVideoURL] = useState('');
    const [imageURL, setImageURL] = useState('');

    const handleSave = useCallback(() => {
        if (!details && !videoURL && !imageURL) {
            setDialogMessage('You must enter at least a details or a video URL or an image URL, please!');
            setDialogSeverety('error');
            setOpen(true);
            
            return;
        }

        // TODO: Pending to implement with a real endpoint.
        const postData = {
            title,
            details,
            videoURL,
            imageURL,
        };
        onSave(postData);

        setDialogMessage('Your post has just been created successfully!');
        setDialogSeverety('success');
        setOpen(true);

        setTitle('');
        setDetails('');
        setVideoURL('');
        setImageURL('');
    }, [title, details, videoURL, imageURL]);

    const handleCancel = useCallback(() => {
        onCancel();
    }, []);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Stack
            direction="column"
            spacing={{ xs: 2, sm: 10, md: 4 }}
            sx={{ margin: '20px 60px' }}
        >
            <Alert severity="info">Hey! Preparing a new Post. Go!</Alert>
            <TextField
                id="title"
                label="Title"
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
            />
            <textarea rows="10"
                value={details}
                placeholder='Enter your comment or question here!'
                style={{ fontSize: 16, fontFamily: '"Roboto","Helvetica","Arial",sans-serif' }}
                onChange={(event) => {
                    setDetails(event.target.value);
                }}
            />
            <TextField
                id="videoURL"
                label="Video URL"
                value={videoURL}
                onChange={(event) => {
                    setVideoURL(event.target.value);
                }}
            />
            <TextField
                id="imageURL"
                label="Image URL"
                value={imageURL}
                onChange={(event) => {
                    setImageURL(event.target.value);
                }}
            />
            <Stack direction="row">
                <Button variant="contained" color="primary" sx={{ width: 160 }} onClick={handleSave}>
                    Save
                </Button>&nbsp;
                <Button variant="contained" color="grey" sx={{ width: 160 }} onClick={handleCancel}>
                    Cancel
                </Button>
            </Stack>
            <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleClose}>
                <Alert onClose={handleClose} severity={dialogSeverety} sx={{ width: '100%' }}>
                    {dialogMessage}
                </Alert>
            </Snackbar>
        </Stack>
    )
};

export default Post;
