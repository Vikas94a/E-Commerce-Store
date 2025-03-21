import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";

export default function Productview() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const { ApiUrl, setLoading, search, setSearch } = useContext(AppContext);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        setLoading(true);
        const respond = await fetch(`${ApiUrl}/${id}`);
        const data = await respond.json();

        setProductDetails(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProductDetails();
  }, [ApiUrl, id]);

  
 


  return <div>
    
            <div>
                <img src={productDetails.thumbnail} alt="" />
            </div>
            <div>
                <p>{productDetails.title}</p>
                <p>Sold by:-{productDetails.brand}</p>
                <p>Price:-{productDetails.price} </p>
                <p>{productDetails.description}</p>
                <div>
                    <p>Rating:-{productDetails.rating}</p>
                </div>
            </div>

       
  </div>;
}
