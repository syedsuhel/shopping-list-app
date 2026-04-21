import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

function Cart() {
  //   const { quantity } = useParams();
  //   const { state } = useLocation();
  //   const [qty, setQty] = useState(Number(quantity));
  const { cartItems, updateQuantity, removeItem,clearCart,placeOrder } = useCart();

    const navigate = useNavigate();

  //   const product = state?.product;
  //   //   quatity counts
  //   const qtyPlus = () => {
  //     setQty((count) => Math.min(product.stock || 1, count + 1));
  //   };
  //   const qtyMinus = () => {
  //     setQty((count) => Math.max(1, count - 1));
  //   };

  //   const shpFees = product.fees ?? 7;

  //   const mrpPrice =
  //     product.price != null && product.discountPercentage != null
  //       ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
  //       : null;

  // total calculate
  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shippingFees = cartItems.length > 0 ? 7 : 0;

  const totalDiscount = cartItems.reduce(
    (sum, item) =>
      sum +
      (item.price / (1 - item.discountPercentage / 100) - item.price) *
        item.quantity,
    0,
  );

  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const total = subTotal + shippingFees;


  // ========== PLACE ORDER HANDLER ==========
  const handlePlaceOrder = () => {
    // Step 1: Create order object
    const orderData = {
      orderId: `ORD-${Date.now()}`,
      orderDate: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      deliveryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      items: cartItems,
      subtotal: subTotal.toFixed(2),
      shipping: shippingFees.toFixed(2),
      discount: totalDiscount.toFixed(2),
      total: (subTotal + shippingFees).toFixed(2),
      status: "Confirmed",
      address: "Chennai, Tamil Nadu - 600011",
      userName: "User@1",
    };

    // Step 2: Get all existing orders
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Step 3: Add new order
    allOrders.push(orderData);

    // Step 4: Save to localStorage
    localStorage.setItem("orders", JSON.stringify(allOrders));

    console.log("✅ Order Saved:", orderData);
    console.log("✅ Total Orders:", allOrders.length);

    // save for place order info
    placeOrder()

    // Step 5: Clear cart
    clearCart();

    // Step 6: Navigate to order page
    navigate("/order/");
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <i className="fa-solid fa-shopping-cart fa-3x text-muted mb-3"></i>
          <h2>Your cart is empty</h2>
          <p className="text-muted">Add some products to get started!</p>
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );

    
  }
 

  console.log(
    "cart item quantity:",
    cartItems.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-4">
          <i className="fa-solid fa-shopping-cart"></i> Shopping Cart (
          {cartItems.length} items)
        </h1>
        <div className="row">
          <div className="col-md-7 ">
            {/* change address and address title */}
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12 d-flex justify-content-between ">
                    <div>
                      <strong>Deliver To :</strong>
                    </div>
                    <div className="btn btn-primary">Change Address</div>
                  </div>
                </div>
                {/* user name  and address*/}
                <div className="row">
                  <strong>User@1</strong>
                  {/* user address */}
                  <div>
                    <p>Chennai, Tamil Nadu - 600011 </p>
                  </div>
                </div>
              </div>
            </div>

            {/* cart item start here v   */}
            {/*direct value by props drilling  */}
            {/* <div className="row"> */}
            {/* <div className="col-12"> */}

            {/* cart item details */}

            {/* <div className="row border-bottom border-top"> */}
            {/* cart item image */}
            {/* <div className="col-sm-3">
                    <img
                      style={{ width: "7em" }}
                      src={product.thumbnail}
                      alt={product.title}
                    />
                  </div> */}
            {/* /Cart Item infomation */}
            {/* <div className="col-sm-9">
                    <div className="fs-4 fw-bolder">{product.title}</div>
                    <div>{product.returnPolicy}</div>
                    <div>
                      $
                      <span className="ms-1 fw-bolder text-danger">
                        {product.price}
                      </span>
                    </div>
                  </div> */}
            {/* </div> */}
            {/* ->Cart Item qty and offer price */}
            {/* <div className="container-fluid my-3"> */}
            {/* <div className="card border-0 shadow-sm rounded-4 p-4"> */}
            {/* <div className="row align-items-center"> */}
            {/*  Quantity Section */}
            {/* <div className="col-md-4 text-center mb-4 mb-md-0">
                        <p className="text-muted fs-5 mb-2 small fw-semibold">
                          Quantity
                        </p>

                        <div className="d-inline-flex align-items-center bg-light border rounded-pill px-2 py-1 shadow-sm">
                          <button
                            onClick={qtyMinus}
                            className="btn btn-secondary active rounded-start-pill  px-1 py-0"
                            disabled={qty <= 1}
                          >
                            -
                          </button>

                          <span className="mx-2 fw-bold fs-5">{qty}</span>

                          <button
                            onClick={qtyPlus}
                            className="btn btn-secondary active rounded-end-pill  px-1 py-0"
                            disabled={qty >= product?.stock}
                          >
                            +
                          </button>
                        </div> */}

            {/* Stock Warning */}
            {/* {product?.stock < 5 && (
                          <div className="text-danger small mt-2">
                            Only {product.stock} left!
                          </div>
                        )} */}
            {/* </div> */}

            {/* Price Section */}
            {/* <div className="col-md-8"> */}
            {/* <div className="d-flex justify-content-md-end justify-content-center align-items-center flex-wrap gap-2"> */}
            {/* Label */}
            {/* <span className="text-muted small">Price</span> */}

            {/* New Price */}
            {/* <span className="text-danger fw-bold fs-2">
                            ${product?.price}
                          </span> */}

            {/* Old Price */}
            {/* {mrpPrice && (
                            <span className="text-muted text-decoration-line-through fs-6">
                              {mrpPrice}
                            </span>
                          )} */}

            {/* Discount Badge */}
            {/* <span className="badge bg-success px-3 py-2 rounded-pill">
                            {product?.discountPercentage}% OFF
                          </span> */}
            {/* </div> */}

            {/* 💡 Savings + Total */}
            {/* <div className="text-md-end text-center mt-2"> */}
            {/* Total */}
            {/* <div className="fw-semibold">
                            Total:{" "}
                            <span className="text-dark fs-5">
                              ${(product?.price * qty).toFixed(2)}
                            </span>
                          </div> */}

            {/* Savings */}
            {/* {product?.discountPercentage > 0 && (
                            <small className="text-success">
                              You save{" "}
                              {((mrpPrice || 0) - product.price).toFixed(2)} per
                              item
                            </small>
                          )} */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* cart items end here */}

            {/* Globle state cart start here */}
            <div
              style={{
                maxHeight: "26rem", // Height limit
                overflowY: "auto", // Vertical scroll
                overflowX: "hidden", // No horizontal scroll
                paddingRight: "10px", // Space for scrollbar
                border: "1px solid #dee2e6",
                borderRadius: "8px",
                padding: "15px",
              }}
            >
              {cartItems.map((item) => (
                <div key={item.id} className="card mb-3 shadow-sm">
                  <div className="row g-0 border-bottom border-top p-3">
                    {/* Product Image */}
                    <div className="col-sm-3">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        style={{ width: "7em", objectFit: "cover" }}
                      />
                    </div>

                    {/* Product Info */}
                    <div className="col-sm-9">
                      <div className="fs-4 fw-bolder">{item.title}</div>
                      <div className="text-muted small">{item.brand}</div>
                      <div>
                        $
                        <span className="ms-1 fw-bolder text-danger">
                          {item.price}
                        </span>
                      </div>
                      <div className="text-muted small">
                        {item.returnPolicy}
                      </div>
                    </div>
                  </div>

                  {/* Quantity and Price Card */}
                  <div className="container-fluid my-3">
                    <div className="card border-0 shadow-sm rounded-4 p-4">
                      <div className="row align-items-center">
                        {/* Quantity Section */}
                        <div className="col-md-4 text-center mb-4 mb-md-0">
                          <p className="text-muted fs-5 mb-2 small fw-semibold">
                            Quantity
                          </p>

                          <div className="d-inline-flex align-items-center bg-light border rounded-pill px-2 py-1 shadow-sm">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="btn btn-secondary active rounded-start-pill px-1 py-0"
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>

                            <span className="mx-2 fw-bold fs-5">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="btn btn-secondary active rounded-end-pill px-1 py-0"
                              disabled={item.quantity >= item.stock}
                            >
                              +
                            </button>
                          </div>

                          {/* Stock Warning */}
                          {item.stock < 5 && (
                            <div className="text-danger small mt-2">
                              Only {item.stock} left!
                            </div>
                          )}
                        </div>

                        {/* Price Section */}
                        <div className="col-md-8">
                          <div className="d-flex justify-content-md-end justify-content-center align-items-center flex-wrap gap-2">
                            {/* Label */}
                            <span className="text-muted small">Price</span>

                            {/* New Price */}
                            <span className="text-danger fw-bold fs-2">
                              ${item.price}
                            </span>

                            {/* Old Price */}
                            {item.discountPercentage > 0 && (
                              <span className="text-muted text-decoration-line-through fs-6">
                                $
                                {(
                                  item.price /
                                  (1 - item.discountPercentage / 100)
                                ).toFixed(2)}
                              </span>
                            )}

                            {/* Discount Badge */}
                            <span className="badge bg-success px-3 py-2 rounded-pill">
                              {item.discountPercentage}% OFF
                            </span>
                          </div>

                          {/* Savings + Total */}
                          <div className="text-md-end text-center mt-2">
                            {/* Total */}
                            <div className="fw-semibold">
                              Total:{" "}
                              <span className="text-dark fs-5">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>

                            {/* Savings */}
                            {item.discountPercentage > 0 && (
                              <small className="text-success">
                                You save $
                                {(
                                  (item.price /
                                    (1 - item.discountPercentage / 100) -
                                    item.price) *
                                  item.quantity
                                ).toFixed(2)}{" "}
                                on this item
                              </small>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <div className="p-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fa-solid fa-trash"></i> Remove from Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Globle state cart end here */}
          </div>
          {/* Right side Item Price Details */}

          <div className="col-md-5 ">
            {/* price details tray */}
            <div className="container border rounded">
              {/* MRP */}
              <div className="row my-1 mx-3 fs-3">
                <strong className="col-6">MRP</strong>
                <div className="col-6 text-end">
                  <small> $ </small>
                  <span className="fw-bolder">
                    {cartItems
                      .reduce(
                        (sum, item) =>
                          sum +
                          (item.price / (1 - item.discountPercentage / 100)) *
                            item.quantity,
                        0,
                      )
                      .toFixed(2)}
                  </span>
                </div>
              </div>
              {/* Fees */}
              <div className="row my-1 mx-3 fs-3">
                <strong className="col-6">Shipping Fees</strong>
                <div className="col-6 text-end">
                  <small> $ </small>
                  <span className="fw-bolder">{shippingFees}</span>
                </div>
              </div>
              {/* Discount  */}
              <div className="row my-1 mx-3 fs-3">
                <strong className="col-6">Discount</strong>
                <div className="col-6 text-end">
                  <small> $ </small>
                  <span className="text-success fw-bolder">
                    {/* {(
                      product.price / (1 - product.discountPercentage / 100) -
                      product.price
                    ).toFixed(2)} */}
                    {totalDiscount.toFixed(2)}
                  </span>
                  {/* <small
                    className="text-danger fw-bold"
                    style={{ fontSize: ".5em" }}
                  >
                    -{product.discountPercentage}%
                  </small> */}
                </div>
              </div>

              {/* Total Amout  */}
              <div className="row my-1 mx-3 fs-3">
                <strong className="col-6">Total Amount</strong>
                <div className="col-6 text-end">
                  <small
                    className="fw-bold text-warning-emphasis"
                    style={{ fontSize: ".5em" }}
                  >
                    {totalQty}
                    {" x "}
                  </small>
                  <small> $ </small>
                  <span className="fw-bolder">
                    {/* {(product.price * qty + shpFees).toFixed(2)} */}
                    {total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Total Amout saving */}
              <div className="row my-1 mx-3 fs-3">
                <strong className="col-6 text-danger">Total Saving</strong>
                <div className="col-6 text-end">
                  <small> $ </small>
                  <span className="fw-bolder text-success">
                    {/* {(
                      Number(mrpPrice) * qty +
                      shpFees -
                      (product.price * qty + shpFees)
                    ).toFixed(2)} */}
                    {totalDiscount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            {/* place order */}
            <div className="container h-25 mt-1 shadow-sm p-3 mb-5 bg-body-tertiary rounded border">
              <div className="row my-1 mx-3 fs-3 ">
                {/* price */}
                <div className="col-6">
                  <small className="fw-bold"> $ </small>
                  <span className="fw-bold text-success">
                    {/* {(product.price * qty + shpFees).toFixed(2)} */}
                    {total.toFixed(2)}
                  </span>
                </div>
                {/* place button */}
                <div className="col-6 text-end ">
                  {/* <Link to={`/order/`} state={{ product: product }}> */}
                  
                    <button className="btn btn-warning fw-bold px-5 " onClick={handlePlaceOrder}>
                      Place Order
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
