import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteFood, getFoods } from "../services/food.services"
import { Edit2, Trash2, Plus } from "lucide-react"
import { useNavigate } from "react-router"
import toast from "react-hot-toast"

const FoodManagement = () => {
  const navigate = useNavigate()
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["foods"],
    queryFn: getFoods,
  })

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteFood(id),

    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["foods"])
    },

    onError: (error) => {
      toast.error(error);
    }

  })
  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="p-4 bg-rose-50 border border-rose-200 text-rose-600 rounded-xl text-sm">
        Error loading foods: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    )
  }

  const hasFoods = data?.foods && data.foods.length > 0

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Food Menu</h1>
          <p className="text-sm text-zinc-500">Manage your restaurant items, categories, and pricing.</p>
        </div>
        <button
          onClick={() => { navigate('/add-food') }}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-md shadow-sm shadow-emerald-600/10 active:scale-[0.98]">
          <Plus className="h-4 w-4" />
          Add Food Item
        </button>
      </div>

      {/* Main Container */}
      {hasFoods ? (
        <div className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50/80 border-b border-zinc-200/80 text-xs font-bold text-zinc-500 tracking-wider uppercase">
                  <th className="px-6 py-4">Item details</th>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-sm text-zinc-700">
                {data.foods.map((food) => (
                  <tr key={food._id} className="hover:bg-emerald-50/20 transition-colors group">
                    {/* Food Image & Name */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {food.image ? (
                          <img
                            src={food.image}
                            alt={food.name}
                            className="h-12 w-12 rounded-xl object-cover border border-zinc-200 shadow-sm flex-shrink-0 bg-zinc-50"
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold flex items-center justify-center flex-shrink-0 text-base">
                            {food.name?.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <span className="font-semibold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                          {food.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-zinc-500 max-w-xs truncate">{food.description}</td>

                    {/* Simplified Uniform Badge */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200/60">
                        {food.category}
                      </span>
                    </td>

                    <td className="px-6 py-4 font-bold text-emerald-600">
                      ${Number(food.price).toFixed(2)}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => {
                            navigate('/edit-food', { state: food })
                          }}
                          className="p-2 text-zinc-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all" title="Edit">
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => {
                            deleteMutation.mutate(food._id);
                          }}
                          className="p-2 text-zinc-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all" title="Delete">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center border border-dashed border-zinc-200 rounded-2xl p-16 text-center bg-white">
          <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 text-xl">
            🍱
          </div>
          <h3 className="text-sm font-semibold text-zinc-900">No food items found</h3>
          <p className="text-xs text-zinc-400 max-w-xs mt-1">Get started by creating your very first dish configuration.</p>
        </div>
      )}
    </div>
  )
}

export default FoodManagement