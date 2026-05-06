import "./Products.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useTheme } from "../../hooks/useTheme";
import { useState } from "react";

export default function Products({ products }) {
  const { addDocument, response } = useFirestore("cart");
  const { user } = useAuthContext();
  const { color } = useTheme();

  const [addedToCart, setAddedToCart] = useState([]);

  const handleClick = (product, index) => {
    if (!user) {
      alert("Please login to add items to cart.");
      return;
    }

    const updatedAddedToCart = [...addedToCart];
    updatedAddedToCart[index] = true;
    setAddedToCart(updatedAddedToCart);

    addDocument({ ...product, uid: user.uid })
      .catch((err) => {
        console.log(err);
        alert("Couldn't add to cart");
        updatedAddedToCart[index] = false;
        setAddedToCart(updatedAddedToCart);
      });

    setTimeout(() => {
      updatedAddedToCart[index] = false;
      setAddedToCart(updatedAddedToCart);
    }, 4000);
  };

  return (
    <div className="rtdMain">
      {products.map((product, index) => (
        <div className="eachRtdItem" key={index}>
          <img src={product.imgSrc} className="beverageImg" alt={product.itemName} />
          <p className="beverageTitle">{product.itemName}</p>
          <div className="twoPrices">
            <p className="prevPriceClass">₹ {product.prevPrice}</p>
            <p>₹ {product.price}</p>
          </div>
          <button
            className="addBtn"
            onClick={() => handleClick(product, index)}
            style={{ backgroundColor: addedToCart[index] ? "green" : color }}
          >
            {addedToCart[index] ? "ADDED TO CART" : "ADD"}
          </button>
        </div>
      ))}
      {response?.isPending && <Backdrop />}
    </div>
  );
}
