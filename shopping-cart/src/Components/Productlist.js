import '../App.css'

function Productlist ({product , addToCart}) {
  return (
      <div className='flex'>
        {
          product.map((productItem,productIndex) => {
            return(
              <div style={{width:'33%'}}>
                <div className='product-item'>
                    <img src={productItem.url} width={"100%"} />

                        {/* getting name , seller and price from the array in app.js file */}
                        <p>{productItem.name} | {productItem.category} </p>

                        <p> {productItem.seller} </p>

                        <p> Rs. {productItem.price} /-</p>

                        <button style={{cursor:'pointer'}} onClick={() => addToCart(productItem)}>Add To Cart</button>
                  </div>
              </div>
            )
          })
        }
      </div>
  )
}


export default Productlist
