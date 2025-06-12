import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { MdFastfood, MdOutlineShoppingBag } from "react-icons/md";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

const Nav = () => {
  const { input, setInput, setCate,showCart,setShowCart } = useContext(dataContext);

  useEffect(() => {
    const newlist = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newlist);
  }, [input]);

  let items = useSelector(state=>state.cart)

  return (
    <div className="w-full md:px-8 h-[100px] flex justify-between items-center px-8">
      <div className="flex justify-center items-center w-[60px] h-[60px] bg-white rounded-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-[45%] md:w-[70%] h-[60px] bg-white flex items-center px-5 gap-[20px] rounded-md shadow-md"
      >
        <FaSearch className="text-green-500 w-[20px] h-[20px]" />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="w-full outline-none md:text-[20px] text-[16px]"
          type="text"
          placeholder="Search here..."
        />
      </form>
      <div className="flex justify-center items-center w-[60px] h-[60px] bg-white rounded-md shadow-xl relative cursor-pointer" onClick={()=>{
        setShowCart(true)
      }}>
        <span className="absolute text-[18px] top-0 right-2 text-green-500 font-bold">
          {items.length}
        </span>
        <MdOutlineShoppingBag className="w-[30px] h-[30px] text-green-500 " />
      </div>
    </div>
  );
};

export default Nav;
