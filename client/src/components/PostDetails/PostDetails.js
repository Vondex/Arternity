import { useEffect, useContext, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PostContext } from '../../contexts/PostContext';
import { useAuthContext } from '../../contexts/AuthContext';

import * as postService from '../../services/postService';
import * as commentService from '../../services/commentService';
import commentValidation from '../validation/commentValidation';



export const PostDetails = () => {

    const navigate = useNavigate();
    const [textAreaContent, setTextAreaContent] = useState({
        comment: "",
    });
    const { addComment, fetchPostDetails, selectPost, postRemove } = useContext(PostContext);
    const { user } = useAuthContext();
    const { postId } = useParams();
    const [errors, setErrors] = useState({});

    const currentPost = selectPost(postId);

    const isOwner = currentPost._ownerId === user._id;

    useEffect(() => {
        (async () => {
            const postDetails = await postService.getOne(postId);
            const postComments = await commentService.getByPostId(postId);

            fetchPostDetails(postId, { ...postDetails, comments: postComments.map(x => `${x.user.username}: ${x.text}`) });
        })();
    }, []);


    const handleChange = (e) => {
        e.preventDefault();
        setTextAreaContent({
            ...textAreaContent,
            [e.target.name]: e.target.value,
        });
    }



    const addCommentHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const comment = formData.get('comment');


        setErrors(commentValidation(textAreaContent));
        if (comment == '') {

            return;
        } else {
            commentService.create(postId, comment)
                .then(result => {
                    addComment(postId, comment);
                });
                setTextAreaContent('');
                
        }
    };


    const postDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this post?');

        if (confirmation) {
            postService.remove(postId)
                .then(() => {
                    postRemove(postId);
                    navigate('/catalog');
                })
        }
    }

    return (
        <>
            <section id="details-page">
                <div className="main_card">
                    <div className="card_left">
                        <div className="card_datails">
                            <h1>Title: {currentPost.title}</h1>
                            <div className="card_book">
                                <p className="card-author">Author: {currentPost.author}</p>
                                <p className="card-date">Genre: {currentPost.genre}</p>
                                <p className="card-date">Date: {currentPost.date}</p>
                            </div>
                            <p className="disc">{currentPost.description}</p>


                            {isOwner &&


                                <div className="social">

                                    <Link to={`/posts/${postId}/edit`} className="edit-btn">
                                        Edit
                                    </Link>
                                    <button onClick={postDeleteHandler} className="del-btn">
                                        Delete
                                    </button>

                                </div>

                            }
                        </div>
                    </div>
                    <div className="card_right">
                        <img src={currentPost.image} alt="image" />
                    </div>
                </div>
            </section>


            <section id="comments-sec">

                {user.email &&

                    <div>

                        {!isOwner &&

                            <article className="create-comment">
                                <div className="comment-info">

                                    <h1>Add a new comment:</h1>
                                    <div className="com-det">

                                        <form className="com-form" onSubmit={addCommentHandler}>
                                            <div className="text-area">

                                                <textarea
                                                    onChange={handleChange}
                                                    value={textAreaContent.comment ? textAreaContent.comment : ''}
                                                    name="comment"
                                                    placeholder="Comment......"
                                                />
                                                {errors.comment && <p className="error">{errors.comment}</p>}

                                            </div>
                                            <button id="submit-btn">Submit</button>
                                        </form>

                                    </div>

                                </div>
                            </article>


                        }


                    </div>

                }


                <article className="all-comments">
                    {currentPost.comments?.map(p =>

                        <div className="comment-content-card">
                            {/* 
                            <div className="user-prof">
                                <p>{user.username}:</p>
                            </div> */}

                            <div key={p} className="user-comment">
                                <p>{p}</p>
                            </div>


                        </div>

                    )}

                    {!currentPost.comments &&
                        <div className='no-comments'>
                            <h1>No comments yet</h1>

                        </div>
                    }

                </article>

            </section>

        </>

    );
};
