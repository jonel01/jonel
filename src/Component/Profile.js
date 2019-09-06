import React from 'react';
import Typed from 'react-typed';

export const Profile = () => {
    return (
        <Typed 
            strings={['Hello I am Jonel San Diego',
                'I am an Associate Developer',]}
                typeSpeed={40}
                backSpeed={50}
                loop />
    );
}