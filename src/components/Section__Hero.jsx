const Section__Hero = () => {
  return (
    <div className="w-full">
      <main className="px-5">
        <div className="_hero w-full relative h-[630px] flex items-center p-10">
          <div className="text-white z-40">
            <div className="flex flex-wrap items-center gap-5 w-fit bg-[#292929]/60 p-5">
              <div>
                <img src="/school.png" alt="" className="w-28 h-28" />
              </div>
              <div>
                <h1 className="font-medium text-[30px] lg:text-[50px]">
                  পাঠশালা এডুকেশন ম্যানেজমেন্ট
                </h1>
                <p className="text-[18px] lg:text-[20px] font-light">
                  দারুশা, পবা, রাজশাহী।
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Section__Hero;
