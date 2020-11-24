import React from 'react';
import DateTime from '../DateTime/DateTime'



const Header = () => {
    return (
        <header className="header">
            <h1 className='title'>
                My Diary
            </h1>
            <div>
                <DateTime />
            </div>
        </header>
    )
}

export default Header;