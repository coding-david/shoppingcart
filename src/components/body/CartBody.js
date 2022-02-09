import React,{useState,useEffect} from 'react';
import CartTable from './CartTable'
import AddItem from './AddItem'

function CartBody() {

  const PRODUCT_URL = `http://localhost:8082/api/products`;
  const CART_URL = `http://localhost:8082/api/items`;

  const [products,setProducts] = useState([])
  const [cartList,setCartList] = useState([])
  const [fetchError,setFetchError] = useState(null);

  useEffect(() => {
      fetchFunction(PRODUCT_URL,setProducts);
      fetchFunction(CART_URL,setCartList);
      
  },[PRODUCT_URL,CART_URL])

  const fetchFunction = async (url,setFunc) =>{
    try{
        const response = await fetch(url);
        if(!response.ok) throw Error('Did not received expected data');
        const listProducts = await response.json();
        setFunc(listProducts);
        setFetchError(null);
    }catch(err){
        setFetchError(err.message);
    }
}

  return (
    <div> 
    <h2>AWESOME PRODUCTS!</h2>
    {!fetchError && <CartTable cartList={cartList} products={products} />}
    {/* <h4>Total Price: ${this.state.totalPrice}</h4> */}
    {!fetchError && <AddItem products={products}/>}
    </div>
);
}

export default CartBody;
