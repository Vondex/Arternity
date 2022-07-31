import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <nav>

            {/* <img src="../../../public/img/infinity.png" alt="logo" /> */}
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">All Posts</Link></li>
                
                 {/* Logged-in users */}
                <li><Link to="/create">Create Post</Link></li>
                <li><Link to="/profile">Posts of email's</Link></li>
                <li><Link to="/logout">Logout</Link></li>
               
                {/* Guest users */}
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                
            </ul>
        </nav>

    )
}