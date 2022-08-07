import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as authService from "../../services/authService";
import { withAuth } from "../../contexts/AuthContext";


const Register = ({ auth }) => {


    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            return;
        }

        authService.register(email, username, password)
            .then(authData => {
                auth.userLogin(authData);
                navigate('/');
            });
    }

    return (
        <section id="register-page">
            <div className="signupSection">
                <div className="info">
                    <h2>Discover a new art world and new people</h2>
                </div>
                <form id="register" className="signupForm" onSubmit={onSubmit}>
                    <h2>Sign Up</h2>
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
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="username"
                                name="username"
                                placeholder="MariaN"
                            />
                        </li>
                        <li>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                className="inputFields"
                                id="register-password"
                                name="password"
                                placeholder="******"
                            />
                        </li>
                        <li>
                            <label htmlFor="confirm-password">Confirm password:</label>
                            <input
                                type="password"
                                className="inputFields"
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="******"
                               
                            />
                        </li>
                       
          
                        <li id="center-btn">
                            <button id="join-btn">Join</button>
                        </li>
                        <p className="navigation-field">
                            <span>
                                If you already have a profile click <Link to="/login">here</Link>
                            </span>
                        </p>
                    </ul>
                </form>

            </div>
        </section>

    )
}

const RegisterWithAuth = withAuth(Register);

export default RegisterWithAuth;