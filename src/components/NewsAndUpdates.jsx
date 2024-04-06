import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@/utils/svgs";
import { NEWSANDUPDATES } from "@/constants";

const NewsAndUpdates = () => {
  return (
    <section className="pb-4 pt-[90px] lg:pt-[115px]">
      <div className="custom-container">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-2xl md:text-[2rem] lg:text-[2.75rem] text-[#102137]">
            News and Updates
          </p>
          <div className="flex gap-4">
            <button className="h-[53px] w-[53px] md:h-[75px] md:w-[75px] lg:h-[100px] lg:w-[100px] flex items-center justify-center border rounded-full border-[#19182518]">
              <ArrowLeft className="scale-50 md:scale-75 lg:scale-100" />
            </button>
            <button className="h-[53px] w-[53px] md:h-[75px] md:w-[75px] lg:h-[100px] lg:w-[100px] flex items-center justify-center border rounded-full border-[#19182518] bg-primary text-white">
              <ArrowRight className="scale-50 md:scale-75 lg:scale-100" />
            </button>
          </div>
        </div>
      </div>

      <ul className="custom-container flex items-center overflow-y-hidden overflow-x-auto gap-4 md:gap-8 lg:gap-[4.5rem] scroll-bar pb-1 my-11">
        {NEWSANDUPDATES.map((news) => (
          <li
            key={news.id}
            className="w-full flex-none flex flex-col max-w-[316px] h-[381px] rounded-[15.04px] bg-white shadow-md text-[#102137]"
          >
            <div className="h-[182.7px] flex-none w-full rounded-[15.04px] overflow-hidden">
              <Image
                src={news.img}
                alt={news.title + "-image"}
                height={182.7}
                width={315.59}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="p-5 flex flex-col h-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5 text-[0.9375rem]">
                  <Image
                    src={news.authorPhoto}
                    width={35.49}
                    height={35.49}
                    alt="news logo"
                  />
                  <span>{news.author}</span>
                </div>
                <div className="text-xs text-[#4c4c4c]">{news.datetime}</div>
              </div>
              <p className="text-primary text-[0.945rem] mt-auto font-medium truncate">
                Objectively restore ubiquitous strategic
              </p>
              <p className="text-[0.8125rem] line-clamp-3 leading-4 mt-3">
                {news.content}
              </p>
              <Link
                href={"/"}
                className="font-bold text-[0.8125rem] text-primary hover:underline"
              >
                Read more
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="custom-container">
        <Link
          href={"/"}
          className="btn-primary w-44 text-center py-4 block mx-auto"
        >
          Veiw More
        </Link>
      </div>
    </section>
  );
};

export default NewsAndUpdates;
