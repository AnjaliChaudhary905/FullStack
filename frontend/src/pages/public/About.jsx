import {
    FiArrowRightCircle,
    FiArrowLeftCircle,
} from "react-icons/fi";

const About = () => {
    return (
        <div className="overflow-x-hidden">
            
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 sm:px-10 lg:px-20 py-6">
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <h1 className="font-allura text-4xl sm:text-5xl lg:text-[54px] leading-none text-[#0C6967]">
                        About Us
                    </h1>
                    <p className="font-proxima font-light text-base sm:text-[20px] leading-relaxed tracking-[12%] text-[#6B788E] mt-6 sm:mt-8">
                        WE PRIDE OURSELF ON
                    </p>
                    <div className="flex flex-col font-proxima font-bold text-2xl sm:text-3xl lg:text-[35px] leading-[120%] text-[#101828] mt-4 sm:mt-6">
                        <span className="text-[#D95103]">Our authentic momo recipes </span>
                       <span> passed down through generations</span>
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <img className="w-full max-w-md lg:max-w-lg  object-contain" src="about.png" alt="aboutimage" />
                </div>
            </section>

            <section>
                <div className="relative min-h-100 sm:min-h-125 lg:h-150 w-full flex items-center mt-4">
                    <img className="absolute inset-0 h-full w-full object-cover" src="cook.jpg" alt="cook-bg" />
                    <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent pointer-events-none"></div>
                    
                    <div className="relative z-10 px-6 sm:px-10 lg:px-20 w-full max-w-4xl text-white py-12 mt-16 sm:mt-24">
                        <h2 className="text-3xl sm:text-4xl lg:text-[49px] font-bold leading-tight">
                            Process behind the making
                        </h2>
                        <p className="text-base sm:text-xl lg:text-[25px] mt-4 max-w-2xl opacity-90">
                            See how we make momos that you like from only the best ingredients
                        </p>
                        <button className="bg-[#0C6967] hover:bg-[#094f4d] transition-colors rounded-full py-3 px-6 sm:py-4 sm:px-10 text-white flex items-center mt-8 sm:mt-14 gap-2 text-sm sm:text-base">
                            <img className="w-6 h-6 sm:w-8 sm:h-8" src="video-icon.png" alt="video-icon" /> Watch the Video
                        </button>
                    </div>
                </div>
            </section>

            
            <section className="flex flex-col py-16 lg:py-28 px-6 sm:px-10 lg:px-20 gap-16 lg:gap-28 max-w-7xl mx-auto">
                
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="font-proxima order-1 md:order-0">
                        <h2 className="text-[#101828] font-bold text-3xl lg:text-[39px] leading-[120%] mb-4">
                            Our momos are <span className="text-[#D95103]">made with love</span>
                        </h2>
                        <p className="font-normal text-base sm:text-[20px] leading-[160%] text-[#6B788E]">
                            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.
                        </p>
                    </div>
                    <div className="w-full aspect-4/3 rounded overflow-hidden shadow-sm bg-[#D9D9D9]">
                        <img className="w-full h-full object-cover" src="tcook.jpg" alt="tcook" />
                    </div>
                    
                    <div className="hidden md:block absolute top-[55%] left-[30%] w-48 lg:w-64 xl:w-80 h-auto z-10 pointer-events-none">
                        <img src="buffmomo.png" alt="momo" className="w-full h-auto object-contain" />
                    </div>
                </div>

                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="w-full aspect-4/3 rounded overflow-hidden shadow-sm bg-[#D9D9D9] order-2 md:order-none">
                        <img className="w-full h-full object-cover" src="gcook.jpg" alt="gcook" />
                    </div>
                    <div className="font-proxima order-1">
                        <h2 className="text-[#101828] font-bold text-3xl lg:text-[39px] leading-[120%] mb-4">
                            Taste the difference with <span className="text-[#D95103]">our handcrafted momos</span>
                        </h2>
                        <p className="font-normal text-base sm:text-[20px] leading-[160%] text-[#6B788E]">
                            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.
                        </p>
                    </div>
            
                    <div className="hidden md:block absolute top-[60%] left-[30%] w-48 lg:w-64 xl:w-80 h-auto z-10 pointer-events-none">
                        <img src="fried_momo.png" alt="momo" className="w-full h-auto object-contain" />
                    </div>
                </div>

        
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="font-proxima order-1 md:order-0">
                        <h2 className="text-[#101828] font-bold text-3xl lg:text-[39px] leading-[120%] mb-4">
                            Our momos are the perfect <span className="text-[#D95103]">blend of tradition</span> and <span className="text-[#D95103]">innovation</span>
                        </h2>
                        <p className="font-normal text-base sm:text-[20px] leading-[160%] text-[#6B788E]">
                            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.
                        </p>
                    </div>
                    <div className="w-full aspect-4/3 rounded overflow-hidden shadow-sm bg-[#D9D9D9]">
                        <img className="w-full h-full object-cover" src="vchef.jpg" alt="vchef" />
                    </div>
                
                    <div className="hidden md:block absolute top-[58%] left-[38%] w-48 lg:w-64 xl:w-80 h-auto z-10 pointer-events-none">
                        <img className="scale-x-[-1] w-full h-auto object-contain" src="smomo.png" alt="momo" />
                    </div>
                </div>
            </section>

    
            <section className="relative w-full min-h-125 md:h-150 flex flex-col md:flex-row overflow-hidden">
                <div className="absolute inset-0 h-full w-full hidden md:block">
                    <img src="bg.jpg" alt="Restaurant" className="h-full w-full object-cover" />
                </div>
                
                
                <div className="relative z-10 w-full md:w-1/2 bg-black/85 md:bg-black/65 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12 text-white">
                    <span className="text-5xl sm:text-6xl text-[#D95103]">❝</span>
                    <p className="mt-4 max-w-md text-base sm:text-lg leading-relaxed opacity-90">
                        Momo is not just about sustenance, it's about bringing people together
                        and creating memories. At our restaurant, we strive to create a warm
                        and inviting atmosphere where our guests can enjoy delicious momo,
                        great company, and unforgettable experiences.
                    </p>
                    <div className="mt-8">
                        <h3 className="text-2xl sm:text-3xl font-bold">Marcus Schleifer</h3>
                        <p className="text-base sm:text-lg font-semibold text-[#0C6967]">CEO</p>
                    </div>
                    <div className="flex gap-4 items-center mt-8 text-3xl">
                        <FiArrowLeftCircle className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                        <FiArrowRightCircle className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>

        
                <div className="w-full h-75 md:h-full md:w-1/2 relative">
                    <img src="ceo.jpg" alt="CEO" className="h-full w-full object-cover" />
                </div>
            </section>

            
            <section className="flex flex-col justify-center items-center py-16 px-6 max-w-7xl mx-auto gap-8">
                <div className="text-center">
                    <h2 className="font-proxima font-bold text-3xl sm:text-4xl lg:text-[49px] leading-tight text-[#101828]">
                        Meet The <span className="text-[#D95103]">Team</span>
                    </h2>
                    <h4 className="font-proxima font-semibold text-lg sm:text-xl lg:text-[25px] text-[#0C6967] mt-3">
                        Our talented team members who deliver only the best results
                    </h4>
                </div>

            
                <div className="w-full flex flex-wrap justify-center items-center gap-6 mt-6">
                    
                    <div className="relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] max-w-sm h-[420px] sm:h-[480px] rounded overflow-hidden shadow-md group">
                        <img className="w-full h-full object-cover" src="head-chef.jpg" alt="headchef" />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 font-proxima text-white font-bold text-2xl lg:text-[31px]">
                            Head Chef
                        </div>
                    </div>

                    
                    <div className="relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] max-w-sm h-[420px] sm:h-[480px] rounded overflow-hidden shadow-md group">
                        <img className="w-full h-full object-cover" src="assistant.jpg" alt="assistantchef1" />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 font-proxima text-white font-bold text-2xl lg:text-[31px]">
                            Assistant Chef
                        </div>
                    </div>

                    
                    <div className="relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] max-w-sm h-[420px] sm:h-[480px] rounded overflow-hidden shadow-md group">
                        <img className="w-full h-full object-cover" src="assistant2.jpg" alt="assistantchef2" />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 font-proxima text-white font-bold text-2xl lg:text-[31px]">
                            Assistant Chef
                        </div>
                    </div>
                </div>

                
                <div className="flex w-full max-w-4xl justify-between items-center mt-8 border-t border-gray-100 pt-6">
                    <div className="font-proxima flex gap-2 items-center">
                        <span className="font-bold text-2xl sm:text-[31px] text-[#000000]">01</span>
                        <span className="text-[#6B788E] text-xl sm:text-[24px] font-normal">/</span>
                        <span className="text-[#C2C7D0] text-xl sm:text-[24px] font-normal">05</span>
                    </div>
                    <div className="flex gap-4 text-3xl">
                        <FiArrowLeftCircle className="text-gray-400 hover:text-black cursor-pointer transition-colors" />
                        <FiArrowRightCircle className="text-gray-400 hover:text-black cursor-pointer transition-colors" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;