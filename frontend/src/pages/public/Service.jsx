import { useNavigate } from "react-router"



const Service = () => {
    const navigate = useNavigate()
    return (
        <div>
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 sm:px-10 lg:px-20 py-12">
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <h1 className="font-allura text-5xl sm:text-6xl lg:text-[64px] leading-none text-[#0C6967]">
                        Our Services
                    </h1>

                    <p className="font-proxima font-light text-base sm:text-[20px] leading-relaxed tracking-[12%] text-[#6B788E] mt-6 sm:mt-8">
                        KNOWING OUR CUSTOMERS NEEDS
                    </p>

                    <div className="font-proxima font-bold text-2xl sm:text-3xl lg:text-[35px] leading-[120%] mt-4 sm:mt-6">
                        <h2 className="text-[#D95103]">
                            We're more than just momos.
                        </h2>
                        <h2 className="text-[#101828]">
                            We're a full-service dining experience.
                        </h2>
                    </div>
                </div>

                <div className="flex justify-center w-full">
                    <img
                        src="service.png"
                        alt="Service"
                        className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                    />
                </div>
            </section>

            <section className="md:mt-23">
                <div className="relative">
                    <img className="h-120 sm:h-137 md:h-162 lg:h-190 w-full object-cover"
                        src="bg2.jpg" alt="cook-bg" />
                    <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent pointer-events-none "></div>
                    <div className=" absolute flex inset-0 items-center">
                        <div className="px-6 sm:px-10 md:px-16 lg:px-24 max-w-xl">

                            <div className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg_text-6xl">
                                Dine With Us
                            </div>
                            <p className="mt-4 text-white text-base sm:text-lg md:text-xl lg:text-2xl">
                                Enjoy our momos in the comfort of your own home with our delivery services
                            </p>
                            <button className="mt-8 md:mt-12 bg-[#0C6967] rounded-full py-3 px-6 md:px-8 md:py-4 text-white flex items-center gap-3 hover:bg-[#095755] transition">
                                <img className="w-5 h-5 md:w-7 md:h-7" src="video-icon.png" alt="video-icon" />
                                <span className="text-sm sm:text-base md:text-lg">Watch the Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 lg:py-36 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 space-y-20 md:space-y-32">

                {/* First Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text */}
                    <div className="flex flex-col gap-10 items-center lg:items-start text-center lg:text-left">

                        <div className="flex flex-col gap-6 items-center lg:items-start">
                            <img
                                className="w-14 md:w-18 h-auto"
                                src="party.png"
                                alt="Private Party"
                            />

                            <h4 className="font-proxima font-bold text-2xl md:text-3xl text-[#101828]">
                                Private Party
                            </h4>

                            <p className="font-inter text-sm md:text-base leading-7 text-[#6B788E] max-w-md">
                                Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
                                adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
                            </p>
                        </div>

                        <div className="w-full max-w-md flex items-center justify-between p-5 rounded-xl shadow-lg bg-white">
                            <div>
                                <h5 className="font-proxima font-bold text-lg md:text-2xl text-[#0C6967]">
                                    Scan the QR code
                                </h5>

                                <p className="font-inter text-sm text-[#6B788E]">
                                    You can also check about the service
                                </p>
                            </div>

                            <img
                                className="w-20 md:w-28 h-auto"
                                src="qr.png"
                                alt="QR Code"
                            />
                        </div>

                    </div>
                    <div className="w-full max-w-[550px] mx-auto rounded-2xl overflow-hidden">
                        <img
                            className="w-full h-[260px] sm:h-[350px] md:h-[450px] object-cover"
                            src="gathering.jpg"
                            alt="Private Party"
                        />
                    </div>

                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image */}
                    <div className="order-2 lg:order-1 w-full max-w-[550px] mx-auto rounded-2xl overflow-hidden">
                        <img
                            className="w-full h-[260px] sm:h-[350px] md:h-[450px] object-cover"
                            src="gathering1.jpg"
                            alt="Catering"
                        />
                    </div>

                    {/* Text */}
                    <div className="order-1 lg:order-2 flex flex-col gap-10 items-center lg:items-start text-center lg:text-left">

                        <div className="flex flex-col gap-6 items-center lg:items-start">
                            <img
                                className="w-14 md:w-18 h-auto"
                                src="Chef.png"
                                alt="Chef"
                            />

                            <h4 className="font-proxima font-bold text-2xl md:text-3xl text-[#101828]">
                                Catering
                            </h4>

                            <p className="font-inter text-sm md:text-base leading-7 text-[#6B788E] max-w-md">
                                Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
                                adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
                            </p>
                        </div>

                        <div className="w-full max-w-md flex items-center justify-between p-5 rounded-xl shadow-lg bg-white">
                            <div>
                                <h5 className="font-proxima font-bold text-lg md:text-2xl text-[#0C6967]">
                                    Scan the QR code
                                </h5>

                                <p className="font-inter text-sm text-[#6B788E]">
                                    You can also check about the service
                                </p>
                            </div>

                            <img
                                className="w-20 md:w-28 h-auto"
                                src="qr.png"
                                alt="QR Code"
                            />
                        </div>

                    </div>

                </div>

            </section>
            <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-16 md:pb-20">
                <div className="rounded-3xl bg-[#F5F6F7] py-12 px-6 md:px-10 lg:px-16 flex flex-col items-center text-center gap-8">

                    <div className="flex flex-col items-center gap-3 max-w-3xl">
                        <h1 className="font-proxima font-bold text-2xl sm:text-3xl md:text-4xl text-[#101828]">
                            Got any Queries?
                        </h1>

                        <p className="font-inter text-sm sm:text-base md:text-lg leading-relaxed text-[#6B788E]">
                            If you have any queries, send us a message. Our friendly team would love
                            to hear from you.
                        </p>
                    </div>

                    <button
                        onClick={() => navigate("/contact")}
                        className="w-full max-w-xs sm:max-w-sm md:w-auto rounded-full bg-[#0C6967] px-8 py-4 text-white font-inter font-medium transition hover:bg-[#095755]"
                    >
                        Get In Touch
                    </button>

                </div>
            </section>


        </div>
    )
}

export default Service