import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import * as postService from '../../services/postService';
import { PostContext } from "../../contexts/PostContext";

export const EditPost = () => {
    const [currentPost, setCurrentPost] = useState({});
    const { postEdit } = useContext(PostContext);
    const { postId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        postService.getOne(postId)
            .then(postData => {
                setCurrentPost(postData);
            })
    }, [postId])

    const onSubmit = (e) => {
        e.preventDefault();

        const postData = Object.fromEntries(new FormData(e.target));

        postService.edit(postId, postData)
            .then(result => {
                postEdit(postId, result);
                navigate(`/catalog/${postId}`)
            });
    };

    return (
        <section id="edit-page">
        <div className="editSection">
            <div className="info-edit">
                <h2>Edit your post</h2>
            </div>
            <form id="edit" className="editForm" onSubmit={onSubmit}>
                <h2>Edit Post</h2>
                <ul className="noBullet">
                    <li>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            className="inputFields"
                            id="title"
                            defaultValue={currentPost.title}
                            name="title"
                           
                        />
                    </li>
                    <li>
                        <label htmlFor="author">Author:</label>
                        <input
                            type="text"
                            className="inputFields"
                            id="author"
                            defaultValue={currentPost.author}
                            name="author"
                            
                        />
                    </li>
                    <li>
                        <label htmlFor="genre">Genre:</label>
                        <input
                            type="text"
                            className="inputFields"
                            id="genre"
                            defaultValue={currentPost.genre}
                            name="genre"
                            
                        />
                    </li>
                    <li>
                        <label htmlFor="date">Added at:</label>
                        <input
                            type="text"
                            className="inputFields"
                            id="date"
                            defaultValue={currentPost.date}
                            name="date"
                            
                        />
                    </li>
                    <li>
                        <label htmlFor="image">Image:</label>
                        <input
                            type="text"
                            className="inputFields"
                            id="image"
                            defaultValue={currentPost.image}
                            name="image"
                           
                        />
                    </li>
                    <li>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            className="inputFields"
                            name="description"
                            defaultValue={currentPost.description}
                        />
                    </li>
                    <li id="center-btn">
                        <button id="edit-btn">Save</button>
                    </li>
                </ul>
            </form>
        </div>
    </section>

    );
}

