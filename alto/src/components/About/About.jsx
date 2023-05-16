import React from "react";

import {
    Avatar,
    Stack,
    Divider
} from '@mui/material';

const About = ({ }) => {
    return (
        <Stack
           direction={{ xs: 'column', sm: 'row', md: 'row' }}
            spacing={{ xs: 2, sm: 10, md: 4 }}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ padding: '60px' }}
        >
            <Avatar
                alt="Cristian Soria"
                src="/avatar.jpg"
                sx={{ width: 60, height: 60 }}
            />
            <div>
                <p style={{ textAlign: 'justify', padding: '0 10px' }}>
                    I'm Cristian Soria, a Software Engineer. I've worked in the industry of Software for around 15 years. I've participated in many projects with different challenges and areas, including Health, Construction, Services, Finances, etc. Making Web, desktop, and mobile applications.
                    I have two daughters, and my wife, they are the core of my life.
                    I'm an amateur runner.
                    I like to look at new things to make or test every day.
                    On this page, I've put some opinions, and thoughts, about technologies.
                </p>
            </div>
        </Stack>
    )
};

export default About;
