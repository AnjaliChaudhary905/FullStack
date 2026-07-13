import { useLocation } from "react-router";
import CryptoJS from "crypto-js";

const Payment = () => {
    const location = useLocation();
    console.log(location);
    const total_amount = location?.state?.total_amount || 0;
    const transaction_uuid = location?.state?.order_id || "N/A";
    
    const hash = CryptoJS.HmacSHA256(
        `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`,
        import.meta.env.VITE_ESEWA_SECRET_KEY
    );
    const signature = CryptoJS.enc.Base64.stringify(hash);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 antialiased">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                
                {/* Header branding */}
                <div className="flex flex-col items-center mb-8">
                    <div className="h-12 w-auto flex items-center justify-center font-bold text-2xl text-[#60bb46] tracking-wide mb-2">
                        eSewa <span className="text-gray-700 ml-1 font-medium text-lg">Integration</span>
                    </div>
                    <p className="text-sm text-gray-500 text-center">
                        Securely complete your transaction via eSewa ePay.
                    </p>
                </div>

                {/* Order Summary UI Card */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100 space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200 text-sm">
                        <span className="text-gray-500">Order ID</span>
                        <span className="font-mono text-gray-800 font-medium truncate max-w-[200px]" title={transaction_uuid}>
                            {transaction_uuid}
                        </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Subtotal</span>
                        <span className="text-gray-800 font-medium">Rs. {total_amount}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Tax & Charges</span>
                        <span className="text-gray-800 font-medium">Rs. 0</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <span className="text-gray-900 font-semibold">Total Amount</span>
                        <span className="text-xl font-bold text-gray-900">Rs. {total_amount}</span>
                    </div>
                </div>

                {/* Form Wrapper */}
                <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
                    
                    {/* Hidden payload inputs required by eSewa backend */}
                    <input type="hidden" id="amount" name="amount" value={total_amount} />
                    <input type="hidden" id="tax_amount" name="tax_amount" value={0} />
                    <input type="hidden" id="total_amount" name="total_amount" value={total_amount} />
                    <input type="hidden" id="transaction_uuid" name="transaction_uuid" value={transaction_uuid} />
                    <input type="hidden" id="product_code" name="product_code" value="EPAYTEST" />
                    <input type="hidden" id="product_service_charge" name="product_service_charge" value={0} />
                    <input type="hidden" id="product_delivery_charge" name="product_delivery_charge" value={0} />
                    <input type="hidden" id="success_url" name="success_url" value="https://localhost:9000/api/orders/success" />
                    <input type="hidden" id="failure_url" name="failure_url" value="https://developer.esewa.com.np/failure" />
                    <input type="hidden" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" />
                    <input type="hidden" id="signature" name="signature" value={signature} />

                    {/* Styled Interactive Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full bg-[#60bb46] hover:bg-[#52a23b] text-white font-semibold py-3.5 px-4 rounded-xl transition duration-200 ease-in-out transform active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-green-100 shadow-sm shadow-green-600/10 flex items-center justify-center gap-2"
                    >
                        Pay with eSewa
                    </button>
                </form>

                <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>SSL Encrypted Secure Payment</span>
                </div>
            </div>
        </div>
    );
};

export default Payment;