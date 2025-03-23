import { useContext } from "react";
import { AppContext } from "../../App";
import { IoMdClose } from "react-icons/io";

export default function MiniCart({ onClose }) {
  const { cart } = useContext(AppContext);

  console.log(cart)

  return (
    <div className="fixed inset-0 bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-xl w-96 max-h-[80vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <IoMdClose size={24} />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">Shoping Cart</h2>

        {cart && cart.length > 0 ? (
          <div className="space-y-4">
            {cart.map((e) => (
              <div
                className="flex items-center justify-between border-b pb-2"
                key={e.id}
              >
                <div className="flex items-center space-x-4">
                  <img
                    className="w-16 h-16 object-cover rounded"
                    src={e.image}
                    alt={e.title}
                  />
                  <div>
                    <p className="font-medium">{e.title}</p>
                    <p className="text-gray-600">Price:${e.price} </p>
                    <p className="text-sm">Quantity: {e.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 text-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Your item Cart is empty</p>
        )}
      </div>
    </div>
  );
}
