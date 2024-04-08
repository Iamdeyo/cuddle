import Image from "next/image";
import Link from "next/link";
import { DropdownIcon } from "@/utils/svgs";
import { NAVLINKS } from "@/constants";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <header className="bg-white relative">
      <div className="custom-container">
        <nav className="h-[94px] flex items-center justify-between">
          <Link href={"/"} className="flex items-center gap-1 ">
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
              className={`font-medium text-[15.46px] leading-[17.7px] md:leading-[40px] md:text-[22px] `}
            >
              Cuddle
            </span>
          </Link>

          <ul className="items-center gap-10 hidden lg:flex ">
            {NAVLINKS.map((item) => (
              <li key={item.id} className="relative group">
                <Link
                  href={item.link}
                  className="flex items-center gap-2 group-hover:text-[#55259F]"
                >
                  <span>{item.title}</span>
                  {item.dropdown && <DropdownIcon />}
                </Link>
                <div className="h-1 bg-[#55259F] w-0 group-hover:w-full transition-all duration-300 ease-in-out absolute top-full left-0"></div>
              </li>
            ))}
          </ul>

          <ul className="hidden lg:flex flex-none items-center">
            <li>
              <Link
                href={"/"}
                className="px-8 py-4 capitalize text-[#434242] hover:text-[#55259F]"
              >
                sign in
              </Link>
            </li>
            <li>
              <Link href={"/"} className="btn-primary px-8 py-4">
                get started
              </Link>
            </li>
          </ul>

          <Menu />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
