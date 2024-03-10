const Section_AboutUs = () => {
  return (
    <>
      <main className="col-span-12">
        <div className="px-0 lg:px-5">
          <div className="bg-white p-7 rounded-lg shadow-md">
            <div className="w-full grid grid-cols-12 hind-siliguri-regular gap-x-5">
              <div className="col-span-12 text-[19px] font-semibold">
                আমাদের সম্পর্কে
              </div>
              <div className="col-span-12 lg:col-span-4 mt-3">
                <img
                  src="/about-image.jpg"
                  alt="about"
                  className="w-full h-auto"
                />
              </div>
              <div className="col-span-12 lg:col-span-8">
                <h3 className="text-[30px] text-orange-600 font-semibold">
                  স্বাগতম
                </h3>
                <h3 className="text-[20px] text-black mb-2">
                  পাঠশালা এডুকেশন ম্যনেজমেন্ট সিস্টেম
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio, omnis delectus? Reprehenderit ducimus voluptas illo
                  porro pariatur aperiam fugiat magnam doloremque velit nostrum
                  tempore, sapiente placeat cumque reiciendis praesentium
                  eveniet......
                </p>
                <div className="text-right underline cursor-pointer">
                  View All
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Section_AboutUs;
