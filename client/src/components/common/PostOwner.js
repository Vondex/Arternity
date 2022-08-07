import { useContext } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { PostContext } from "../../contexts/PostContext";

const PostOwner = ({ children }) => {
    const { selectPost } = useContext(PostContext);
    const { user, isAuthenticated } = useAuthContext();
    const { postId } = useParams();

    const currentPost = selectPost(postId);

    if (isAuthenticated && user._id !== currentPost._ownerId) {
        return <Navigate to='/catalog' replace />
    }

    return children ? children : <Outlet />;
};

export default PostOwner;

