import React from 'react';


const Navigation = () => {
    return (
        <nav className='nav'>
            <ul className="nav-list">
                <li className="nav-list-item"><a href='#0'>Logs</a>  <span className='pipe'>|</span></li>
                <li className="nav-list-item"><a href='#0'>today</a> <span className='pipe'>|</span></li>
                <li className="nav-list-item"><a href='#0'>Mygoals</a> <span className='pipe'>|</span></li>
                <li className="nav-list-item"><a href='#0'>Logout</a> </li>
            </ul>
        </nav>
    )
}

export default Navigation;