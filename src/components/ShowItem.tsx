import { Card } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import { useCart } from "../context/CartContext"

interface ShowItemProps{
    id: number
    name: string
    about: string
    price: number
    img: string
}

function ShowItem({id, name, about, price, img}: ShowItemProps) {

    const {addToCart, removeItem, isThere} = useCart()
    
    return (
        <Card style={{width: "20vw", height: "35vw"}}>
            <Card.Img className="img-top"
            src={img} 
            height="270vw" 
            style={{objectFit: "cover"}}
            />
            <Card.Body className="d-flex flex-column justify-content-around">
                <Card.Title className="d-flex justify-content-between align-items-baseline">
                    <div>{name}</div>
                    <div className="text-muted">R${price}.00</div>
                </Card.Title>
                <Card.Text className="text-muted">{about} </Card.Text>
                <div className="mt-auto">
                    {!isThere(id) ? 
                    <Button variant="primary" className="w-100" onClick={() => addToCart(id)}>
                        Adicionar ao carrinho
                        </Button> :
                    <Button variant="primary" className="w-100 bg-danger border-0" onClick={() => removeItem(id)}>
                        Remover do carrinho
                        </Button>
                    }
                </div>
            </Card.Body>

        </Card>
    )
}

export default ShowItem