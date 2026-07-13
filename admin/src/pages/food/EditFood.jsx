import { useState } from "react";
import { Save, Plus, Upload, X, ArrowLeft } from "lucide-react";
import {  editFood } from "../../services/food.services"; // Make sure editFood is exported from here
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

const EditFood = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  
  // Extract food data passed via react-router state (if any)
  const food = location?.state;
  // If a food object exists in state, we are in Edit Mode; otherwise, we are in Add Mode
  const isEditMode = !!food;

  // 1. ALL HOOKS AT THE TOP 🔝
  const [foodData, setFoodData] = useState({
    name: food?.name || "",
    description: food?.description || "",
    price: food?.price || "",
    category: food?.category || "",
    image: food?.image || null, 
  });

  const [imagePreview, setImagePreview] = useState(food?.image || null);

  // Unified Mutation handling both POST (Add) and PUT/PATCH (Edit)
  const foodMutation = useMutation({
    mutationFn: (data) => {
      if (isEditMode) {
        return editFood(food._id, data); 
      }
     
    },
    onSuccess: (data) => {
      toast.success(
        data?.message || (isEditMode ? "Food updated successfully!" : "Food added successfully!")
      );
      queryClient.invalidateQueries({ queryKey: ["foods"] });
      navigate('/admin/food-management');
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  });

  // 2. FORM HANDLERS
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFoodData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoodData((prev) => ({ ...prev, image: file })); 
      setImagePreview(URL.createObjectURL(file)); 
    }
  };

  const removeImage = () => {
    setFoodData((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const formData = new FormData();
    formData.append("name", foodData.name);
    formData.append("description", foodData.description);
    formData.append("price", foodData.price);
    formData.append("category", foodData.category);
    formData.append("image", foodData.image);

    // ✅ Fire mutation lifecycle instead of calling service function directly
    foodMutation.mutate(formData);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12">
      <div className="flex items-center gap-3">
        <button 
          type="button"
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-zinc-100 rounded-xl transition-colors text-zinc-500 hover:text-zinc-900"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          {/* Dynamic Header Titles */}
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            {isEditMode ? "Edit Food Item" : "Add New Food Item"}
          </h1>
          <p className="text-sm text-zinc-500">
            {isEditMode 
              ? "Modify the form fields below to update your culinary listing." 
              : "Create a new culinary offering for your digital restaurant menu."}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-zinc-200/80 rounded-2xl p-6 shadow-sm space-y-6">
        
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-zinc-700 block">Item Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={foodData.name}
            onChange={handleInputChange}
            placeholder="e.g. Artisanal Pepperoni Pizza"
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/30 text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="desc" className="text-sm font-semibold text-zinc-700 block">Description</label>
          <textarea
            id="desc"
            name="description"
            value={foodData.description}
            onChange={handleInputChange}
            rows="3"
            placeholder="Describe ingredients..."
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/30 text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-semibold text-zinc-700 block">Category</label>
            <select
              id="category"
              name="category"
              value={foodData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/30 text-sm text-zinc-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all cursor-pointer"
              required
            >
              <option value="" disabled>Select item category</option>
              <option value="appetizers">Appetizers</option>
              <option value="main-course">Main Course</option>
              <option value="desserts">Desserts</option>
              <option value="beverages">Beverages</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="price" className="text-sm font-semibold text-zinc-700 block">Price ($)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={foodData.price}
              onChange={handleInputChange}
              step="0.01"
              min="0"
              placeholder="0.00"
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/30 text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-700 block">Item Image</label>
          {!imagePreview ? (
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-zinc-200 hover:border-emerald-500/60 bg-zinc-50/50 hover:bg-emerald-50/10 rounded-2xl cursor-pointer transition-all group">
              <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-zinc-100 mb-3 text-zinc-400 group-hover:text-emerald-600 transition-colors">
                  <Upload className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-zinc-700">Click to upload item image</p>
                <p className="text-xs text-zinc-400 mt-1">PNG, JPG or JPEG up to 5MB</p>
              </div>
              {/* Not required in edit mode, as previous image is maintained if untouched */}
              <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} required={!isEditMode} />
            </label>
          ) : (
            <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-inner">
              <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-3 right-3 p-2 bg-zinc-900/80 hover:bg-zinc-900 text-white rounded-xl backdrop-blur-sm transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-3 pt-2 border-t border-zinc-100">
          <button 
            type="button" 
            onClick={() => navigate(-1)}
            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-zinc-700 hover:bg-zinc-50 border border-zinc-200 transition-colors"
          >
            Cancel
          </button>
          
          <button 
            type="submit" 
            disabled={foodMutation.isPending}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-md active:scale-[0.98] disabled:opacity-50"
          >
            {isEditMode ? <Save className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {foodMutation.isPending 
              ? (isEditMode ? "Saving changes..." : "Publishing...") 
              : (isEditMode ? "Save Changes" : "Publish Dish")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditFood;