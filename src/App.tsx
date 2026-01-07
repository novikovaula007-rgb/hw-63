import NavBar from './components/NavBar/NavBar.tsx'
import {Container} from "@mui/material";
import PostForm from "./components/PostForm/PostForm.tsx";

const App = () => {
  return (
    <>
      <NavBar/>
      <main>
        <Container maxWidth='lg' sx={{mt: 6}}>
          <PostForm/>
        </Container>
      </main>
    </>
  )
}

export default App
