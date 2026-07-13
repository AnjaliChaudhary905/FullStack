import { useQuery } from "@tanstack/react-query"
import { getFoods } from "../../services/food.services"
import toast from "react-hot-toast"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { add } from "../../redux/features/cartSlice"


const Menu = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["foods"], // Dynamic query key array
    queryFn: getFoods,
  })

  const navigate = useNavigate()
  // const items = useSelector((state) => state.cart.cartItems );
  // console.log(items)
  
  const user = useSelector((state) => state.auth?.user?.email);
  console.log(user)
  const dispatch = useDispatch()


  // Display success message safely via useEffect side effect
  useEffect(() => {
    if (data?.message) {
      toast.success(data.message)
    }
  }, [data?.message])

  // 1. SAFELY HANDLE LOADING STATE FIRST (Prevents reading properties of undefined)
  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  // 2. SAFELY HANDLE ERROR STATE
  if (isError) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 font-medium">Error loading menu: {error?.message || "Something went wrong"}</p>
      </div>
    )
  }

  // 3. SECURE EXTRACT: Safely fallback to empty array if backend has no records
  const foods = data?.foods || []

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Delicious Menu</h1>

      {foods.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foods.map((food) => (
            <div
              key={food._id || food.name}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Container with Badges */}
              <div className="h-48 w-full bg-gray-100 overflow-hidden relative">
                <img
                  onClick={() => {
                    navigate(`/menu/${food._id}`)
                  }}
                  src={food.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60"}
                  alt={food.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full text-gray-700 uppercase tracking-wider">
                  {food.category}
                </span>
              </div>

              {/* Details and Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-bold text-gray-800 line-clamp-1">{food.name}</h2>
                  <span className="text-lg font-extrabold text-orange-600">${food.price}</span>
                </div>

                <p className="text-sm text-gray-500 line-clamp-2 min-h-10 mb-4">
                  {food.description || "No description available."}
                </p>


                <button
                  onClick={() => {
                    dispatch(add({...food,user}))
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-200 text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">No food items found matching this menu.</p>
        </div>
      )}
    </div>
  )
}

export default Menu