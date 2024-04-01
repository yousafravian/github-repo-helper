import React from 'react';

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='mx-auto sm:px-6 lg:px-10'>{ children }</div>
    );
}

export default LayoutContainer;
