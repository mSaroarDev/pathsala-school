import YoutubeEmbed from "./YoutubeEmbeded";

const Section__NationalAunthem = () => {
  return (
    <div className="col-span-12 lg:col-span-6">
      <div className="px-0">
        <div className="bg-white p-7 rounded-lg shadow-md">
          <div className="w-full grid grid-cols-12 gap-x-5">
            <div className="col-span-12 text-[19px] font-semibold">
              জাতীয় সংগীত
            </div>

            <div className="col-span-12 mt-3">
              <YoutubeEmbed embedId="YvIzePXplgc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section__NationalAunthem;
