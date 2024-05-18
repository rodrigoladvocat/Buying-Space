import { Button, Stack } from "react-bootstrap"
import { useCart } from "../context/CartContext"
import items from "../products/prods.json"

interface cardItemProps {
    id: number
}

export function CartItem({ id } : cardItemProps){
    const {removeItem} = useCart()

    const item = items.find(item => item.id === id)

    return(
        <Stack direction="horizontal" gap={3} className="d-flex align-items-center">
            <img src={item?.img} style={{width:"125px", height: "125px", objectFit:"cover"}}/>
            <div className="me-auto">
                <div className="d-flex justify-content-around">
                    {item?.name}
                </div>
            </div>
            <div className="text-muted">
                R${item?.price}.00
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeItem(id)}>
                &times;
            </Button>
        </Stack>
    )
}