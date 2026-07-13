import { useNavigate } from "react-router"
import {
  FiArrowRight,
  FiArrowRightCircle,
  FiArrowLeftCircle,
} from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6"; // Font Awesome 6 icons
import { FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";         
import { AiFillTikTok } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { getFoods } from "../../services/food.services";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate()
  const { data, isPending, isError } = useQuery({
    queryKey: ["foods"],
    queryFn: getFoods,
  });

  const foods = data?.foods || [];

  const [category, setCategory] = useState("All")


  const uniqueCategories = [...new Set(foods.map((food) => food.category))].slice(0, 3);


  const filteredCata = category === "All" || !category
  ? foods.slice(0, 3)
  : foods.filter((food) => food.category === category).slice(0, 3);
  console.log(filteredCata)

  const handleCategory = (item) => {
    setCategory(item)

  }

  const iconClass = " w-7 h-7 text-[#FFFFFF] hover:text-orange-500 transition-colors cursor-pointer";

  return (
    <div>
    <section className="min-h-200 grid grid-cols-1 lg:grid-cols-2 justify-center">
      {/* Left Column: Content */}
      <div className="flex flex-col justify-center text-center lg:text-left ml-0 lg:ml-40 lg:-mt-20">
        <span className="text-sm tracking-[12%] font-light text-[#6B788E] block mb-2">
          RESTAURANT
        </span>
        
        <div className="flex items-center justify-center lg:justify-start flex-wrap gap-3 mb-2">
          <span className="font-bold text-[61px] leading-tight">The</span>
          <div className="relative rotate-[-2.5deg] inline-block">
            <img 
              className="w-[190.5px] h-auto object-contain" 
              alt="one" 
              src="one.png" 
            />
            <span className="font-bold text-white text-[61px] absolute inset-0 flex items-center justify-center -mt-1">
              #One
            </span>
          </div>
        </div>

        <div className="text-[61px] font-bold leading-tight mb-4">
          Momo <span className="text-[#D95103]">Restaurant</span>
        </div>

        <p className="text-[20px] font-semibold text-gray-700 leading-relaxed mb-8">
          More than{" "}
          <span className="text-[#D95103] font-bold text-lg sm:text-xl lg:text-[25px]">
            20+ Varieties
          </span>{" "}
          of momo available for you
        </p>

        <div className="mx-auto lg:mx-0">
          <button 
          onClick={()=>{
            navigate("/menu")
          }}
            className="cursor-pointer bg-[#0C6967] rounded-full py-3.5 px-8 sm:py-4 sm:px-10 text-white flex items-center gap-2 transition-transform active:scale-105 hover:bg-[#0a5755]"
          >
            Explore Food Menu
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Right Column: Images (Hidden on mobile, visible on desktop) */}
      <div className="relative lg:block hidden">
        <img 
          className="h-220 absolute right-0 -top-20 object-contain" 
          alt="circle" 
          src="circle.png" 
        />
        <img 
          className="absolute top-40 left-30 w-155.5 h-108.5 z-20 object-contain" 
          alt="home-momo" 
          src="home_momo.png" 
        />
        <img 
          className="h-38 w-44 absolute top-33 left-22 object-contain" 
          alt="black-dot" 
          src="black_dot.png" 
        />
        <img 
          className="h-38 w-44 right-14 bottom-46 absolute object-contain" 
          alt="white-dot" 
          src="white_dot.png" 
        />
      </div>
    </section>

<section className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center px-6 sm:px-10 lg:px-10 py-10 md:py-15 max-w-7xl mx-auto">
  <div className="flex justify-center w-full">
    <div className=" w-122 h-149 ">
      <img
        className="w-full object-contain"
        src="thumbs.png"
        alt="thumbs-up"
      />
    </div>
  </div>
  <div className="text-center md:text-left flex flex-col items-center md:items-start mt-4 md:mt-2">
    <h2 className="font-bold text-3xl sm:text-[39px] leading-tight">
      Why Customer <span className="text-[#D95103]">Love Us</span>
    </h2>
    <p className="text-[#6B788E] text-base sm:text-[20px] mt-6 leading-relaxed max-w-xl">
      Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh
      fermentum vulputate tortor. Egestas facilisi luctus turpis arcu
      dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit
      cursus turpis.
    </p>
    <button className="bg-[#0C6967] hover:bg-[#094f4d] transition-colors rounded-full py-4 px-8 sm:py-5 sm:px-10 text-white flex items-center mt-8 gap-2 active:scale-105">
      Explore Our Story
      <FiArrowRight />
    </button>
  </div>
</section>

<section className="px-4 sm:px-8 py-12 bg-gray-50/50">
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-3xl sm:text-[39px] font-bold">
      Our <span className="text-[#D95103]">Most Popular</span> Recipes
    </h2>
    <p className="font-normal mt-3 text-base sm:text-[20px] text-[#6B788E] leading-relaxed">
      Browse through a varieties of recipes with fresh ingredients selected only from the best places
    </p>
  </div>

{/* Popular Category Action Pills */}
{!isPending && !isError && uniqueCategories.length > 0 && (
  <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-8 max-w-4xl mx-auto">
    
    {/* Explicit "All" Reset Button */}
    <div
      onClick={() => handleCategory("All")}
      className={`border-2 font-semibold rounded-full py-3 px-6 sm:px-10 text-sm sm:text-base cursor-pointer transition-all active:scale-95 ${
        category === "All"
          ? "bg-[#0C6967] border-[#0C6967] text-white"
          : "border-2 border-[#EBEDF0] text-gray-800 hover:border-black"
      }`}
    >
      All
    </div>

    {/* Dynamic Category Iterators */}
    {uniqueCategories.map((cat) => (
      <div
        onClick={() => handleCategory(cat)}
        key={cat}
        className={`border-2 font-semibold rounded-full py-3 px-6 sm:px-10 text-sm sm:text-base cursor-pointer transition-all active:scale-95 ${
          category === cat
            ? "bg-[#0C6967] border-[#0C6967] text-white"
            : "border-2 border-[#EBEDF0] text-gray-800 hover:border-black"
        }`}
      >
        {cat}
      </div>
    ))}
  </div>
)}

  <div className="max-w-7xl mx-auto mt-10">
    {isPending ? (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-orange-500"></div>
      </div>
    ) : isError ? (
      <div className="text-center py-12 text-red-500">Failed to load popular items.</div>
    ) : (
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-11 mt-6">
        <FiArrowLeftCircle className="text-3xl text-gray-400 hover:text-black cursor-pointer transition-colors hidden md:block shrink-0 mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row  justify-center  gap-6 w-full">
          {filteredCata.map((food) => (
            <div
              key={food._id}
              onClick={() => navigate(`/menu/${food._id}`)}
              className="text-center cursor-pointer group flex flex-col items-center w-full max-w-xs mx-auto md:mx-0"
            >
              <div className="overflow-hidden rounded-2xl w-full aspect-4/3 bg-gray-50 shadow-sm">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={food.image}
                  alt={food.name}
                />
              </div>

              <div className="text-xl sm:text-[25px] font-bold mt-4 sm:mt-6 text-gray-900 line-clamp-1 w-full px-2">
                {food.name}
              </div>

              <div className="text-base sm:text-[20px] text-gray-600 mt-1 sm:mt-2">
                रु{" "}
                <span className="text-[#D95103] text-2xl sm:text-[31px] font-bold">
                  {food.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <FiArrowRightCircle className="text-3xl text-gray-400 hover:text-black cursor-pointer transition-colors hidden md:block shrink-0 mb-10" />
      </div>
    )}
  </div>

  <div className="flex justify-center items-center mt-10">
    <button onClick={() => navigate("/menu")}
      className="bg-[#0C6967] hover:bg-[#094f4d] transition-colors rounded-full py-4 px-8 sm:py-5 sm:px-10 text-white flex items-center gap-2 active:scale-105">
      Explore Our menu
      <FiArrowRight />
    </button>
  </div>
</section>

<section>
  <div className="p-6 sm:p-10 text-2xl sm:text-3xl lg:text-[39px] font-bold text-center">
    <span className="text-[#D95103] block sm:inline mr-0 sm:mr-3">We Offer People</span>
    <span>The Service They Want</span>
  </div>
  <div className="relative  sm:min-h-112 lg:h-165 w-full flex items-center justify-center">
    <img className="absolute inset-0 h-full w-full object-cover" src="video-bg.png" alt="video-bg" />
    <div className="absolute inset-0 bg-black/35"></div>
    
    <div className="relative z-10 px-6 text-center text-white max-w-4xl pt-10">
      <h2 className="text-2xl sm:text-4xl lg:text-[49px] font-bold leading-tight">
        Process behind the making
      </h2>
      <p className="text-sm sm:text-xl lg:text-[25px] mt-3 opacity-95">
        See how only chefs cooks only the best momos
      </p>
      <div className="flex justify-center items-center mt-8 sm:mt-12">
        <button className="bg-[#0C6967] hover:bg-[#094f4d] transition-colors rounded-full py-3 px-6 sm:py-4 sm:px-8 text-white flex items-center gap-2 text-sm sm:text-base active:scale-105">
          <img className="w-6 h-6 sm:w-8 sm:h-8" src="video-icon.png" alt="video-icon" /> Watch the Video
        </button>
      </div>
    </div>
  </div>
</section>

<section className="px-6 sm:px-10 lg:px-15 py-16  ">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
    
    <div className=" p-8 lg:p-10 flex flex-col items-center text-center ">
      <div className="w-16 h-16 mb-6 flex items-center justify-center">
        <img className="w-full h-full object-contain" src="Quality.png" alt="quality food" />
      </div>
      <h4 className="font-bold text-2xl lg:text-[34px] mb-4">
        Quality Food
      </h4>
      <p className="font-inter font-medium text-sm sm:text-base text-gray-500 leading-relaxed">
        Only the best food with top quality products and ingredients
      </p>
    </div>

    <div className=" p-8 lg:p-10 flex flex-col items-center text-center ">
      <div className="w-16 h-16 mb-6 flex items-center justify-center">
        <img className="w-full h-full object-contain" src="party.png" alt="private party" />
      </div>
      <h4 className="font-bold text-2xl lg:text-[34px] mb-4">
        Private Party
      </h4>
      <p className="font-inter font-medium text-sm sm:text-base text-gray-500 leading-relaxed">
        Get the best food for all your private parties and gatherings
      </p>
    </div>

    
    <div className="p-8 lg:p-10 flex flex-col items-center text-center">
      <div className="w-16 h-16 mb-6 flex items-center justify-center">
        <img className="w-full h-full object-contain" src="Chef.png" alt="catering" />
      </div>
      <h4 className="font-bold text-2xl lg:text-[34px] mb-4">
        Catering
      </h4>
      <p className="font-inter font-medium text-sm sm:text-base text-gray-500 leading-relaxed">
        Get the best food for any occasions and gatherings
      </p>
    </div>
  </div>
  
  <div className="flex justify-center mt-10">
    <button 
    onClick={()=>{
      navigate("/service")
    }}
    className="rounded-full py-4 px-8 sm:py-5 sm:px-10 bg-[#0C6967] hover:bg-[#094f4d] transition-colors font-medium text-white shadow-sm active:scale-105">
      Explore Our Services
    </button>
  </div>
</section>


<section className="px-6 sm:px-10 lg:px-20 py-16 bg-gray-50/50">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
    <div className="flex flex-col items-start text-center md:text-left">
      <h3 className="text-3xl sm:text-[39px] font-bold text-[#101828]">
        200+ <span className="text-[#D95103]">Happy Customers</span>
      </h3>
      <p className="font-bold text-lg sm:text-[25px] text-[#0C6967] mt-1">What our customers say about us</p>

      <p className="font-normal italic text-lg sm:text-[24px] mt-6 mb-5 text-gray-700 leading-relaxed">
        “Only the best momo you can find in the market. Different Varieties of momo to choose from. Will be visiting again soon”
      </p>

      <h4 className="font-bold text-xl sm:text-[31px]">Livia Dias</h4>

      <div className="flex gap-4 mt-8 text-3xl mx-auto md:mx-0">
        <FiArrowLeftCircle className="text-gray-400 hover:text-black cursor-pointer transition-colors" />
        <FiArrowRightCircle className="text-gray-400 hover:text-black cursor-pointer transition-colors" />
      </div>
    </div>
    <div className="flex justify-center w-full">
      <img className="w-full max-w-md lg:max-w-lg h-auto rounded shadow-sm object-cover" src="customer.jpg" alt="customer" />
    </div>
  </div>
</section>

<section className="py-16 px-6 sm:px-10 lg:px-20 max-w-6xl mx-auto">
  <div className="flex flex-col justify-center items-center gap-10">
    <div className="text-center">
      <h1 className="font-bold text-3xl sm:text-[39px] text-[#101828]">Get <span className="text-[#D95103]">In Touch</span></h1>
      <p className="font-bold text-lg sm:text-[25px] text-[#0C6967] mt-2">Our Friendly team would love to hear from you</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 w-full bg-white text-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
      
      <div className="lg:col-span-5 flex flex-col rounded-2xl p-6 sm:p-8 items-start bg-[#0C6967] m-4">
        <h5 className="font-semibold flex items-center gap-2 text-lg"><FaLocationDot />
          <span>Our Address</span>
        </h5>
        <p className="italic mt-2 text-sm sm:text-base opacity-90">New Baneshwor, Kathmandu, Bagmati, Nepal</p>

        <h5 className="font-semibold flex items-center gap-2 mt-8 text-lg"><FaPhoneAlt />
          <span>Our Contacts</span>
        </h5>
        <div className="flex flex-wrap gap-8 mt-2 w-full text-sm sm:text-base">
          <div className="flex flex-col gap-1">
            <span className="font-semibold opacity-75">Mobile</span>
            <p className="italic">980 5689789</p>
            <p className="italic">980 5689789</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold opacity-75">Landline</span>
            <p className="italic">01-4783972</p>
          </div>
        </div>

        <h5 className="font-semibold flex items-center gap-2 mt-8 text-lg"><MdWatchLater />
          <span>Our Service Time</span>
        </h5>
        <div className="flex flex-wrap gap-8 mt-2 w-full text-sm sm:text-base">
          <div className="flex flex-col gap-1">
            <span className="font-semibold opacity-75">MON - FRI</span>
            <p className="italic">10 am - 8 pm</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold opacity-75">SAT - SUN</span>
            <p className="italic">Closed</p>
          </div>
        </div>

        <div className="mt-12 w-full">
          <p className="italic text-base opacity-90">Get in touch in social networks</p>
          <div className="mt-4 flex gap-4 items-center">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook className={iconClass} /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer"><AiFillTikTok className={iconClass} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagramSquare className={iconClass} /></a>
          </div>
        </div>
      </div>

      <form className="lg:col-span-7 flex flex-col items-start bg-white p-6 sm:p-10 text-black w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black w-full mb-4">
          <div className="flex flex-col">
            <label htmlFor="first-name" className="text-sm font-medium text-gray-700">First Name</label>
            <input
              className="w-full border border-[#DFE2E6] rounded-lg p-3 mt-1 outline-none focus:border-[#0C6967]"
              type="text" id="first-name" name='FirstName' />
          </div>
          <div className="flex flex-col">
            <label htmlFor="last-name" className="text-sm font-medium text-gray-700">Last Name</label>
            <input
              className="w-full border border-[#DFE2E6] rounded-lg p-3 mt-1 outline-none focus:border-[#0C6967]"
              type="text" id="last-name" name='LastName' />
          </div>
        </div>

        <div className="flex flex-col w-full mb-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <input
            className="w-full border border-[#DFE2E6] rounded-lg p-3 mt-1 outline-none focus:border-[#0C6967]"
            type="email" id="email" name='Email' />
        </div>

        <div className="flex flex-col w-full mb-4">
          <label htmlFor="service" className="text-sm font-medium text-gray-700">What can we do for you</label>
          <div className="relative w-full mt-1">
            <select
              id="service"
              name="Service"
              defaultValue=""
              className="w-full border border-[#DFE2E6] rounded-lg p-3 pr-12 appearance-none bg-white cursor-pointer outline-none text-gray-400 focus:border-[#0C6967] focus:text-black"
              required
            >
              <option value="" disabled hidden>Choose option</option>
              <option value="support">Customer Support</option>
              <option value="sales">Sales & Inquiries</option>
              <option value="feedback">Feedback</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mb-4">
          <label htmlFor="phn-number" className="text-sm font-medium text-gray-700">Phone Number</label>
          <input
            className="w-full border border-[#DFE2E6] rounded-lg p-3 mt-1 outline-none focus:border-[#0C6967]"
            type="number" id="phn-number" name='PhoneNumber' />
        </div>

        <div className="flex flex-col w-full mb-6">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
          <textarea
            className="w-full h-28 border border-[#DFE2E6] rounded-lg p-3 mt-1 outline-none focus:border-[#0C6967] resize-none"
            name="Message" id="message"></textarea>
        </div>

        <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#D95103] hover:bg-[#b84302] transition-colors font-medium text-white text-center">
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>


<section className="w-full h-64 sm:h-96 md:h-112 border-y border-[#DFE2E6] overflow-hidden">
  <img
    className="w-full h-full object-cover"
    src="Map.png"
    alt="map"
  />
</section>
    </div>
  )
}

export default Home