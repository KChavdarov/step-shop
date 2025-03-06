import { NavLink } from 'react-router';
import './Header.scss';

function Header() {
    return (
        <header className='site-header'>
            <h1>Step Shop</h1>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/todo'>To Do List</NavLink>
            </nav>
        </header>
    );
}

export default Header;