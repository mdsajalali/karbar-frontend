import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const userId = "12345"; // Replace with dynamic user ID

  const fetchCartItems = async () => {
    try {
      const response = await fetch(`http://localhost:5000/cart/${userId}`);
      const data = await response.json();

      if (response.ok) {
        setCartItems(data);
        const total = data.reduce((total, item) => {
          const productPrice = item.product[0]?.price || 0;
          return total + productPrice * item.quantity;
        }, 0);
        setTotalCartPrice(total);
      } else {
        console.error("Error fetching cart items:", data.error);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="mx-auto max-w-[1500px]">
      <section className="py-16 md:py-20">
        <div className="container">
          <h3 className="mb-2.5 text-xl font-semibold text-[#222]">
            Your Cart Items
          </h3>
          <div className="border">
            {/* Table Header */}
            <div className="hidden grid-cols-[auto_1fr_auto_auto_auto_auto] gap-10 border-b bg-[#f7f7f7] px-5 py-4 text-center text-[17px] font-semibold lg:grid">
              <h5 className="w-[100px]">Image</h5>
              <h5>Product Name</h5>
              <h5 className="w-[120px]">Price</h5>
              <h5 className="w-32">Qty</h5>
              <h5 className="w-32">Subtotal</h5>
              <h5 className="w-20">Action</h5>
            </div>

            {/* Cart Items */}
            {cartItems.map((cartItem) => (
              <div
                key={cartItem._id}
                className="flex flex-col items-center gap-3 border-b p-5 last:border-b-0 lg:grid lg:grid-cols-[auto_1fr_auto_auto_auto_auto] lg:gap-10"
              >
                <img
                  src={cartItem.product[0]?.image}
                  alt={cartItem.product[0]?.name}
                  className="aspect-[1/1.3] w-[100px] object-cover"
                />
                <h4 className="mx-auto max-w-[280px] text-center font-medium">
                  {cartItem.product[0]?.name}
                </h4>
                <p className="w-[120px] text-center font-medium">
                  ${cartItem.product[0]?.price}
                </p>
                <div className="flex w-32 items-center border">
                  <button className="flex h-[54px] w-[38px] items-center justify-center text-gray-500">
                    -
                  </button>
                  <span className="block min-w-12 text-center text-lg font-semibold">
                    {cartItem.quantity}
                  </span>
                  <button className="flex h-[54px] w-[38px] items-center justify-center text-gray-500">
                    +
                  </button>
                </div>
                <p className="w-32 text-center font-medium">
                  ${(cartItem.product[0]?.price * cartItem.quantity).toFixed(2)}
                </p>
                <div className="w-20">
                  <button className="mx-auto flex size-9 items-center justify-center rounded-full border duration-300 hover:bg-[#3abff8] hover:text-white">
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <div className="block bg-[#f2f2f2] px-5 py-3.5 font-semibold text-[#1f1f1f] duration-300 hover:bg-[#3abff8] hover:text-white">
              Continue Shopping
            </div>

            <button className="block bg-[#f2f2f2] px-5 py-3.5 font-semibold text-[#1f1f1f] duration-300 hover:bg-[#3abff8] hover:text-white">
              Clear Cart
            </button>
          </div>

          {/* Cart Summary */}
          <div className="mt-8 flex flex-col items-start gap-x-8 gap-y-4 md:flex-row">
            <div className="flex w-full">
              <input
                className="border-primary h-auto w-[182px] rounded-none border border-r-0 px-5 py-4 text-base outline-none placeholder:text-gray-400 sm:min-w-[200px] md:max-w-[260px]"
                placeholder="Enter coupon code..."
              />
              <button className="block bg-[#3abff8] px-7 font-semibold text-white duration-300 hover:bg-[#3abff8]/50 sm:text-nowrap md:text-wrap lg:text-nowrap">
                Apply coupon
              </button>
            </div>
            <div className="w-full md:max-w-[480px]">
              <div className="bg-[#f2f2f2] px-5 py-3.5">
                <h3 className="text-lg font-semibold">Cart Totals</h3>
              </div>
              <div className="flex justify-between gap-10 border-b px-5 py-3.5">
                <h4 className="font-semibold">Subtotal:</h4>
                <p className="font-medium text-[#848484]">${totalCartPrice}</p>
              </div>
              <div className="flex justify-between gap-10 px-5 py-3.5">
                <h4 className="font-semibold">Order Total:</h4>
                <p className="font-medium text-[#1f1f1f]">${totalCartPrice}</p>
              </div>

              <button className="block w-full bg-[#3abff8] py-[18px] font-semibold text-white duration-300 hover:bg-[#3abff8]/50">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
