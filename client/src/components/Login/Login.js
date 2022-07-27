export const Login = () => {
    return (
        <section id="login-page">
            <div className="loginSection">
                <div className="info">
                    <h2>Welcome again!</h2>
                    <p>Sign in to view new posts</p>
                </div>
                <form action="#" method="" className="loginForm">
                    <h2>Login</h2>
                    <ul className="noBullet">
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
                                placeholder="*********"
                            />
                        </li>
                        <li id="center-btn">
                            <button id="login-btn">Login</button>
                        </li>
                    </ul>
                </form>
            </div>
        </section>

    )
}