import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../App"



export default function ProductCard({id, image, title, price,discountPercentage, description,rating }){

    const{cart, setCart}= useContext(AppContext)

    function handleClick(id){
       const existingProduct = cart.find((product)=> product.id === id  )
       if(existingProduct){
setCart(cart.map((item)=> item.id === id ? {...item, quantity:item.quantity+1}: item))
// console.log(cart)
       }else setCart([...cart, {image, id, title, price,quantity:1 }])
       localStorage.setItem("data", JSON.stringify(cart))
    }



    return(
       
        <div key={id} className="flex flex-col w-64 h-86 p-2 justify-center items-center align-middle rounded border hover:shadow-2xl">
            
             <Link to={`/productview/${id}`} className="flex flex-col items-center w-full">
            <img className="h-36 w-34 shadow-2xs" src={image || undefined} alt={title} />
            {/* {console.log(id)}  */}
            <p className="text-xl font-bold mt-4">{title}</p>
            <p className="text-zinc-500 text-xs mt-2">{description}</p>
           <p  className="font-bold text-red-500 mt-2">Nok: {price}</p> 
           <span><strong>{discountPercentage}</strong></span>
           <p>{rating}</p>
           </Link>
           
           <button onClick={()=>handleClick(id)} className="bg-orange-500 p-2 w-15 rounded text-white cursor-pointer hover:bg-green-400">Buy</button>
        </div>

    )
}