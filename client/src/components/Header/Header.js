import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

export const Header = () => {

    const { user } = useAuthContext();

    return (
        <nav>


            <ul className="menu">
                <li id="home-link"><Link to="/">Home</Link></li>
                <li><Link to="/catalog">All Posts</Link></li>


                {user.email

                    ? <div id="user">

                        <li><Link to="/create">Create Post</Link></li>
                        {/* <li><Link to="/profile">{user.username}'s posts</Link></li> */}
                        <li><Link to="/logout">Logout</Link></li>
                    </div>


                    : <div id="guest">
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>

                    </div>
                }

            </ul>
        </nav>

    )
}