import React, { useCallback, useState } from 'react';

import {
    Alert,
    Stack,
    Button,
    TextField,
    Snackbar
} from '@mui/material';

const Contact = ({ }) => {
    const [open, setOpen] = useState(false);
    const [dialogSeverety, setDialogSeverety] = useState('success');
    const [dialogMessage, setDialogMessage] = useState('');

    const [sender, setSender] = useState('');
    const [phoneOrEmail, setPhoneOrEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMessage = useCallback(() => {
        if (!sender || !phoneOrEmail || !message) {
            setDialogMessage('You must fill all fields, please!');
            setDialogSeverety('error');
            setOpen(true);

            return;
        }

        setDialogMessage('Your message has just been sent successfully!');
        setDialogSeverety('success');
        setOpen(true);

        // TODO: Pending to implement with a real endpoint.
        setSender('');
        setPhoneOrEmail('');
        setMessage('');
    }, [sender, phoneOrEmail, message]);

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
            <Alert severity="info">Hey! Feel free to reach out me!</Alert>
            <TextField
                id="recive"
                label="Sending an email to"
                value="cristiansoria@gmail.com"
                disabled
            />
            <TextField
                id="sender"
                label="I am"
                value={sender}
                onChange={(event) => {
                    setSender(event.target.value);
                }}
            />
            <TextField
                id="sender"
                label="My mobile number or email is"
                value={phoneOrEmail}
                onChange={(event) => {
                    setPhoneOrEmail(event.target.value);
                }}
            />
            <textarea rows="10"
                value={message}
                placeholder='Enter your comment or question here!'
                style={{ fontSize: 16, fontFamily: '"Roboto","Helvetica","Arial",sans-serif' }}
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
            />
            <Button variant="contained" color="primary" sx={{ width: 160 }} onClick={handleSendMessage}>
                Send
            </Button>
            <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleClose}>
                <Alert onClose={handleClose} severity={dialogSeverety} sx={{ width: '100%' }}>
                    {dialogMessage}
                </Alert>
            </Snackbar>
        </Stack>
    )
};

export default Contact;
