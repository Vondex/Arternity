import './App.css';
import { Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PostProvider } from './contexts/PostContext';
import PrivateRoute from "./components/common/PrivateRoute";


import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { CreatePost } from './components/CreatePost/CreatePost';
import { Catalog } from './components/Catalog/Catalog';
import { PostDetails } from './components/PostDetails/PostDetails';
import { Loader } from './components/Loader/Loader';
import { NotFound } from './components/NotFound/NotFound';
import PostOwner from "./components/common/PostOwner";
import { EditPost } from './components/EditPost/EditPost';
import Logout from './components/Logout/Logout';


const Register = lazy(() => import('./components/Register/Register'));

function App() {

    return (
        <AuthProvider>

            <div id="box">
                <Header />

                <PostProvider>


                    <main id="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={
                                <Suspense fallback={<Loader />}>
                                    <Register />
                                </Suspense>
                            } />

                            <Route path="/create" element={(
                                <PrivateRoute>
                                    <CreatePost />
                                </PrivateRoute>
                            )} />
                           <Route element={<PostOwner />}>
                                <Route path="/posts/:postId/edit" element={<EditPost />} />
                            </Route>
                            <Route element={<PrivateRoute />}>
                                <Route path="/logout" element={<Logout />} />
                            </Route>
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/catalog/:postId" element={<PostDetails />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>

                </PostProvider>

                <Footer />
            </div>

        </AuthProvider>
    );
}

export default App;







