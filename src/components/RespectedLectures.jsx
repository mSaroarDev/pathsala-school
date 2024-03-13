import React from "react";

const RespectedLectures = ({ data }) => {
  const {
    whooseLecture,
    name,
    designation,
    school,
    address,
    lectureDescription,
  } = data;

  return (
    <>
      <section className="py-7">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-[25px] my-3 text-center font-bold">{`“${whooseLecture}”`}</h2>
          <div className="w-full bg-white rounded-xl shadow-md p-7">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-4">
                <img
                  src="/district_eduction_officer.png"
                  className="w-full h-auto"
                  alt="Head Teacher"
                />
              </div>
              <div className="col-span-12 lg:col-span-8 px-5">
                <p className="p-3 bg-brand/5 rounded-xl">
                  {lectureDescription}
                </p>

                <div className="flex flex-col items-end">
                  <h1 className="text-[24px] font-bold text-brand mt-5 mb-1">
                    জনাব {name}
                  </h1>
                  <p>
                    মাননীয় {designation}, {school}
                  </p>
                  <p>{address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RespectedLectures;
