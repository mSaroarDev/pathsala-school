import { Link } from "lucide-react";

const Section_AboutUs = () => {
  return (
    <>
      <div className="col-span-12">
        <div className="px-0">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full grid grid-cols-12 gap-x-5">
              <div className="col-span-12 text-[19px] font-semibold p-3 border-b-[1px] border-gray-200">
                আমাদের সম্পর্কে
              </div>
              <div className="col-span-12 lg:col-span-4 p-5">
                <img
                  src="/about-image.jpg"
                  alt="about"
                  className="w-full h-auto"
                />
              </div>
              <div className="col-span-12 lg:col-span-8 p-5">
                <h3 className="text-[30px] text-orange-600 font-semibold">
                  স্বাগতম
                </h3>
                <h3 className="text-[20px] text-black mb-2">
                  পাঠশালা এডুকেশন ম্যনেজমেন্ট সিস্টেম
                </h3>
                <p className="text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio, omnis delectus? Reprehenderit ducimus voluptas illo
                  porro pariatur aperiam fugiat magnam doloremque velit nostrum
                  tempore, sapiente placeat cumque reiciendis praesentium
                  eveniet......
                </p>
              </div>

              <div className="col-span-12 p-5 flex items-center justify-end">
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <span className=" transition-all duration-300">আরো পড়ুন</span>
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

export default Section_AboutUs;
