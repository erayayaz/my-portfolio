import React, {useState} from 'react';
import {connect} from "react-redux";
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface NavItem {
    label: string;
    path: string;
}

interface NavBarProps {
    items: NavItem[];
}

const NavBar: React.FC<NavBarProps> = ({ items }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
            <div className="menu-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </div>
            <ul  className={`nav-links ${menuOpen ? 'active' : ''}`}>
                {items.map((item, index) => (
                    <li key={index} className="nav-item">
                        <a className={'navbar-item'} href={item.path}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

function mapStateToProps({user} :any) {
    return {
    }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);