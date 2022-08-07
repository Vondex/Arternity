import { CatalogItem } from "./CatalogItem/CatalogItem"
import React, { useEffect, useState, useContext } from "react";
import { PostContext } from "../../contexts/PostContext";

import { Loader } from "../Loader/Loader";

export const Catalog = () => {

    const { posts } = useContext(PostContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div>

            {
                loading ?
                    <Loader /> :

                    <section id="catalog">
                        <div className="heading-all-posts">
                            <h1>All Posts</h1>
                        </div>
                        <div className="band-all">

                            {posts.length > 0
                                ? posts.map(p => <CatalogItem key={p._id} post={p} />)
                                : <div className="no-posts">
                                    <p>There are no posts yet...</p>
                                </div>
                            }

                        </div>
                    </section>
            }
        </div>

    )
}