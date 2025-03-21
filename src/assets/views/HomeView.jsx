import { useContext } from "react";
import { AppContext } from "../../App";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

export default function HomeView() {
  const {  dummyData, paginationFunction } = useContext(AppContext);

  

  return (
    <div>
    <div className="flex flex-wrap justify-center items-center flex-2 gap-4 h-auto  w-full ">
      {dummyData.map((product) => {
        return (
          <ProductCard
          id={product.id}
            key={product.id}
            description={product.description}
            image={product.images}
            title={product.title}
            price={product.price}
          />
        );
      })}

    </div>
    <Pagination
    paginationFunction={paginationFunction}
    />
    </div>
  );
}
