import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../App"



export default function ProductCard({id, image, title, price,discountPercentage, description,rating }){

    const{cart, setCart}= useContext(AppContext)

    function handleClick(id){
       const existingProduct = cart.find((product)=> product.id === id  )
       if(existingProduct){
setCart(cart.map((e)=> e.id === id ? {...e, quantity:e.quantity+1}: cart))
// console.log(cart)
       }else setCart([...cart, {image, id, title, price,quantity:1 }])
    }



    return(
       
        <div key={id} className="flex flex-col w-74 h-126 m-auto p-4 justify-center items-center rounded hover:shadow-2xl">
             <Link to={`/productview/${id}`}>
            <img className="h-66 w-54 shadow-2xs" src={image || undefined} alt={title} />
            {/* {console.log(id)}  */}
            <p className="text-xl font-bold mt-4">{title}</p>
            <p className="text-zinc-500 text-xs mt-2">{description}</p>
           <p  className="font-bold text-red-500 mt-2">Nok: {price}</p> 
           <span><strong>{discountPercentage}</strong></span>
           <p>{rating}</p>
           </Link>
           <button onClick={()=>handleClick(id)} className="bg-orange-500 p-2 w-15 rounded text-white font-stretch-50%">Buy</button>
        </div>

    )
}