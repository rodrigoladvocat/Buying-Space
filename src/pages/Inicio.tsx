import items from "../products/prods.json"
import ShowItem from "../components/ShowItem";
import { useCart } from "../context/CartContext";
import { Button } from "react-bootstrap";

function Inicio() {
  const {isFinal, restart} = useCart()
  return (
    <div className="d-flex align-items-center justify-content-center" style={{height:"40vw"}}>
      {!isFinal && 
      <div className="d-flex align-items-center" style={{height:"40rem", gap:"1vw"}}>
          {items.map((item) => (
              <div className="d-flex" key={item.id}>
                  <ShowItem {...item}/>
              </div>
          ))}
      </div>}

      {isFinal && 
      <Button style={{width:"20vw"}} onClick={() => restart()}>Comprar novamente</Button>}
    </div>
  );
}

export default Inicio;