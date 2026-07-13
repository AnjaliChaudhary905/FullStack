import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router"
import { getOrder } from "../../services/order.services";



const Success = () => {
    const [searchParams] = useSearchParams()
    const orderId = searchParams.get("id");

    const { data, isPending, isError, error } = useQuery({
        queryKey: ["order", orderId],
        queryFn: () => {
            return getOrder(orderId)
        }
    });

    const order = data.order

    return (
        <div>
            <h1>{order.paymentStatus}</h1>
        </div>
    )
}

export default Success