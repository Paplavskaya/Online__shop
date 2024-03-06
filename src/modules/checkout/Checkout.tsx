import { Order } from './components/Order'
import { Result } from './components/Result'
import { Route, Routes } from "react-router-dom"

export const Checkout = () => {
    return <Routes>
                <Route path="/order" element={<Order />} />
                <Route path="/result" element={<Result />} />
            </Routes>
}