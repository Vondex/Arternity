import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";
import loginRegValidation from '../validation/loginRegValidation';

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        setErrors(loginRegValidation(values));
        if (email == '' || password == '') {
            return;
        }

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                return;
            })

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
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </li>
                        <li>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                className="inputFields"
                                id="password"
                                name="password"
                                placeholder="*********"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
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
