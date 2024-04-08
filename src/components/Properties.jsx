import { DropdownIcon, HeartIcon, SearchIcon } from "@/utils/svgs";
import Property from "./Property";
import { KEYBENEFITS } from "@/constants";

const Properties = () => {
  return (
    <section>
      <div className="custom-container">
        <div className="flex flex-col gap-3 sm:gap-5 sm:flex-row sm:items-center md:gap-10 mb-9 md:mb-11">
          <div className="flex items-center gap-4 xs:gap-7 h-8">
            <label className="inline-flex gap-2 text-xs md:text-base flex-none items-center cursor-pointer">
              <span className="font-bold">List View</span>
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-white peer-focus:outline-none ring-1 ring-[#787678] peer-focus:ring-primary rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#5E5D5D] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
              <span>Map View</span>
            </label>

            <label className="h-full relative text-[0.625rem] md:text-xs">
              <div className="absolute top-1/2 -translate-y-1/2 right-2">
                <DropdownIcon />
              </div>
              <span className="absolute top-1/2 -translate-y-1/2 left-2">
                Sort by:
              </span>
              <select className="bg-[#FAFAFA] border-none ring-1 ring-transparent border h-full rounded-lg outline-none focus:ring-primary block pl-12 pr-7 md:pl-14">
                <option selected value="newest">
                  Newest
                </option>
                <option value="oldest"> Oldest</option>
              </select>
            </label>
          </div>
          <div className="relative w-full sm:max-w-[200px] md:max-w-[340px]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <span>
                <SearchIcon />
              </span>
            </div>
            <input
              type="text"
              className="bg-white border-[0.6px] border-[#A5A5A5] text-gray-900 text-sm md:text-[0.945rem] rounded-2xl outline-none focus:border-primary block w-full ps-8 p-2.5 h-11 md:h-12"
              placeholder="Search by location"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
          <Property />
          <Property />
          <Property />
          <Property />
          <Property />
          <Property />
        </div>
        <div className="text-[#102137] hidden md:block text-[1.125rem] mt-20">
          <span className=" font-semibold bg-[#FAF6FF] p-2 rounded-[7px] mb-4 inline-block">
            Key Benefits:
          </span>
          <ul className="list-disc marker:text-primary pl-5">
            {KEYBENEFITS.map((benefit) => (
              <li className="" key={benefit.id}>
                <p>
                  <span className="font-semibold">{benefit.title}:</span>{" "}
                  {benefit.content}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Properties;
