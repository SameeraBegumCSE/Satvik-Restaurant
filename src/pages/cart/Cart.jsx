import CartSet from "../../components/cartset/CartSet";
import { useNavigate } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState, useEffect } from "react";
import MyButton from "../../components/custombtn/MyButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../../hooks/useTheme";

export default function Cart() {
  const { color } = useTheme();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const { user } = useAuthContext();
  const { addDocument } = useFirestore("users");
  const { addDocument: addAddress } = useFirestore("addresses");
// Function to remove item by index
  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const { documents } = useCollection(
    "cart",
    user ? ["uid", "==", user.uid] : null
  );

  // Address form states
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setemail] = useState("");
  const [Addr, setAddr] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Pin, setPin] = useState("");

  // UI states
  const [addressAdded, setAddressAdded] = useState(false);
  const [placed, setPlaced] = useState(false);

  function handleSubmitAddress(e) {
    e.preventDefault();
    addAddress({
      Fname,
      Lname,
      email,
      Addr,
      City,
      State,
      Pin,
      uid: user.uid,
      userName: user.displayName,
    }).then(() => {
      setFname("");
      setLname("");
      setemail("");
      setAddr("");
      setCity("");
      setState("");
      setPin("");
      setAddressAdded(true); // ✅ enables Checkout button
    });
  }

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    let calculatedTotal = 0;
    if (documents && documents.length > 0) {
      documents.forEach((item) => {
        calculatedTotal += item.price;
      });
      setTotal(calculatedTotal);
      setShippingCost(40);
    } else {
      setShippingCost(0);
    }
  }, [documents]);

  async function handleClick(e) {
    e.preventDefault();
    setPlaced(true);
    addDocument({
      userId: user.uid,
      placed: documents,
      total: total + shippingCost,
      delivered: false,
    }).then(() => {
      setTimeout(() => {
        navigate("/profile");
        window.scrollTo(0, 0);
      }, 3000);
    });
  }

  return (
    <div className="px-6 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 mt-30">Your Cart</h1>
      <p className="text-gray-600 mb-10">
        {documents ? `${documents.length} Products in Your cart` : "No items"}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {documents &&
            documents.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 bg-white p-4 rounded-xl shadow-md"
              >
                {/* IMAGE */}
                <img
                  src={item.image || "https://via.placeholder.com/100"}
                  alt={item.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-gray-500">Flavor: {item.flavor}</p>
                  <p className="font-bold mt-2">₹{item.price}</p>
                </div>

                {/* REMOVE BUTTON */}
 <button
            onClick={() => removeItem(index)}
            className="text-red-500 hover:underline ml-4"
          >
            Remove
          </button>
              </div>
            ))}
        </div>

        {/* Right: Summary & Checkout */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          {/* Totals */}
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>{documents ? documents.length : 0} items:</span>
              <span>₹{total}.00</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery cost:</span>
              <span>₹{shippingCost}.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span>₹0.00</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount:</span>
              <span>-₹0.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-3 border-t">
              <span>Total:</span>
              <span>₹{total + shippingCost}.00</span>
            </div>
          </div>

          {/* Checkout button */}
          <div className="mt-6">
            {(addressAdded && !placed) && (
              <MyButton
                bgColor={color}
                functionName={handleClick}
                btnText="Checkout"
                fontSize="18px"
                width="100%"
                height="50px"
                borderRadius="8px"
              />
            )}
            {placed && (
              <MyButton
                functionName={handleClick}
                btnText="ORDER PLACED!"
                bgColor="green"
                fontSize="18px"
                width="100%"
                height="50px"
                borderRadius="8px"
              />
            )}
          </div>

          {/* Delivery info */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
            will be Delivered in <b>20 minutes</b>
          </div>
        </div>
      </div>

      {/* Address form */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow-md max-w-xl">
        <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
        <form className="space-y-4" onSubmit={handleSubmitAddress}>
          <input
            type="text"
            value={Fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="First Name"
            className="w-full border rounded-lg p-2"
            required
          />
          <input
            type="text"
            value={Lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Last Name"
            className="w-full border rounded-lg p-2"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email"
            className="w-full border rounded-lg p-2"
          />
          <input
            type="text"
            value={Addr}
            onChange={(e) => setAddr(e.target.value)}
            placeholder="Address"
            className="w-full border rounded-lg p-2"
            required
          />
          <input
            type="text"
            value={City}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className="w-full border rounded-lg p-2"
            required
          />
          <input
            type="text"
            value={State}
            onChange={(e) => setState(e.target.value)}
            placeholder="State"
            className="w-full border rounded-lg p-2"
            required
          />
          <input
            type="text"
            value={Pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Pincode"
            className="w-full border rounded-lg p-2"
            required
          />
          <MyButton
            btnText="Add Address"
            bgColor={color}
            fontSize="16px"
            width="100%"
            height="45px"
            borderRadius="8px"
          />
        </form>
        
      </div>
        <div className="flex-1 flex flex-col items-center justify-center border-l pl-6">
          <h2 className="mt-4 text-xl font-semibold text-gray-800">Thanks for ordering! 💙</h2>
          <p className="text-gray-500">Come back soon and shop again!</p>
        </div>
      
      
    </div>
    
  );
}
