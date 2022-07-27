export const CreatePost = ({addPostHandler}) => {
    
    const onSubmit = (e) => {
        e.preventDefault();

        const postData = Object.fromEntries(new FormData(e.target));

        console.log(postData);

        addPostHandler(postData)
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
                               
                            />
                        </li>
                        <li>
                            <label htmlFor="author">Author:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="author"
                                placeholder="Roshani Chokshi"
                                name="author"
                                
                            />
                        </li>
                        <li>
                            <label htmlFor="genre">Genre:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="genre"
                                placeholder="Landscape"
                                name="genre"
                                
                            />
                        </li>
                        <li>
                            <label htmlFor="date">Added at:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="date"
                                placeholder="20.03.2022"
                                name="date"
                                
                            />
                        </li>
                        <li>
                            <label htmlFor="image">Image:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="image"
                                placeholder="http:/..."
                                name="image"
                               
                            />
                        </li>
                        <li>
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                className="inputFields"
                                name="description"
                                placeholder="A beautiful winter sunrise, ..."
                                defaultValue={""} 
                            />
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