import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Menuoption from "../components/MenuOption";


export default function PrductByCategory() {
  const { option } = useParams();
  const [products, setProducts] = useState([]);

  const context= useContext(AppContext)

  if(!context){
    return <div>Loading.....</div>
  }

  const { setLoading, loading, ApiUrl, search, cart } = context

  console.log(cart)


  let newUrl;

if(!search){
   newUrl=`${ApiUrl}/category/${option}`
}else newUrl=`${ApiUrl}/search?q=${search.trim().replace(/\s+/g, "-")}`


// console.log(newUrl)
  //   const dd =`${ApriUrl}/${id}`
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const respond = await fetch(newUrl);

        if (respond.ok) {
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
  }, [option, newUrl]);

  // useEffect(() => {
  //   console.log(loading)
  // },[])

  return (
    <>
      <div className="flex gap-1 p-3">
        <div className="">
          <Menuoption />
        </div>

        <div className="flex flex-wrap w-full h-full gap-3 justify-center items-center">
          {loading && <p>Loading......</p>}

          {!loading &&
            products &&
            products.map((product) => {
             
              return (
                <ProductCard
                  id={product.id}
                  key={product.id}
                  image={product?.thumbnail}
                  title={product.title}
                  price={product.price}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}


