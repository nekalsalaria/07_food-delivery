import React, { useContext } from "react";
import Nav from "../components/Nav";
import categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross1 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


const Home = () => {
  const { cate, setCate, input,showCart,setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category.toLowerCase() === "all") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(
        (item) => item.food_category.toLowerCase() === category.toLowerCase()
      );
      setCate(newList);
    }
  }

  let items = useSelector(state=>state.cart)
  let subtotal=items.reduce((total,item)=>total+item.qty*item.price,0)
  let deliveryfee=20
  let taxes=subtotal*0.5/100
  let total = Math.floor(subtotal+deliveryfee+taxes)
  


  return (
    <div className="bg-slate-200 w-full min-h-[100vh]">
      <Nav />
      {!input ? (
        <div className="w-full flex flex-wrap justify-center items-center gap-6 mt-4">
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => filter(item.name)}
              className="w-[140px] cursor-pointer transition-all duration-200 rounded-lg shadow-xl hover:bg-green-200 h-[150px] flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 bg-white"
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      ) : null}

      {/* Filtered Food Cards */}
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {cate.length > 0 ? (
          cate.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))
        ) : (
          <p className="text-gray-600 text-xl font-semibold mt-10">
            No items found in this category.
          </p>
        )}
      </div>

      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white
      shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":'translate-x-full'}`} >
        <header className="w-full flex justify-between items-center
        ">
          <span className="text-green-400 text-[18px] font-semibold">Order items</span>
          < RxCross1 className="text-green-400 w-[40px]
          hover:text-gray-600 h-[20px] cursor-pointer text-[18px] font-semibold" onClick={()=>{
            setShowCart(false)
          }}/>
        </header>
        {items.length>0?<>
        <div className="w-full mt-9 flex flex-col gap-8">
          {items.map((item)=>(
            <Card2 name={item.name} price={item.price}
            image={item.image} id={item.id} qty={item.qty}/>
          ))}
        </div>
        <div className="w-full border-t-2 border-b-2 border-gray-400
        mt-7 flex flex-col p-8 gap-2">
          <div className="w-full flex justify-between items-center
          ">
            <span className="text-l text-gray-600 font-semibold ">Subtotal</span>
            <span className="text-green-400 font-semibold text-lg">Rs {subtotal}/-</span>
          </div>
          <div className="w-full flex justify-between items-center
          ">
            <span className="text-l text-gray-600 font-semibold ">Delivery Fee</span>
            <span className="text-green-400 font-semibold text-lg">Rs {deliveryfee}/-</span>
          </div>
          <div className="w-full flex justify-between items-center
          ">
            <span className="text-l text-gray-600 font-semibold ">Taxes</span>
            <span className="text-green-400 font-semibold text-lg">Rs {taxes}/-</span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center p-9
          ">
            <span className="text-2xl text-gray-600 font-semibold ">Total</span>
            <span className="text-green-400 font-semibold text-2xl">Rs {total}/-</span>
          </div>
          <button className="w-[80%] p-3 bg-green-500 rounded-lg hover:bg-green-400 transition text-white font-semibold" onClick={()=>{
            toast.success("Order Placed")
          }}>Place Order</button>
          </>:
           <div className="text-center text-2xl text-green-500 font-semibold pt-5">Empty Card</div>}
       
      </div>
    </div>
  );
};

export default Home;