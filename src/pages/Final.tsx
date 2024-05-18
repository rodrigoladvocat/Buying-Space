import { useCart } from "../context/CartContext"

export default function Final(){

    const { isFinal } = useCart()


    return (
        <div className="d-flex justify-content-center align-items-center">
            {isFinal && <div className="d-flex align-items-center fs-2" style={{height:"40vw"}}>Compra finalizada com sucesso!</div>}
        </div>
    )
}