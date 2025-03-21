
// import { useContext } from "react"
import { AppContext } from "../../App"


export default function Pagination({paginationFunction}){
    // const{paginationFunction} = useContext(AppContext)

    return(
        <div className="flex justify-center w-full mt-5">
            <button  onClick={paginationFunction}  className="bg-orange-500 p-2 rounded-xl border border-white font-bold text-white">Show more</button>
        </div>
    )
}