import { useContext, useState } from "react"
import { AppContext } from "../../App"
import MiniCart from "./MiniCart"
import { FaShoppingCart } from "react-icons/fa"



export default function Cart(){
    const[isCartOpen, setIsCartOpen]= useState(false)
const{cart}=useContext(AppContext)

function handleMiniCart(){
  setIsCartOpen(!isCartOpen)
}



    return(
        <div className="flex relative">
            <div className="text-white font-bold text-3xl cursor-pointer" onClick={handleMiniCart} ><FaShoppingCart/> </div>
            <span className=" bg-rose-500 text-white  w-5 h-5 rounded-full absolute left-4 bottom-5 flex items-center justify-center text-sm" >{cart.length}</span>
           
           <div>  {isCartOpen && <MiniCart  onClose={()=> setIsCartOpen(false)} />}     </div>
          
        </div>
    )
}