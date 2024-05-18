import { Container, Nav, Navbar } from "react-bootstrap";
import { useCart } from "../context/CartContext";

function NavBar() {

  const {getQuantity, openCart} = useCart()

  const items_quantity = getQuantity()

  return (
    <Navbar sticky="top" expand = "lg" className="bg-body-secondary">
        <Container className= "justify-content-around align-items-center">
            <Navbar.Brand className="d-flex gap-1">
                <img
                    alt="Logo" 
                    src= "src\images\R.png"
                    width="30"
                    height="30"
                />
                Buying Space
            </Navbar.Brand> 
            <Nav>
                <Nav.Link href="/">Início</Nav.Link>
                <Nav.Link href="/Sobre">Sobre</Nav.Link>
            </Nav>
            <button type="button" className="bg-body-secondary border-0 d-flex" onClick={openCart}>
                <img
                    src="src\images\shopping-cart-svgrepo-com.png"
                    width="35"
                    height="35"
                />
                {items_quantity > 0 && 
                
                <div className="rounded-circle bg-danger d-flex justify-content-center
                align-items-center" 
                style={{
                    width: "18px", 
                    height: "18px", 
                    position: "relative", 
                    right: "10px", 
                    bottom: "8px"}}
                    >
                    
                    {items_quantity}
                </div>
                }
            </button>
        </Container>
    </Navbar>
  );
}

export default NavBar;