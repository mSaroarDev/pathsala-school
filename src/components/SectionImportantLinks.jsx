// import { Link } from "lucide-react";
import important_links from "../dummy-data/ImportantLinks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LinkCard from "./LinkCard";

const Section_ImportantLinks = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="col-span-12">
        <div className="px-0">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full grid grid-cols-12 gap-x-5">
              <div className="col-span-12 text-[19px] font-semibold py-3 px-5 border-b-[1px] border-gray-200 bg-bgGray">
                গুরুত্বপুর্ণ সরকারী লিংকস
              </div>

              <div className="col-span-12 p-5 flex flex-col items-end lg:items-start justify-between">
                {/* main contens */}
                <div className="w-full px-10">
                  <Slider {...settings}>
                    {important_links &&
                      important_links.map((link, i) => (
                        <LinkCard data={link} key={i} />
                      ))}
                  </Slider>
                </div>
                {/* main contens end */}

                {/* <div className="col-span-12 mt-3 flex h-auto items-end justify-start">
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="transition-all duration-300">
                      আরো পড়ুন
                    </span>
                    <Link className="w-4 h-4" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_ImportantLinks;
