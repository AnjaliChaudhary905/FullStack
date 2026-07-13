import { useQuery } from "@tanstack/react-query"
import {  ShoppingBag, Clock, CheckCircle } from "lucide-react"
import { getOrders } from "../services/order.services"

const OrderManagement = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  })

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-100">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="p-4 bg-rose-50 border border-rose-200 text-rose-600 rounded-xl text-sm">
        Error loading orders: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    )
  }

  const hasOrders = data?.orders && data.orders.length > 0

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Order Management</h1>
        <p className="text-sm text-zinc-500">Track incoming customer orders, fulfillment items, and payment statuses.</p>
      </div>

      {/* Main Table Interface */}
      {hasOrders ? (
        <div className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50/80 border-b border-zinc-200/80 text-xs font-bold text-zinc-500 tracking-wider uppercase">
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th> {/* 👈 Header renamed */}
                  <th className="px-6 py-4">Items Count</th>
                  <th className="px-6 py-4">Payment Status</th>
                
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-sm text-zinc-700">
                {data.orders.map((order) => (
                  <tr key={order._id} className="hover:bg-emerald-50/20 transition-colors group">
                    {/* Order Reference */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                          <ShoppingBag className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-xs font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors select-all">
                          {order._id}
                        </span>
                      </div>
                    </td>

                    {/* Customer Profile (Updated for Populated Objects) 👈 */}
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-semibold text-zinc-900">
                          {order.userId?.fullname || "Unknown Customer"}
                        </span>
                        {order.userId?.email && (
                          <span className="text-xs text-zinc-400 font-medium">
                            {order.userId.email}
                          </span>
                        )}
                      </div>
                    </td>
                    
                    {/* Items Quantities */}
                    <td className="px-6 py-4 font-medium text-zinc-700">
                      {order.foods ? `${order.foods.length} items` : "0 items"}
                    </td>

                    {/* Payment Status Badges */}
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider ${
                        order.paymentStatus === 'PAID'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/60'
                          : 'bg-amber-50 text-amber-800 border border-amber-200/60'
                      }`}>
                        {order.paymentStatus === 'PAID' ? (
                          <CheckCircle className="w-3 h-3" />
                        ) : (
                          <Clock className="w-3 h-3" />
                        )}
                        {order.paymentStatus || 'PENDING'}
                      </span>
                    </td>

                
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Empty Fallback State */
        <div className="flex flex-col items-center justify-center border border-dashed border-zinc-200 rounded-2xl p-16 text-center bg-white">
          <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 text-xl">
            📦
          </div>
          <h3 className="text-sm font-semibold text-zinc-900">No transactions recorded</h3>
          <p className="text-xs text-zinc-400 max-w-xs mt-1">There are currently no processing active checkout orders saved inside the cluster database logs.</p>
        </div>
      )}
    </div>
  )
}

export default OrderManagement