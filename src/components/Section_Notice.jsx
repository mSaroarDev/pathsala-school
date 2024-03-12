import { Link } from "lucide-react";
import NoticeCard from "./NoticeCard";

const Section_Notice = () => {
  return (
    <>
      <div className="col-span-12 lg:col-span-6">
        <div className="px-0">
          <div className="bg-white  rounded-lg shadow-md">
            <div className="w-full grid grid-cols-12 gap-x-5">
              <div className="col-span-12 text-[19px] font-semibold p-3 border-b-[1px] border-gray-200">
                সাম্প্রতিক বিজ্ঞপ্তি সমূহ
              </div>

              <div className="col-span-12 text-[19px] font-semibold border-gray-200 flex flex-col gap-3">
                <NoticeCard />
                <NoticeCard />
                <NoticeCard />
                <NoticeCard />
                <NoticeCard />
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

export default Section_Notice;
