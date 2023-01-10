const GroceryItem = ({ele}) => {
    return (
      <div className = 'each'>
      <br/>
    <h2>{ele.item}</h2>
    <h3>{ele.brand}</h3>
    <h5>{ele.units}</h5>
    <h4>Quantity: {ele.quantity}</h4>
  <h4>Purchased?:</h4> 
      {ele.isPurchased === true ? 
      (<input type="checkbox" checked></input>) : (<input type="checkbox"></input>)}
  </div>
    )
  }
  
  export default GroceryItem