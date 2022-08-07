import { Link } from 'react-router-dom';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/404');
            });
    };



    return (
        
        <section id="login-page">
            <div className="loginSection">
                <div className="info">
                    <h2>Welcome again!</h2>
                    <p>Sign in to view new posts</p>
                </div>
                <form className="loginForm" onSubmit={onSubmit}>
                    <h2>Sign In</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="email"
                                name="email"
                                placeholder="marian@gmail.com"
                            />
                        </li>
                        <li>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                className="inputFields"
                                id="password"
                                name="password"
                                placeholder="*********"
                            />
                        </li>
                        <li id="center-btn">
                            <button id="login-btn">Login</button>
                        </li>
                        <p className="navigation-field">
                        <span>
                            If you don't have a profile click <Link to="/register">here</Link>
                        </span>
                    </p>
                    </ul>
                </form>
            </div>
        </section>

    )
}
