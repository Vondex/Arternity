import './App.css';
import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
// import uniqid from 'uniqid';

import * as postService from './services/postService';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreatePost } from './components/CreatePost/CreatePost';
import { Catalog } from './components/Catalog/Catalog';
import { PostDetails } from './components/PostDetails/PostDetails';
import { NotFound } from './components/NotFound/NotFound';

function App() {

    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

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

    // const addPostHandler = (postData) => {
    //     setPosts(state => [
    //         ...state,
    //         {
    //             ...postData,
    //             _id: uniqid(),
    //         },
    //     ]);

    //     navigate('/catalog');
    // };

    // useEffect(() => {
    //     postService.getAll()
    //         .then(result => {
    //             console.log(result);
    //             setPosts(result);
    //         });
    // }, []);
    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>

                    <Route path="/create" element={<CreatePost />}  />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
