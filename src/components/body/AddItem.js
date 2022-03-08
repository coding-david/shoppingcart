import React,{useState} from 'react';

const AddItem = ({products,nextID,createItem}) =>{

  const [item,setItem] = useState({});

  const onChangeSetItem = e => {
    e.preventDefault();
    setItem(prevItem => ({...prevItem,[e.target.name]:e.target.value}));
}

const createComboBoxItem = (pro) => (
  <option value={pro.name} key={pro.id}>
    {pro.name}
  </option>
);


const addNewCartItem = (e) => {
  e.preventDefault();
  let product_id = products.find(product => product.name === item.product).id;
  let quantity = item.quantity;
  let id = nextID;
  let newItem = {product_id: product_id, quantity: quantity, id: id}
  console.log(newItem);
  createItem(newItem);
}

  return (
    <form>
      <h4>Quantity</h4>
      <input name="quantity" onChange={onChangeSetItem}  />
      <h4>Product</h4>
      <select
        className="form-select"
        aria-label="Default select example"
        name="product"
        onChange={onChangeSetItem}
      >
      {products.map(pro => createComboBoxItem(pro))}    
      </select>
      <button className="btn-dark btn-primary" onClick={addNewCartItem}>
        Submit
      </button>
    </form>
  );
}

export default AddItem;
