import React from 'react';

const Footer = () => {

    const date = new Date();

    return (
        <footer className='w-full h-auto text-2xl text-center p-14 text-white mt-8 bg-red-500'>
            <p>Copyright © {date.getFullYear()}</p>
        </footer>
    );
};

export default Footer;
