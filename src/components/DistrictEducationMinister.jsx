import { Link } from "lucide-react";

const Section_DistrictEductionMinister = () => {
  return (
    <>
      <div className="col-span-12">
        <div className="px-0">
          <div className="bg-white rounded-lg shadow-md">
            <div className="w-full grid grid-cols-12 gap-x-5">
              <div className="col-span-12 text-[19px] font-semibold mb-4 p-3 border-b-[1px] border-gray-200">
                জেলা শিক্ষা অফিসারের বানী
              </div>

              <div className="col-span-12 lg:col-span-4 flex items-center justify-start my-5 lg:hidden p-5">
                <img
                  src="/district_eduction_officer.png"
                  alt="মোঃ নাসির উদ্দিন"
                  className="w-[250px] h-auto block lg:hidden"
                />
              </div>

              <div className="col-span-12 lg:col-span-8 p-5">
                <h3 className="text-[30px] text-orange-600 font-semibold">
                  মোঃ নাসির উদ্দিন
                </h3>
                <h3 className="text-[20px] text-black mb-2">
                  জেলা শিক্ষা অফিসার, রাজশাহী।
                </h3>
                <p className="text-justify">
                  আমি প্রথমেই আন্তরিক ধন্যবাদ এবং কৃতজ্ঞতা জানাই যাঁদের দিক
                  নির্দেশনায় ২০২১ সালের জাতীয় শিক্ষানীতির আলোকে নিজস্ব website
                  চালু করে ডিজিটাল বাংলাদেশের স্বপ্ন পূরণে একধাপ এগিয়ে কাটাখালী
                  উচ্চ বালিকা বিদ্যালয়টি । এখন থেকে শিক্ষা প্রতিষ্ঠানের নিজস্ব
                  website এর মাধ্যমে শিক্ষার্থী ভর্তি, একাডেমীক ক্যালেন্ডার,
                  ক্লাস রুটিন, শিক্ষকগণের তথ্য, শিক্ষার্থী তথ্য, পরীক্ষার ফলাফল,
                  শিক্ষার্থীদের অগ্রগতি প্রতিবেদন ইত্যাদি অতি সহজেই অভিভাবক ও
                  শিক্ষার্থীরা ঘরে বসেই জানতে পারবে।
                </p>
                <div className="col-span-12 p-5 flex items-center justify-end">
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className=" transition-all duration-300">
                      আরো পড়ুন
                    </span>
                    <Link className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-4 mt-3 flex items-center justify-center p-5">
                <img
                  src="/district_eduction_officer.png"
                  alt="মোঃ নাসির উদ্দিন"
                  className="w-[250px] h-auto hidden lg:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_DistrictEductionMinister;
