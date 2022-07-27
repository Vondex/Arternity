export const PostDetails = () => {
    return (
        <>
            <section id="details-page">
                <div className="main_card">
                    <div className="card_left">
                        <div className="card_datails">
                            <h1>Title: The Silvered Serpents</h1>
                            <div className="card_book">
                                <p className="card-author">Author: Roshani Chokshi</p>
                                <p className="card-date">Genre: Landscape</p>
                                <p className="card-date">Date: 18.02.2021</p>
                            </div>
                            <p className="disc">A beautiful winter sunrise, ...</p>
                            {/* If there is no registered user, do not display buttons*/}
                            <div className="social-btn">
                                {/* Only for registered user and author of the post */}
                                <a href="#" className="edit-btn">
                                    Edit
                                </a>
                                <a href="#" className="del-btn">
                                    Delete
                                </a>
                                {/* logged in users, who have not yet voted*/}
                                <a href="#" className="vote">
                                    Like
                                </a>
                                {/* <a href="#" class="vote-down">Dislike</a> */}
                                {/* logged in user who has already voted*/}
                                <p className="thanks-for-vote">You have already liked!</p>
                            </div>
                        </div>
                    </div>
                    <div className="card_right">
                        <img src="./static/img/art5.jpg" alt="image" />
                    </div>
                </div>
            </section>
            <section id="votes">
                <div className="vote-info">
                    <div className="card_left">
                        <div className="card_datails">
                            <h1>Likes: 0</h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* 404 - Not Found Section */}
            <div className="full-screen"></div>
        </>

    )
}