import { Link } from "lucide-react";
import EventCard from "./EventCard";

const Section_Events = () => {
  return (
    <>
      <div className="col-span-12 lg:col-span-6">
        <div className="px-0">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full grid grid-cols-12 gap-x-5">
              <div className="col-span-12 text-[19px] font-semibold py-3 px-5 border-b-[1px] bg-bgGray border-gray-200">
                সাম্প্রতিক ইভেন্ট সমূহ
              </div>

              <div className="col-span-12 text-[19px] font-semibold border-gray-200 flex flex-col gap-3 p-5">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
              </div>

              <div className="col-span-12 p-5 flex items-center justify-end">
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <span className=" transition-all duration-300">
                    সবগুলো নোটিশসমূহ
                  </span>
                  <Link className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_Events;
