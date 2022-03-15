function Products(props) {
  const products = props.products
  return (
    <div className="products">
      {products.map((product, index) => {
        return (
          <div key={index}>
            <h3>{product.name}</h3>
            <p>{product.amount}</p>
            <img src={product.image} />
          </div>
        )
      })}
    </div>
  )
}

export default Products
