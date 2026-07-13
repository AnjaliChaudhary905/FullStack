import toast from "react-hot-toast";
import api from "../api/axiosInstance"

export const createOrder = async (data) => {
    try {
        const res = await api.post(`/orders/create`,data);
        return res.data;
    } catch (error) {
        console.log("failed to create order", error.response);
        toast.error(error.response.statusText);
        throw error;
    }
}

export const getOrder = async (id) => {
    try {
        const res = await api.get(`/orders/${id}`);
        return res.data;
    } catch (error) {
        console.log("failed to get order", error.response);
        toast.error(error.response.statusText);
    }
}

export const getOrders = async () => {
    try {
        const res = await api.get(`/orders/`);
        return res.data;
    } catch (error) {
        console.log("failed to get order", error.response);
        toast.error(error.response.statusText);
    }
}