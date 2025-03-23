import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setLoading, search, setSearch } = useContext(AppContext);
  const ApiUrl = "https://dummyjson.com/products";

  const [suggestion, setSuggestion] = useState([]);
  const [suggestionName, setSuggestionName] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const respond = await fetch(`${ApiUrl}?limit=0&skip=0`);

        if (respond.ok) {
          const data = await respond.json();
          setSuggestion(data.products);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [ApiUrl]);

  const matchedSuggestions = suggestion.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectSuggestion = (title) => {
    setSearch(title);
    setSuggestion([]);
  };

  const hanldeSearch = (e) => {
    console.log("btn clicked");
    e.preventDefault();

    if (search.trim !== " ") {
      navigate(`/category/search?q=${search.trim().replace(/\s+/g, "-")}`);
    }
  };

 

  return (
    <>
      <div className="flex flex-col justify-center w-112 h-8 border rounded mt-2 bg-white relative">
       
       
          <form onSubmit={hanldeSearch}  className="flex justify-between items-center" >
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-8 focus:outline-none p-2"
              placeholder="Search Items with name"
            />

            <button type="submit" className="mr-2 cursor-pointer">
              Search
            </button>
          </form>
          <div>
         
            {/* {search && matchedSuggestions.length >= 5 && (
              <ul className=" absolute left-0 top-6 overflow-hidden rounded bg-white mt-1 z-10 h-auto w-102">
                {matchedSuggestions.map((e) => (
                  
                  <Link to={`/productview/${e.id}`} key={e.id}>
                    <li
                      className="p-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSelectSuggestion(e.title)}
                    >
                      {e.title}
                    </li>
                  </Link>
                 
                ))}
              </ul>
            )} */}
          </div>
        
      </div>
    </>
  );
}
