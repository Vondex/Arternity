import { useContext, useState } from 'react';

import { PostContext } from '../../contexts/PostContext';
import * as postService from '../../services/postService';

import createValidation from '../validation/createValidation';


export const CreatePost = () => {
    const { postAdd } = useContext(PostContext);

    const [values, setValues] = useState({
        title: "",
        author: "",
        genre: "",
        date: "",
        image: "",
        description: "",

    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const postData = new FormData(e.target);
        
        const title = postData.get('title');
        const author = postData.get('author');
        const genre = postData.get('genre');
        const date = postData.get('date');
        const image = postData.get('image');
        const description = postData.get('description');

        const data = {
            title,
            author,
            genre, 
            date,
            image,
            description
        }
        setErrors(createValidation(values));
        if (title == '' || author == '' || genre == '' || date == '' || image == '' || description == '') {
            return;
        } else {

            postService.create(data)
            .then(result => {
                postAdd(result)
            });
        }
        
    };
    
    
    
    
    return (
        <section id="create-page">
            <div className="createSection">
                <div className="info-create">
                    <h2>Add your work and share it with others</h2>
                </div>
                <form id="create" className="createForm" onSubmit={onSubmit}>
                    <h2>Add Post</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="title"
                                placeholder="The Silvered Sun"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                               
                            />
                            {errors.title && <p className="error">{errors.title}</p>}
                        </li>
                        <li>
                            <label htmlFor="author">Author:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="author"
                                placeholder="Roshani Chokshi"
                                name="author"
                                value={values.auhor}
                                onChange={handleChange}
                                
                            />
                            {errors.author && <p className="error">{errors.author}</p>}
                        </li>
                        <li>
                            <label htmlFor="genre">Genre:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="genre"
                                placeholder="Landscape"
                                name="genre"
                                value={values.genre}
                                onChange={handleChange}
                                
                            />
                            {errors.genre && <p className="error">{errors.genre}</p>}
                        </li>
                        <li>
                            <label htmlFor="date">Added at:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="date"
                                placeholder="20.03.2022"
                                name="date"
                                value={values.date}
                                onChange={handleChange}
                                
                            />
                            {errors.date && <p className="error">{errors.date}</p>}
                        </li>
                        <li>
                            <label htmlFor="image">Image:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="image"
                                placeholder="http:/..."
                                name="image"
                                value={values.image}
                                onChange={handleChange}
                               
                            />
                            {errors.image && <p className="error">{errors.image}</p>}
                        </li>
                        <li>
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                className="inputFields"
                                name="description"
                                placeholder="A beautiful winter sunrise, ..."
                                defaultValue={""} 
                                value={values.description}
                                onChange={handleChange}
                            />
                            {errors.description && <p className="error">{errors.description}</p>}
                        </li>
                        <li id="center-btn">
                            <button id="create-btn">Create</button>
                        </li>
                    </ul>
                </form>
            </div>
        </section>

    )
}