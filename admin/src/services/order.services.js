import toast from "react-hot-toast";
import api from "../api/axiosInstance"


export const getOrders = async () => {
    try {
        const res = await api.get(`/orders/`);
        return res.data;
    } catch (error) {
        console.log("failed to get order", error.response);
        toast.error(error.response.statusText);
    }
}