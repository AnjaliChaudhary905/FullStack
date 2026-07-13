import { useDispatch, useSelector } from "react-redux"
import { add, remove, sub } from "../../redux/features/cartSlice";
import { createOrder } from "../../services/order.services";
import { useNavigate } from "react-router";

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // 1. DYNAMIC PERSISTENCE LOOKUP: Reads state user to fetch the proper isolated cart
    const user = useSelector((state) => state.cart.user);
    const cart = useSelector((state) => state.cart.cartItems) || 
                 JSON.parse(localStorage.getItem(user?._id ? `cart_${user._id}` : 'cart')) || 
                 [];

    const total_amount = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)

    const handlePayment = async () => {
        const foods = cart.map((food) => ({
            foodId: food._id,
            quantity: food.quantity,
        }));

        try {
            const res = await createOrder(foods);
            
            if (res && res.success) {
                navigate("/payment", {
                    state: { total_amount, order_id: res?.order?._id },
                });
            }
        } catch {
            console.log("Catch block triggered. Moving user to login page.");
            navigate("/login");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-6">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

            {cart.length > 0 ? (
                <div className="space-y-4">
                    {cart.map((item) => (
                        <div
                            key={item._id || item.name}
                            className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 gap-4 transition hover:shadow-md"
                        >
                            {/* Product Info Section */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 flex-1 w-full">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded-lg bg-gray-50 shrink-0"
                                />
                                <div className="text-center sm:text-left space-y-1">
                                    {/* Brand Themed Category Badge */}
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0C6967] bg-[#0C6967]/10 px-2 py-0.5 rounded">
                                        {item.category}
                                    </span>
                                    <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                                    <p className="text-sm text-gray-500 line-clamp-2 max-w-md">{item.description}</p>
                                    <p className="text-base font-bold text-gray-900 pt-1">${item.price}</p>
                                </div>
                            </div>

                            {/* Actions Section (Quantity & Remove) */}
                            <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0">
                                {/* Quantity Controls */}
                                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                                    <button 
                                        onClick={() => { dispatch(sub(item)) }}
                                        className="px-3 py-1.5 hover:bg-gray-200 text-gray-600 font-medium transition active:scale-95"
                                    >
                                        -
                                    </button>
                                    <span className="px-3 text-sm font-semibold text-gray-800 min-w-[2rem] text-center">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() => { dispatch(add(item)) }}
                                        className="px-3 py-1.5 hover:bg-gray-200 text-gray-600 font-medium transition active:scale-95"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Remove Button */}
                                <button
                                    onClick={() => { dispatch(remove(item)) }}
                                    className="text-sm font-medium text-red-500 hover:text-red-700 transition px-2 py-1 rounded hover:bg-red-50 active:scale-95"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Total Summary Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-6 pt-6 mt-6 border-t border-gray-100">
                        <div className="text-right space-y-0.5">
                            <span className="text-sm font-medium text-gray-400 block">Cart Total</span>
                            <span className="text-2xl font-extrabold text-gray-900 block">${total_amount}</span>
                        </div>
                        <button
                            onClick={handlePayment}
                            className="w-full sm:w-auto px-8 py-3.5 bg-[#0C6967] hover:bg-[#0a5755] text-white font-semibold text-sm rounded-full shadow-sm transition-all duration-150 focus:outline-none active:scale-[0.98] cursor-pointer"
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            ) : (
                /* Styled Empty State Container */
                <div className="flex flex-col items-center justify-center py-16 px-4 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50 max-w-md mx-auto my-4 text-center">
                    <p className="text-lg font-bold text-gray-800 mb-1">
                        Your cart is empty
                    </p>
                    <p className="text-sm text-gray-500 mb-6 max-w-xs">
                        Looks like you haven't added anything to your order yet.
                    </p>
                    <button
                        onClick={() => navigate("/menu")}
                        className="w-full sm:w-auto px-8 py-3.5 bg-[#0C6967] hover:bg-[#0a5755] text-white font-semibold text-sm rounded-full shadow-sm transition-all duration-150 focus:outline-none active:scale-[0.98] cursor-pointer"
                    >
                        Add items in your cart
                    </button>
                </div>
            )}
        </div>
    )
}

export default Cart