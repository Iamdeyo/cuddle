import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-52 pb-32">
      <div className="custom-container">
        <div className="flex flex-wrap md:flex-nowrap gap-y-10 w-full md:justify-between md:items-center md:gap-5">
          <div className="flex flex-col gap-3.5 w-full md:w-fit">
            <Link href={"/"} className="flex items-center gap-1 w-fit">
              <div className="w-[38.33px] md:w-[42.61px]">
                <Image
                  src={"/cuddle-logo.svg"}
                  width={42.61}
                  height={40}
                  alt="Cuddle Logo"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <span
                className={`font-medium text-[15.46px] leading-[17.7px] md:leading-[40px] md:text-[22px]`}
              >
                Cuddle
              </span>
            </Link>
            <p className="text-xs max-w-[60ch] md:max-w-[30ch]">
              Cuddle Realty is at the forefront of transforming the real estate
              coownership landscape, offering a groundbreaking platform that
              empowers investors to unlock the potential of shared property
              ownership
            </p>
          </div>
          <div className="footer-nav-item">
            <p className="font-bold"> Products</p>
            <Link href={"/"}> Cuddle Marketplace</Link>
            <Link href={"/"}> Affiliate</Link>
          </div>
          <div className="footer-nav-item">
            <p className="font-bold">Company</p>
            <Link href={"/"}> About us</Link>
            <Link href={"/"} className="flex items-center gap-1.5">
              Careers
              <span className="bg-primary rounded-3xl text-[6px] text-white px-1.5 leading-4 lg:leading-5 font-light">
                Coming soon
              </span>
            </Link>
          </div>
          <div className="footer-nav-item">
            <p className="font-bold">Learn</p>
            <Link href={"/"}> FAQs</Link>
            <Link href={"/"}> Blog</Link>
          </div>
          <div className="footer-nav-item">
            <p className="font-bold">Contact Us</p>
            <a href="tel:+2348106264012"> +234 8106 264 012</a>
            <a href="mailto:hello@cuddlerealty.com">hello@cuddlerealty.com</a>
          </div>
        </div>
        <div className="mt-10 text-primary flex justify-center gap-x-3 gap-y-1 text-[0.5rem] xs:text-xs flex-wrap text-center">
          <span className="w-full xs:w-fit">
            © 2023 Cuddle Realty. All rights reserved.
          </span>
          <span className="hidden xs:inline border border-primary w-0"></span>
          <span>Privacy Policy</span>
          <span className="border border-primary w-0"></span>
          <span>Terms of Use</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
