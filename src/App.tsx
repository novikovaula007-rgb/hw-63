import NavBar from './components/NavBar/NavBar.tsx'
import {Container} from "@mui/material";
import {Routes} from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar/>
      <main>
        <Container maxWidth='lg' sx={{mt: 6}}>
          <Routes>
          </Routes>
        </Container>
      </main>
    </>
  )
}

export default App
