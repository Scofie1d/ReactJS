import React from 'react';

const HomeHeader = ({children}) => {
    return (
        <header style={{width: '100%', height: 100, background: 'green'}}>
            {children}
        </header>
    );
};

export default HomeHeader;