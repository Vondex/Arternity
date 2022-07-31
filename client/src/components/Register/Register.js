import { Link } from 'react-router-dom';

export const Register = () => {
    return (
        <section id="register-page">
            <div className="signupSection">
                <div className="info">
                    <h2>Discover a new art world and new people</h2>
                </div>
                <form action="#" method="" className="signupForm">
                    <h2>Sign Up</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="email"
                                name=""
                                defaultValue=""
                                placeholder="marian@gmail.com"
                            />
                        </li>
                        <li>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="username"
                                name=""
                                placeholder="MariaN"
                            />
                        </li>
                        <li>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                className="inputFields"
                                id="password"
                                name=""
                                placeholder="******"
                            />
                        </li>
                        <li>
                            <label htmlFor="location">Location:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="location"
                                name=""
                                placeholder="Berlin, Germany"
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