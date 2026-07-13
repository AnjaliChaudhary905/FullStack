import { useQuery } from "@tanstack/react-query"
import { useParams, useNavigate } from "react-router"
import { getFood } from "../../services/food.services"

const MenuDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
  
    const { data, isPending, isError } = useQuery({
        queryKey: ['food', id],
        queryFn: () => getFood(id)
    })

    // 🚀 Extract the nested food object safely from the backend wrapper response
    const foodItem = data?.food;

    // 1. LOADING STATE
    if (isPending) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
        )
    }

    // 2. ERROR STATE (Check if data loaded, but foodItem doesn't exist)
    if (isError || !foodItem) {
        return (
            <div className="text-center py-12 max-w-md mx-auto px-4">
                <p className="text-red-500 font-medium mb-4">Failed to load the details for this item.</p>
                <button 
                    onClick={() => navigate('/menu')}
                    className="text-2xl"
                >
                    Back to Menu
                </button>
            </div>
        )
    }

    // 3. SUCCESS DATA STATE
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button 
                onClick={() => navigate('/menu')}
                className="mb-6 flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
                ← Back to Menu
            </button>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
                {/* Image Section */}
                <div className="h-64 sm:h-80 md:h-full w-full bg-gray-50 rounded-2xl overflow-hidden relative">
                    <img 
                        src={foodItem.image} 
                        alt={foodItem.name} 
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-gray-700 uppercase tracking-wider shadow-sm">
                        {foodItem.category}
                    </span>
                </div>

                {/* Info Section */}
                <div className="flex flex-col justify-between py-2">
                    <div>
                        <div className="flex justify-between items-start gap-4 mb-4">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                                {foodItem.name}
                            </h1>
                            <span className="text-2xl sm:text-3xl font-black text-orange-600 shrink-0">
                                ${foodItem.price}
                            </span>
                        </div>

                        <hr className="border-gray-100 my-4" />

                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Description</h3>
                        <p className="text-gray-600 leading-relaxed text-base">
                            {foodItem.description || "No description provided for this culinary selection."}
                        </p>
                    </div>

                    <div className="mt-8 md:mt-0 pt-4">
                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-2xl transition-colors duration-200 shadow-md shadow-orange-500/10 flex justify-center items-center gap-2">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuDetails