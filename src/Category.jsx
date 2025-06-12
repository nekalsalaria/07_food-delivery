import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { GiNoodles } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";

const categories = [
    {
        id: 1,
        name: "All",
        icon: <TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id: 2,
        name: "Breakfast",
        icon: <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id: 3,
        name: "Soups",
        icon: <LuSoup className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id: 4,
        name: "Pasta",
        icon: <GiNoodles className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id: 6,
        name: "Pizza",
        icon: <FaPizzaSlice className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id: 7,
        name: "Burger",
        icon: <GiHamburger className="w-[60px] h-[60px] text-green-600" />
    }
]

export default categories;