import SearchBar from "./SearchBar";
import MenuOption from "./MenuOption";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import LogIn from "./LogIn";


export default function NavBar() {
  return (
    <div className="flex  justify-between w-full h-auto p-4 bg-blue-500 shadow-2xl relative">
      <Link to={"/"}>
      <h2 className="font-bold text-2xl text-white">🛍️ Ecommerce-Store</h2>
      </Link>
      <SearchBar/>
      <div className="flex flex-row justify-between gap-8 self-center">
      <Cart/>
      <LogIn/>
      </div>
    </div>
  );
}
