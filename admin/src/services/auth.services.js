import api from "../api/axiosInstance";

export const signUpUser = async (data) => {
    try {
        const res = await api.post("/users/sign-up", data);

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const loginUser = async (data) => {
  try {
    const res = await api.post("/users/login", data);
    console.log("SUCCESS:", res.data);
    return res.data;
  } catch (error) {
    console.log("ERROR RESPONSE:", error.response?.data);
    console.log("STATUS:", error.response?.status);
    throw error;
  }
};

export const logoutUser = async () => {
    const res = await api.post("/users/logout");
    return res.data;
};

export const getUser = async () => {
    try {
        const res = await api.get("/users/getme");
        return res.data;
    } catch (error) {
        console.log(error)
    }
};

export const getUsers = async () => {
    try {
        const res = await api.get("/users/");
        return res.data;
    } catch (error) {
       console.error("Get users list failed:", error);
        // 👇 CRITICAL: Return an array matching your data structure instead of undefined
        return { users: [] };
    }
};