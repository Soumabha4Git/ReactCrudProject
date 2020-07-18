import React from 'react';

const Navbar = () => {
    return (
            <nav className="navbar navbar-dark bg-dark">
                <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="/addCourses">Add Courses</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/viewAllCourses">View Courses</a>
                </li>               
                </ul>
            </nav>        
    )
};

export default Navbar;