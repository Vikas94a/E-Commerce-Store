import { useContext } from "react";
import { AppContext } from "../../App";
import ProductCard from "../components/ProductCard" ;
import Pagination from "../components/Pagination";
import Menuoption from "../components/MenuOption";

export default function HomeView() {

  const context= useContext(AppContext)

  if(!context){
  return <div>Loading</div>
  }

  const{dummyData, paginationFunction}=context

  

  return (<>
    <div className="flex gap-1 p-3">
<div className="">
  <Menuoption/>
</div>

    <div className="flex flex-wrap justify-center items-center m-2 gap-4 h-auto  w-full ">
      {dummyData.map((product) => {
        return (
          <ProductCard
          id={product.id}
            key={product.id}
            description={product.description}
            image={product.thumbnail}
            title={product.title}
            price={product.price}
          />
        );
      })}

    </div>
   
    </div>
    <Pagination
    paginationFunction={paginationFunction}
    />
    </>
  );
}
