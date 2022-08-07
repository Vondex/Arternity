import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="full-screen">
            <div className="con-not-found">
                <span className="error-num">4</span>
                <span className="error-num">0</span>
                <span className="error-num">4</span>
                <p className="sub-text">Something went wrong</p>
                <p>
                    Go Back to <Link to="/">Home</Link>
                </p>
            </div>
        </div>

    )
}