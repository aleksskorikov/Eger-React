import React from 'react';

const marqueeСontent = ({style, children}) => {
    return (
        <>
        <div className={`${style}__marquee`}>
            <div className={`${style}__marquee-content`}>
                {children}
            </div>
        </div>
        </>
    )
}

export default marqueeСontent;