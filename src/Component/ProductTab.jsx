import React from 'react'

function ProductTab() {
  return (
    <div>
      <div>
        <Link to="product">product</Link>
      </div>
      <div>
        <Link to="productdetails">Product Details</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default ProductTab