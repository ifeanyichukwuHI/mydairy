import React from 'react';



const Header = () => {
    return (
        <header className="header">
            <p className='title'>
                My Dairy
        </p>
            <p>
                <div>
                    {new Date().toLocaleDateString()}
                </div>
                <div>
                    {new Date().toLocaleTimeString()}
                </div>
            </p>
        </header>
    )
}

export default Header;