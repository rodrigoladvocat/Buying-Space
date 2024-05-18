import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import NavBar from "./components/NavBar";
import Final from "./pages/Final";
import { Container } from "react-bootstrap";
import { CartProvider } from "./context/CartContext";


function App(){
  return (
    <CartProvider>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Sobre" element={<Sobre/>} />
          <Route path="/Final" element={<Final/>} />
        </Routes>
      </Container>
    </CartProvider>
  )
}

export default App;