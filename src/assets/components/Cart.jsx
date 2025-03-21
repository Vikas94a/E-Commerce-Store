import { useContext, useState } from "react"
import { AppContext } from "../../App"
import MiniCart from "./MiniCart"



export default function Cart(){
    const[isCartOpen, setIsCartOpen]= useState(false)
const{cart}=useContext(AppContext)

function handleMiniCart(){
   setIsCartOpen(true)
   if(isCartOpen){
    setIsCartOpen(false)
   }
}



    return(
        <div className="absolute right-8.5 top-12">
            <button onClick={handleMiniCart} >Cart</button>
            <p>{cart.length}</p>
           {isCartOpen && <MiniCart/>} 
        </div>
    )
}