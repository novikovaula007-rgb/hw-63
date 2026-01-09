import {Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.tsx';
import {Container} from "@mui/material";
import Home from './containers/Home/Home.tsx';
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage.tsx";
import PostItem from "./containers/PostItem/PostItem.tsx";
import NewPost from "./containers/NewPost/NewPost.tsx";
import EditPost from "./containers/EditPost/EditPost.tsx";
import About from "./containers/About/About.tsx";
import Contacts from "./containers/Contacts/Contacts.tsx";

const App = () => {
    return (
        <>
            <NavBar/>
            <main>
                <Container maxWidth='lg' sx={{mt: 6}}>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/posts' element={<Home/>}/>
                        <Route path='/posts/add' element={<NewPost/>}/>
                        <Route path='/posts/:idPost' element={<PostItem/>}/>
                        <Route path='/posts/:idPost/edit' element={<EditPost/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Routes>
                </Container>
            </main>
        </>
    )
}

export default App
