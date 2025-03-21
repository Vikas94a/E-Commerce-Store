import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function PrductByCategory() {
  const { option } = useParams();
  const [products, setProducts] = useState([]);

  

  const { setLoading, loading, ApiUrl } = useContext(AppContext);

//   const dd =`${ApriUrl}/${id}`
  useEffect(() => {
    
  
    async function fetchProducts() {
      try {
        setLoading(true);
        const respond = await fetch(`${ApiUrl}/category/${option}`);
        
        if(respond.ok) {
        
        const data = await respond.json();
        setProducts(data.products);
      }
        
        

        
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [option]);

  // useEffect(() => {
  //   console.log(loading)
  // },[])

  return (
    <div className="flex flex-wrap w-full h-full justify-center items-center">
      {loading && (
        <p>Loading......</p>
      ) }
      
      {!loading && products && (
        products.map((product) => {
          console.log(product.thumbnail)
          return (
            <ProductCard
            id={product.id}
              key={product.id}
              image={product?.thumbnail}
              title={product.title}
              price={product.price}
            />
          );
        })
      )}
    </div>
  );
}
