

const AllergyAdvice = () => {
  return (
    <div>
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 sm:px-10 lg:px-20 py-12">
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <h1 className="font-allura text-5xl sm:text-6xl lg:text-[64px] leading-none text-[#0C6967]">
                        Allergy Advices
                    </h1>

                    <p className="font-proxima font-light text-base sm:text-[20px] leading-relaxed tracking-[12%] text-[#6B788E] mt-6 sm:mt-8">
                       AT OUR RESTAURANT
                    </p>

                    <div className="font-proxima font-bold text-2xl sm:text-3xl lg:text-[35px] leading-[120%] mt-4 sm:mt-6">
                        <h2 className="text-[#D95103]">
                           We use only the freshest and highest quality ingredients in all our dishes,
                        </h2>
                        <h2 className="text-[#101828]">
                         and offer transparency in our ingredient labeling.
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
            <section className="w-full overflow-hidden">
                <img 
                className="object-contain"
                src="allergy.png" alt="allergy-advice" />
            </section>
             <section className="w-full overflow-hidden">
                <img 
                className="object-contain"
                src="allergy-advice.png" alt="allergy-advice" />
            </section>
    </div>
  )
}

export default AllergyAdvice