import { Link } from 'react-router-dom';
import './Home.css';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
        <nav className='navbar'>
            <div className="menu-icon" onClick={toggleMenu}>
                <FaBars />
            </div>
            <div>
                <h1 className='text-3xl ml-7 text-orange-600 font-semibold p-3'>BIG<span className='text-white'>Bazar</span></h1>
            </div>

            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                {/* Navigation links */}
                <Link to='/'>Home</Link>
                <Link to='/product'>Product</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/login'><button className='bg-lime-500 px-5 py-2 rounded-lg'>Login</button></Link>
            </ul>
            
        </nav>
       
        </div> 
    );
};

export default Home;
