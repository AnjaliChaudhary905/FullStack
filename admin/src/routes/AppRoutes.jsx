import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Dashboard from "../pages/Dashboard";
import UserManagement from "../pages/UserManagement";
import FoodManagement from "../pages/FoodManagement";
import OrderManagement from "../pages/OrderManagement";
import AddFood from "../pages/food/AddFood";
import EditFood from "../pages/food/EditFood";
import Login from "../pages/auth/Login";
import PageNotFound from "../pages/PageNotFound";

const AppRoutes = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Routes>
      {/* Login */}
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/" replace />}
      />

      {/* Protected Dashboard */}
      <Route
        path="/"
        element={user ? <Dashboard /> : <Navigate to="/login" replace />}
      >
        <Route index element={<UserManagement />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="food-management" element={<FoodManagement />} />
        <Route path="order-management" element={<OrderManagement />} />
        <Route path="add-food" element={<AddFood />} />
        <Route path="edit-food/:id" element={<EditFood />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;