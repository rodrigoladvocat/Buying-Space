import { createContext, useContext } from "react";
import { useState } from "react";
import {CartOffcanvas} from "../components/Cart";
import { useLocalStorage } from "@uidotdev/usehooks";


type CartProviderProps = {
    children: React.ReactNode
}

type CartItem = {
    id: number
}

type CartContext = {
    getQuantity: () => number
    addToCart: (id: number) => void
    removeItem: (id: number) => void
    isThere: (id: number) => boolean
    openCart: () => void
    closeCart: () => void
    cartList: CartItem[]
    finalRealize: () => void
    isFinal: boolean
    restart: () => void
}

const CartContext = createContext({} as CartContext)

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({children}: CartProviderProps){
    
    const [isOpen, setOpen] = useState(false)
    const [isFinal, setFinal] = useLocalStorage("Final", false)
    const [cartList, setCart] = useLocalStorage<CartItem[]>("cart", [])

    function openCart(){
        setOpen(true)
    }

    function closeCart(){
        setOpen(false)
    }

    function isThere(id: number){
        return cartList.find(item => item.id === id) ? true : false
    }

    function getQuantity(){
        return cartList.length
    }

    function addToCart(id: number){
        setCart(() => {
            if (isThere(id)){
                return [...cartList]
            }
            else {
                return [...cartList, {id}]
            }
        })
    }

    function removeItem(id: number){
        setCart(() => {
            return cartList.filter(item => item.id !== id)
        })
    }

    function finalRealize(){

        setCart(() => {
            return []
        })
        setFinal(true)
    }

    function restart(){
        setFinal(false)
    }

    return (
        <CartContext.Provider value={ {getQuantity, addToCart, removeItem, isThere, openCart, closeCart, cartList, finalRealize, isFinal, restart}}>
            {children}
            {isOpen && <CartOffcanvas />}
        </CartContext.Provider>
    )
}