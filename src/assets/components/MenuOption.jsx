import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";


export default function Menuoption() {
  const { setError, setLoading, ApiUrl } = useContext(AppContext);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchCategory() {
      try {
        setError(null);
        setLoading(true);
        const respond = await fetch(`${ApiUrl}/category-list`);
        const data = await respond.json();

        setCategory(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCategory();
  }, []);

  return(
    <div className="flex flex-row flex-wrap justify-around w-full h-auto ">
        
        {category.map((option, index)=>{
            return(
              <Link key={index}  to={`/category/${option}`}>
                    <ol className="list-none p-2 w-auto text-white">
                        {option}
                    </ol>
                    </Link>
                
            )
        })}
    </div>
  )
}
