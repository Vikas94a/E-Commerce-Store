import "./App.css";
import Footer from "./assets/components/Footer";
import NavBar from "./assets/components/NavBar";
import { useEffect, useState, createContext } from "react";
import { data, Outlet } from "react-router-dom";

export const AppContext = createContext();


function App() {
  const ApiUrl = "https://dummyjson.com/products";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dummyData, setDummyData] = useState([]);
  const [limit, setLimit]= useState(30)
  const [skip, setSkip]= useState(30)
  const [search, setSearch] = useState("");
  const[cart, setCart]=useState(()=>{const savedData= localStorage.getItem('data')
    return savedData ? JSON.parse(savedData):[]
  })

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        setLoading(true);
        const respond = await fetch(`${ApiUrl}?limit=${limit}&skip=${skip}`);
        const data = await respond.json();

        setDummyData(data.products);
        // console.log(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [ limit, skip]);

  useEffect(()=>{
    
  })
function paginationFunction(){
  setLimit(limit+10)
  setSkip(skip+10)
  console.log(`${limit}and${skip}`)
}



  return (
    <>
      <AppContext.Provider
        value={{
          ApiUrl,
          loading,
          setLoading,
          error,
          setError,
          dummyData,
          setDummyData,
          paginationFunction,
          search,
          setSearch,
          cart,
          setCart
        }}
      >
        <NavBar />
        <Outlet />
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;
