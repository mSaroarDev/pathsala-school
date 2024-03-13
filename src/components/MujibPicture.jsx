const Section__MujibCornerPicture = () => {
  return (
    <div className="col-span-12 lg:col-span-6">
      <div className="px-0">
        <div className="bg-white rounded-lg shadow-md">
          <div className="w-full h-full grid grid-cols-12 gap-x-5">
            <div className="col-span-12 text-[19px] font-semibold py-3 px-5 border-b-[1px] border-gray-200">
              মুজিব কর্নার
            </div>

            <div className="col-span-12 p-5">
              <img
                src="/mujib.jpg"
                alt="বঙ্গবন্ধু শেখ মুজিবুর রহমান"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section__MujibCornerPicture;
