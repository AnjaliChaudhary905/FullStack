import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";

const Contact = () => {
    return (
        <div>
            <section className="flex flex-col py-16 px-39 gap-10 items-center">
                <h1 className="font-allura font-normal text-[46px] md:text-[56px] leading-[120%] text-[#0C6967] text-center">
                    Our Contact
                </h1>
                <div className="flex flex-col gap-4 font-proxima leading-[120%] items-center ">
                    <p className=" font-light text-20 md:text-[24px]  tracking-[12%] ">
                        GET IN TOUCH
                    </p>
                    <h4 className=" font-bold text-[21px] md:text-[31px]  text-center leading-8">
                        <span className="text-[#D95103]">Our Friendly Team</span> would love to hear from you
                    </h4>
                </div>

                <div className="flex min-w-90 flex-wrap  gap-4 justify-center">
                    <div className="w-90 h-58.25 flex flex-col  gap-10 rounded-2xl border-[#00000008] shadow-lg p-10  bg-[#FFFFFF]">
                        <div className="relative pl-7">
                            <FaLocationDot className="absolute left-0 top-0 text-[#D95103] text-2xl" />
                            <span className="font-semibold text-[16px] text-[#101828]">
                                LOCATION
                            </span>
                        </div>
                        <div className="font-semibold italic leading-[100%] text-[16px] text-[#252D43]">
                            <h1> New Baneshwor -41201,</h1> Kathmandu, Bagmati, Nepal
                        </div>
                    </div>
                    <div className="w-90 h-58.25 flex flex-col  gap-10 rounded-2xl border-[#00000008] shadow-lg p-10  bg-[#FFFFFF]">
                        <div className="relative pl-9">
                            <FaPhoneVolume className="absolute left-0 top-0 text-[#D95103] text-2xl" />
                            <span className="font-semibold text-[16px] text-[#101828]">
                                PHONE
                            </span>
                        </div>
                        <div className=" flex justify-between  font-semibold italic leading-[100%] text-[16px] text-[#252D43]">
                            <p className="text-[#0C6967]">Mobile:</p>
                            <p className="flex flex-col gap-2"><span>(+977) 980 5689789</span><span>(+977) 980 5689789</span></p>
                        </div>
                        <div className=" flex justify-between  font-semibold italic leading-[100%] text-[16px] text-[#252D43]">
                            <p className="text-[#0C6967]">Tel:</p>
                            <p>01-4783972</p>
                        </div>
                    </div>
                    <div className="w-90 h-58.25 flex flex-col  gap-10 rounded-2xl border-[#00000008] shadow-lg p-10  bg-[#FFFFFF]">
                        <div className="relative pl-9">
                            <MdWatchLater className="absolute left-0 top-0 text-[#D95103] text-2xl" />
                            <span className="font-semibold text-[16px] text-[#101828]">
                                SERVICE TIME
                            </span>
                        </div>
                        <div className=" flex justify-between  font-semibold italic leading-[100%] text-[16px] text-[#252D43]">
                            <p className="text-[#0C6967]">MON - FRI</p>
                            <p>8 am - 8 pm</p>
                        </div>
                        <div className=" flex justify-between  font-semibold italic leading-[100%] text-[16px] text-[#252D43]">
                            <p className="text-[#0C6967]">SAT - SUN</p>
                            <p>Closed</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex">
                <div className="hidden md:flex md:w-[70%] ">
                    <img src="Map.png" alt="map" className=" h-full w-full object-cover" />
                </div>
                <div className="px-5 md:px-30.5 py-12">
                    <div className=" flex flex-col p-10 gap-12 bg-[#FFFFFF] text-[#FFFFFF] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
                        <div className="flex flex-col gap-4">
                            <h1 className="font-proxima font-bold text-[31px] leading-[120%] text-[#101828]">Contact <span className="text-[#D95103]">Us</span></h1>
                            <p className="font-normal text-[16px] leading-[180%] text-[#6B788E]">If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
                        </div>
                        <form className="flex flex-col items-start  bg-[#FFFFFF] py-10 px-6 text-black">
                            <div className="flex justify-center items-center gap-4 text-black mb-6">
                                <span>
                                    <label htmlFor="first-name">First Name</label>
                                    <input
                                        className="w-full border border-[#DFE2E6] rounded-lg py-4 mt-2"
                                        type="text" id="first-name" name='FirstName' />
                                </span>
                                <span>
                                    <label htmlFor="last-name">Last Name</label>
                                    <input
                                        className="w-full border border-[#DFE2E6] rounded-lg py-4 mt-2"
                                        type="text" id="last-name" name='LastName' />
                                </span>
                            </div>


                            <label htmlFor="email">Email</label>
                            <input
                                className=" w-full border border-[#DFE2E6] rounded-lg py-4  mt-2 mb-6 "
                                type="email" id="email" name='Email' />

                            <label htmlFor="service">What can we do for you</label>
                            <div className="relative w-full mt-2 mb-6">
                                <select
                                    id="service"
                                    name="Service"
                                    defaultValue=""
                                    className="w-full border border-[#DFE2E6] rounded-lg py-4 pl-4 pr-12 appearance-none bg-white cursor-pointer outline-none text-[#8c9ba5] focus:border-[#0091ff] focus:text-[#0f1d34]"
                                    required
                                >
                                    <option value="" disabled hidden>Choose</option>
                                    <option value="support" className="text-[#0f1d34]">Customer Support</option>
                                    <option value="sales" className="text-[#0f1d34]">Sales & Inquiries</option>
                                    <option value="feedback" className="text-[#0f1d34]">Feedback</option>
                                </select>
                                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                    </svg>
                                </div>
                            </div>

                            <label htmlFor="phn-number">Phone Number</label>
                            <input
                                className=" w-full border border-[#DFE2E6] rounded-lg py-4 mt-2 mb-6 "
                                type="Number" id="phn-number" name='PhoneNumber' />

                            <label htmlFor="message">Message</label>
                            <textarea
                                className=" w-full h-30 border border-[#DFE2E6] rounded-lg py-4 mt-2 mb-6 "
                                name="Message" id="message"></textarea>

                            <button className="w-68 h-16 mb-5 rounded-[100px] py-5 px-10 gap-2 bg-[#D95103] font-inter font-medium  flex justify-center items-center text-white">
                                Send Message
                            </button>
                        </form></div>
                </div>
            </section>
        </div>
    )
}

export default Contact