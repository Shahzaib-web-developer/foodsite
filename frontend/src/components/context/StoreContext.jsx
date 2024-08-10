// import axios from "axios";
// import { createContext, useEffect, useState } from "react";
// // import { food_list } from '../../assets/assets.js'
// export const StoreContext = createContext(null)
// const  StoreContextProvider = (props) =>{

//     const [cartItems, setCartItems] = useState({});
//     const url = "http://localhost:4000"
//     const [token, setToken] = useState("")
//     const [food_list, setFoodList] = ([])
//     const addToCart = (itemId) => {
//       setCartItems((prev) => ({
//         ...prev,
//         [itemId]: (prev[itemId] || 0) + 1,
//       }));
//     };
//     const removeFromCart = (itemId) => {
//       setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }
    
    
//     const getTotalCartAmount = ()=> {
//       let totalAmount = 0 ;
//       for(const item in cartItems)
//       {
//         if(cartItems[item]>0){
//           let itemInfo = food_list.find((product)=>product._id === item)
//           totalAmount += itemInfo.price*cartItems[item]
//         }
//       }
//       return totalAmount;

//     }

//     const fetchFoodList = async ()=>{
//       const response = await axios.get(url+"api/food/list")
//       setFoodList(response.data.data)
//     }


//     useEffect(()=>{
//       async function loadData() {
//         await fetchFoodList()
//         if (localStorage.getItem("token")) {
//           setToken(localStorage.getItem("token"))
//         }
//       }
//       loadData()
//     },[])

//     const contextValue = {
//         food_list,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         url,
//         token,
//         setToken
//     }
//     return(
     
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }
// export default StoreContextProvider



import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000/";
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

    const addToCart =async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
        if (token) {
            await axios.post(url+"api/cart/add" , {itemId},{headers:{token}})
        }
    };

    const removeFromCart =async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0,
        }));
        if (token) {
            await axios.post(url+"api/cart/remove", {itemId},{headers:{token}})
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + "api/food/list");
            setFoodList(response.data.data);
        } catch (error) {
            console.error("Error fetching food list", error);
        }
    };

    const loadCartData = async (token)=>{
        const response = await axios.post(url+"api/cart/get", {},{headers:{token}})
        setCartItems(response.data.cartData) 
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
                
            }
        }
        loadData();
    }, []);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
