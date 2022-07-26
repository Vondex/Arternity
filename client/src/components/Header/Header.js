export const Header = () => {
    return (
        <nav>
            {/* Do not forget to change the path to the image */}
            {/* <img src="../public/img/infinity.png" alt="logo" /> */}
            <ul className="menu">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">All Posts</a>
                </li>
                {/* Logged users */}
                <li>
                    <a href="#">Add A Post</a>
                </li>
                {/* <li><a href="#">My Posts</a></li> */}
                <li>
                    <a href="#">
                        {"{"}
                        {"{"}email-of-user{"}"}
                        {"}"}'s Profile
                    </a>
                </li>
                <li>
                    <a href="#">Logout</a>
                </li>
                {/* Guest users */}
                <li>
                    <a href="#">Register</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>

    )
}