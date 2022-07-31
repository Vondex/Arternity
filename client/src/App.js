import './App.css';
import { useEffect, useState, Suspense } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';

import * as postService from './services/postService';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreatePost } from './components/CreatePost/CreatePost';
import { Catalog } from './components/Catalog/Catalog';
// import { PostDetails } from './components/PostDetails/PostDetails';
import { Loader } from './components/Loader/Loader';
import { NotFound } from './components/NotFound/NotFound';

function App() {

    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        postService.getAll()
            .then(result => {
                console.log(result);
                setPosts(result);
            });
    }, []);

    const addPostHandler = (postData) => {
    setPosts(state => [
        ...state,
        {
            ...postData,
            _id: uniqid(),
        },
    ]);

    navigate('/catalog');
};



    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={
                        <Suspense fallback={<Loader />}>
                            <Register />
                        </Suspense>
                    } />

                    <Route path="/create" element={<CreatePost addPostHandler={addPostHandler} />} />
                    <Route path="/catalog" element={<Catalog posts={posts} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;








// const addComment = (gameId, comment) => {
//     setPosts(state => {
//         const game = state.find(x => x._id == gameId);

//         const comments = game.comments || [];
//         comments.push(comment)

//         return [
//             ...state.filter(x => x._id !== gameId),
//             { ...game, comments },
//         ];
//     });
// };


