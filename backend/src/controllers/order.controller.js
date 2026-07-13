import orderModel from "../models/order.model.js";

export const createOrder = async (req, res) => {
    try {
        const userId = req.user._id;
        const foods = req.body;

        const order = await orderModel.create({
            userId,
            foods,
        });
        res.status(201).json({
            message: 'order created,',
            success: true,
            order,
        })
    }
    catch (error) {
        res.status(500).json({
            message: "internal server error",
            success: false,
            error,
        });
    }
}

export const success = async (req, res) => {
    try {
        const { status, transaction_uuid } = JSON.parse(atob(req.query.data))
        const order = await orderModel.findById(transaction_uuid);

        if (!order) {
            return res.status(404).json({
                message: "order not found",
                success: false,
            });
        }
        orderModel.findByIdAndUpdate(transaction_uuid, { paymentStatus: status }, { new: true },)
        res.redirect(`http://localhost:5173/success?id=${transaction_uuid}`)
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            success: false,
            error,
        });
    }
}

export const getOrder = async (req, res) => {
    try {
        const id = req.params.id
        const order = await orderModel.findById(id).populate("userId").populate('foods.foodId');
        if (!order) {
            return res.status(404).json({
                message: "order not found",
                success: false,
            });
            res.status(200).json({
                message:"order fetched",
                success: true,
                order,
            })
        }
     } catch (error) {
            res.status(500).json({
                message: "internal server error",
                success: false,
                error,
            });
        }
    }

    export const getOrders = async(req, res) => {
      try {
        const orders = await orderModel.find().populate("userId").populate('foods.foodId');
        if(orders.length==0){
          return res.status(404).json({
            message:"order not found",
            success:false,
          })
        }
        res.status(200).json({
          message:"order fetched successfully",
          success:true,
          orders,
        })
      } catch (error) {
        res.status(500).json({
          message: "internal server error",
          success: false,
          error,
        });
      }
    };