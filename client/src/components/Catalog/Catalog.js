export const Catalog = () => {
    return (
        <section id="catalog">
            <div className="heading-all-posts">
                <h1>All Posts</h1>
            </div>
            <div className="band-all">
                {/* If there are posts for wildlife in the database display each of them */}
                <div className="flip flip-vertical">
                    <div className="front">
                        <img src="./static/img/art1.png" alt="image_1" />
                    </div>
                    <div className="back">
                        <h2>Title</h2>
                        <p>Description: The galaxy through a small part of the human being</p>
                        <a href="#" className="details">
                            Details
                        </a>
                    </div>
                </div>
                <div className="flip flip-vertical">
                    <div className="front">
                        <img src="./static/img/art3.jpg" alt="image_2" />
                    </div>
                    <div className="back">
                        <h2>Title</h2>
                        <p>Description: The beauty of the colorful sunset.</p>
                        <a href="#" className="details">
                            Details
                        </a>
                    </div>
                </div>
                <div className="flip flip-vertical">
                    <div className="front">
                        <img src="./static/img/art2.jpg" alt="image_2" />
                    </div>
                    <div className="back">
                        <h2>Title</h2>
                        <p>Description: The beauty of the colorful sunset.</p>
                        <a href="#" className="details">
                            Details
                        </a>
                    </div>
                </div>
                <div className="flip flip-vertical">
                    <div className="front">
                        <img src="./static/img/art4.jpg" alt="image_2" />
                    </div>
                    <div className="back">
                        <h2>Title</h2>
                        <p>Description: The beauty of the colorful sunset.</p>
                        <a href="#" className="details">
                            Details
                        </a>
                    </div>
                </div>
                {/* If there are still no posts for wildlife in the database display: */}
                {/* <div class="no-posts">
                  <div class="no-posts-img">
                      <!/-- Do not forget to change the path to the image, and remove this comment  --/>
                      <img src="./static/img/art2.jpg" alt="image_3">
                  </div>
                  <p class="no-offer">There are no posts yet...</p>
              </div>*/}
            </div>
        </section>

    )
}