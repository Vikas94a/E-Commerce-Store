import SearchBar from "./SearchBar";
import MenuOption from "./MenuOption";
import { Link } from "react-router-dom";
import Cart from "./Cart";


export default function NavBar() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto p-4 bg-blue-500 shadow-2xl relative">
      <h2 className="font-bold text-2xl text-white">🛍️ Ecommerce-Store</h2>
      
      <SearchBar/>
      <MenuOption/>
      <Cart/>
    </div>
  );
}
