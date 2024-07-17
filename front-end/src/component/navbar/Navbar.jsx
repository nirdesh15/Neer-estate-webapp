import React, { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div className="left">
                <Link to="/" className='logo'>
                    <img src="/logo.png" alt="" />
                    <span>Blog</span>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blog">Blog</Link> {/* Add Blog link */}
            </div>
            <div className="right">
                <div className="user">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span></span>
                    <Link to="/profile" className='profile'>
                        <div className="notification">5</div>
                        <span>Profile</span>
                    </Link>
                </div>
                <>
                 
                </>
                <div className="menuIcon" onClick={() => setOpen(!open)}>
                    <img src="/menu.png" alt="" />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/blog">Blog</Link> {/* Add Blog link */}
                    <Link to="/login">Sign In</Link>
                    <Link to="/register">Sign up</Link>
                </div>
            </div>
        </nav>
    );
}
