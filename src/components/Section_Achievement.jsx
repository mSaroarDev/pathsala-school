const Section_Achievement = () => {
  return (
    <>
      <div className="col-span-12">
        <div className="px-0">
          <div className="bg-white p-7 rounded-lg shadow-md">
            <div className="w-full grid grid-cols-12 gap-x-5">
              <div className="col-span-12 text-[19px] flex items-center justify-around">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="font-bold text-[60px]">100</h2>
                  <p>মোট শিক্ষার্থী</p>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="font-bold text-[60px]">10</h2>
                  <p>মোট শিক্ষকগন</p>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="font-bold text-[60px]">5</h2>
                  <p>মোট অফিস স্টাফ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_Achievement;
