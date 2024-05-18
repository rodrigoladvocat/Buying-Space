import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { CartItem } from "./CartItem";
import items from "../products/prods.json"

export function CartOffcanvas(){

    const {closeCart, cartList, finalRealize} = useCart()
    return (
        <Offcanvas show={true} onHide={closeCart} placement="end">
            <Offcanvas.Header className="bg-body-secondary" closeButton>
                <Offcanvas.Title className="d-flex align-items-center gap-2 fs-2"><img
                    alt="Basket" 
                    src= "src\images\shopping-basket.svg"
                    width="30"
                    height="30"
                />
                    Seu carrinho
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column justify-content-between">
                <Stack gap={3}>
                    {cartList.map(item => (
                        <CartItem key={item.id} {...item}/>
                    ))}

                    <div className="fw-bold fs-5 ms-auto">Total: R${
                        cartList.reduce(
                            (total, cartItem) => {
                                const item = items.find(item => item.id === cartItem?.id)
                                return total + (item?.price ?? 0)
                            }, 0
                        )
                    }.00</div>
                </Stack>

                {cartList.length > 0 && <Button  onClick={() => finalRealize()} href="/Final">
                    Finalizar Compra
                </Button>}
            </Offcanvas.Body>
        </Offcanvas>     
    )
}