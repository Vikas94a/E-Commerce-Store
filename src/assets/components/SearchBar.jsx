import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function SearchBar() {

const {id}=useParams()

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

  const matchedSuggestions = suggestion.filter(e =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectSuggestion = (title) => {
    setSearch(title);
    setSuggestion([]);
  
  };



  return (
    <>
      <div className="flex flex-col w-112 h-12 border rounded mt-2 bg-white">
        <div className="flex justify-between items-center">
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-8 focus:outline-none p-2"
            placeholder="Search Items with name"
          />
          
          
          <button className="mr-2 cursor-pointer ">Search</button>
          
        </div>
        {search && matchedSuggestions.length > 0 && (
          <ul className="border rounded bg-white mt-1 z-10">
            {matchedSuggestions.map((e) => (
              <Link to={`/productview/${e.id}`}  key={e.id}>
              <li
                
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelectSuggestion(e.title)}
              >
                {e.title}
            
              </li>
              </Link>
            ))}
          </ul>
        )}
        
      </div>
    </>
  );
}
