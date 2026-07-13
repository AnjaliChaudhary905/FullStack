
import { Route, Routes } from 'react-router'
import PageNotFound from '../pages/public/PageNotFound'
import Home from '../pages/public/Home'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import Menu from '../pages/public/Menu'
import MenuDetails from '../pages/public/MenuDetails'
import Cart from '../pages/cart/Cart'
import Payment from '../pages/payment/Payment'
import Success from '../pages/payment/Success'
import About from '../pages/public/About'
import Contact from '../pages/public/Contact'
import Service from '../pages/public/Service'
import AllergyAdvice from '../pages/public/AllergyAdvice'


const AppRoutes = () => {
  
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/service" element={<Service/>} />
                <Route path="/allergy-advice" element={<AllergyAdvice/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/success" element={<Success />} />
                <Route path="/menu/:id" element={<MenuDetails />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default AppRoutes