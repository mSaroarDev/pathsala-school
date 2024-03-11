const Section_HeadTeacher = () => {
  return (
    <>
      <div className="col-span-12 lg:col-span-6">
        <div className="px-0">
          <div className="bg-white p-7 rounded-lg shadow-md">
            <div className="w-full grid grid-cols-12 gap-x-5">
              <div className="col-span-12 text-[19px] font-semibold mb-4">
                প্রধান শিক্ষকের বানী
              </div>

              <div className="col-span-12 lg:col-span-4 mt-3 flex items-center justify-start lg:justify-center my-5 lg:hidden">
                <img
                  src="/district_eduction_officer.png"
                  alt="মোঃ নাসির উদ্দিন"
                  className="w-[250px] h-auto"
                />
              </div>

              <div className="col-span-12 lg:col-span-8">
                <h3 className="text-[20px] text-orange-600 font-semibold mb-1">
                  মোঃ নাসির উদ্দিন
                </h3>
                <p>
                  আমি প্রথমেই আন্তরিক ধন্যবাদ এবং কৃতজ্ঞতা জানাই যাঁদের দিক
                  নির্দেশনায় ২০২১ সালের জাতীয় শিক্ষানীতির আলোকে নিজস্ব website
                  চালু করে ডিজিটাল বাংলাদেশের স্বপ্ন...
                </p>
                <div className="text-left underline cursor-pointer mt-5">
                  View All
                </div>
              </div>

              <div className="col-span-12 lg:col-span-4 mt-3 hidden lg:flex items-center justify-center">
                <img
                  src="/district_eduction_officer.png"
                  alt="মোঃ নাসির উদ্দিন"
                  className="w-[250px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_HeadTeacher;
