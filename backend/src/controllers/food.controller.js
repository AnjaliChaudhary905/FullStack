import foodModel from "../models/food.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

export const addFood = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        console.log(req.file)
        let url = null;

        if (req.file) {
            const res = await uploadOnCloudinary(req.file.path);
            url = res.secure_url;

        }
        const food = await foodModel.create({
            name,
            description,
            price,
            category,
            image: url,
        });
        res.status(201).json({
            message: "food added",
            success: true,
            food,
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "internal server error",
            success: false,
            error: error.message || error,
        })
    }
}

export const getFoods = async (req, res) => {
    try {
        const foods = await foodModel.find();
        if (foods.length == 0) {
            return res.status(400).json({
                message: "foods not found",
                success: false,
                foods,
            })
        }
        res.status(200).json({
            message: "Foods fetched",
            success: true,
            foods,
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            success: false,
            error,
        })
    }
}

export const getFoodById = async (req, res) => {
    try {
        const id = req.params.id;

        const food = await foodModel.findById(id);


        if (!food) {
            return res.status(404).json({
                message: "foods not found",
                success: false,

            })
        }
        res.status(200).json({
            message: "Food fetched",
            success: true,
            food,
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            success: false,
            error,
        })
    }
}

export const deleteFood = async (req, res) => {
    try {
        const id = req.params.id;
        await foodModel.findByIdAndDelete(id);

        res.status(200).json({
            message: "food was deleted",
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            success: false,
            error,
        })
    }
}

export const editFood = async (req, res) => {
    try {
        const id = req.params.id;

       const food = foodModel.findById(id);

        const { name, description, price, category } = req.body;

        let url = food.image;

        if(req.file){
          const cloudinaryResponse = await  uploadOnCloudinary(req.file.path);

          url =cloudinaryResponse.secure_url;
        }

       const editedfood = await foodModel.findByIdAndUpdate(id,{
            name,
            description,
            price,
            category,
            image:url,
        });
        res.status(200).json({
            message: "food was updated",
            success: true,
            editedfood,
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            success: false,
            error,
        })
    }
}
