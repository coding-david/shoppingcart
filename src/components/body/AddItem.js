import React,{useState} from 'react';

const AddItem = ({products}) =>{

  const [item,setItem] = useState({});

  const onChangeSetItem = e => {
    e.preventDefault();
    console.log(`${e.target.name}:${e.target.value}`);
    setItem(prevItem => ({...prevItem,[e.target.name]:e.target.value}));
}

const createComboBoxItem = (pro) => (
  <option value={pro.name} key={pro.id}>
    {pro.name}
  </option>
);


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
      <button className="btn-dark btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddItem;
