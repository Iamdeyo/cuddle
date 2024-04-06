const Hero = () => {
  return (
    <section className="bg-[#55259F]">
      <div className="custom-container">
        <div className="flex min-h-[418px] lg:min-h-[600px] items-center">
          <div className="flex mx-auto flex-col items-center text-center gap-1.5 text-white max-w-[50ch] lg:max-w-[632px]">
            <h1 className="text-[2.5rem] lg:text-[3.75rem] font-bold">
              Cuddle Investments
            </h1>
            <p className="text-sm lg:text-xl">
              Our fractional ownership platform allows you to pool with others
              in order to buy a small bit of a big property and earn returns on
              appreciation of the property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
