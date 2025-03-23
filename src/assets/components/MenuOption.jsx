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
    <div className="flex flex-col flex-wrap justify-center w-62 h-auto bg-blue-200 p-4 shadow-amber-200">
        
        {category.map((option, index)=>{
          // console.log(option)
            return(
              <Link key={index}  to={`/category/${option}`}>
                    <li className="list-none p-2 w-auto text-black font-bold">
                        {option.charAt(0).toUpperCase()+ option.slice(1)}
                    </li>
                    </Link>
                
            )
        })}
    </div>
  )
}
