"use client";

import { useState } from "react";
import Link from "next/link";
import { DropdownIcon, MenuIcon } from "@/utils/svgs";
import { NAVLINKS } from "@/constants";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = (e) => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <button className="lg:hidden" onClick={toggleMenu}>
        <MenuIcon />
      </button>
      {openMenu && (
        <div
          className="absolute left-0 top-[95px] w-full backdrop-blur-md h-[calc(100vh-95px)]"
          onClick={toggleMenu}
        >
          <ul
            className={`w-full bg-white flex-col items-center py-5 flex text-sm`}
            onClick={(e) => e.stopPropagation()}
          >
            {NAVLINKS.map((item) => (
              <li key={item.id} className="group mb-4">
                <Link
                  href={item.link}
                  className="flex items-center gap-2 group-hover:text-[#55259F]"
                >
                  <span>{item.title}</span>
                  {item.dropdown && <DropdownIcon />}
                </Link>
                <div className="h-1 bg-[#55259F] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
              </li>
            ))}
            <li className="mb-5">
              <Link className="btn-primary px-4 py-2 " href={"/"}>
                get started
              </Link>
            </li>
            <li>
              <Link
                className="px-4 py-1 hover:text-[#55259F] hover:border-[#55259F] capitalize "
                href={"/"}
              >
                sign in
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
