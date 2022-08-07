import { Link } from 'react-router-dom';

export const CatalogItem = ( {post} ) => {
    return (
        <div className="flip flip-vertical">
            <div className="front">
                <img src={post.image} alt="image_1" />
            </div>
            <div className="back">
                <h2>{post.title}</h2>
                <p>Author: {post.author}</p>
                <Link to={`/catalog/${post._id}`} className="details">
                    Details
                </Link>
            </div>
        </div>
    );
}