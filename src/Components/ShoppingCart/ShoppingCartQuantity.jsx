import React, { useContext, useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import MyContext from "../../ContextApi/myContext";
const ShoppingCartQuantity = ({ Itemkey, quantity }) => {
  const { cardItems, setCardItems, productQuantityManager } =
    useContext(MyContext);
  console.log(cardItems);
  const [quan, setQuan] = useState(quantity);

  const removeItem = (Itemkey) => {
    // Use the callback form of setCardItems to ensure you're working with the latest state
    setCardItems((prevCardItems) => {
      const updatedCardItems = prevCardItems.filter(
        (item) => item.key !== Itemkey
      );

      // Save the updated state to localStorage
      localStorage.setItem(
        "productQuantityManager",
        JSON.stringify(updatedCardItems)
      );

      return updatedCardItems;
    });
    console.log(productQuantityManager);
  };

  const updateQuan = (Itemkey, newQuantity) => {
    setCardItems((prevCardItems) => {
      const updatedCardItems = prevCardItems.map((item) => {
        if (item.key === Itemkey) {
          // Update the quantity for the specific item
          item.quantity = newQuantity;
        }
        return item;
      });
  
      // Save the updated card items to localStorage
      localStorage.setItem("productQuantityManager", JSON.stringify(updatedCardItems));
  
      // Return the updated card items
      return updatedCardItems;
    });
  };
  
  return (
    <div className="update-quantity w-75 d-flex  justify-content-between text-danger">
      <input
        type="number"
        pattern="[0-9]*"
        inputMode="numeric"
        value={quan}
        onChange={(e) => {
          setQuan(e.target.value);
        }}
        className="w-100  text-center border-info outline-0"
      />

      <button className=" ml-2 btn-success ">
        <FaFileUpload size={25} onClick={() => updateQuan(Itemkey,quan)} />
      </button>
      <button className="ml-5 btn-danger">
        <IoMdCloseCircle size={25} onClick={() => removeItem(Itemkey)} />
      </button>
    </div>
  );
};

export default ShoppingCartQuantity;
