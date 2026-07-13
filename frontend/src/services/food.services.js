import toast from "react-hot-toast";
import api from "../api/axiosInstance"

export const addFood = async (formData) => {
    try {
        const res = await api.post('/foods/add',formData);
        return res.data;
    } catch (error) {
        console.log("failed to add food", error);
        toast.error(error.response.statusText);
    }
}

export const getFoods = async () => {
    try {
        const res = await api.get('/foods');
        return res.data;
    } catch (error) {
        console.log("failed to load foods", error);
        toast.error(error.response.statusText);
    }
}

export const getFood = async (id) => {
    try {
        const res = await api.get(`/foods/${id}`);
        return res.data;
    } catch (error) {
        console.log("failed to fetch food", error.response);
        toast.error(error.response.statusText);
    }
}

export const deleteFood = async (id) => {
    try {
        const res = await api.delete(`/foods/${id}`);
        return res.data;
    } catch (error) {
        console.log("failed to delete food", error.response);
        toast.error(error.response.statusText);
    }
}

export const editFood = async (id,data) => {
    try {
        const res = await api.put(`/foods/${id}`,data);
        return res.data;
    } catch (error) {
        console.log("failed to edit food", error.response);
        toast.error(error.response.statusText);
    }
}