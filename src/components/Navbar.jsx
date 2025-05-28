import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: 'Home', to: '/' },
        { label: 'Create', to: '/create' },
        { label: 'Play', to: '/game' },
        { label: 'Inspiration', to: '/inspiration' }
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const getDesktopLinkClasses = ({ isActive }) => {
        const baseClasses = "relative font-medium transition-all duration-300 group";
        const activeClasses = isActive ? "text-red-400" : "text-white hover:text-red-400";

        return `${baseClasses} ${activeClasses}`;
    };

    const getDesktopActiveBorder = (isActive) => {
        return isActive ? "absolute bottom-0 left-0 w-full h-0.5 bg-red-400 transform scale-x-100 transition-transform duration-300" : "absolute bottom-0 left-0 w-full h-0.5 bg-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
    };

    const getMobileLinkClasses = ({ isActive }) => {
        return `block py-2 px-4 rounded-lg transition-all duration-300 ${ isActive ? 'text-red-400 bg-red-500/10 border-l-4 border-red-400' : 'text-white hover:text-red-400 hover:bg-red-500/5' }`;
    };

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <img className="h-8 w-auto" src={logo} alt="Logo" />

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink key={link.to} to={link.to} className={getDesktopLinkClasses}>
                                {({ isActive }) => (
                                    <>
                                        {link.label}
                                        <span className={getDesktopActiveBorder(isActive)}></span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Desktop Login Button */}
                    <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">Log In</button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden text-white hover:text-red-400 transition-colors duration-300"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button> 
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
                }`}>
                    <div className="py-4 space-y-4 border-t border-gray-800 mt-4">
                        {navLinks.map((link) => (
                            <NavLink key={link.to} to={link.to} className={getMobileLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>{link.label}</NavLink>
                        ))}

                        {/* Mobile Login Button */}
                        <button
                            className=""
                            onClick={() => setIsMobileMenuOpen(false)}
                        >Log In</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
