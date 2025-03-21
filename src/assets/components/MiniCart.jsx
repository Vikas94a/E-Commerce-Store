import { useContext } from "react"
import { AppContext } from "../../App"




export default function MiniCart(){
    const {cart} = useContext(AppContext)

console.log

    return(
        <div className="flex flex-row bg-white border-2 w-76 h-50  overflow-y-scrol">
{
    cart && cart.map((e)=>{
        console.log(e.image)
        return(
            
            <ul className="flex bg-white border-2 w-76 h-50  overflow-y-scroll  " key={e.id}>
                <img className="w-12 h-auto" src={e.image} alt="" />
                <li>{e.title}</li>
                <li>{e.price}</li>

        <li>{e.quantity}</li>
            </ul>
        )
    })
}
{/* <Link to >See More</Link> */}
        </div>
    )
}