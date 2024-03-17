import React from "react";

const StudentCard = () => {
  return (
    <div className="bg-white p-3 grid grid-cols-12 w-full border-b-[1px] border-[#292929]/10">
      <div className="col-span-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      </div>
      <div className="col-span-3">Md Mizanur Rahaman</div>
      <div className="col-span-2">6</div>
      <div className="col-span-1">01</div>
      <div className="col-span-1">N/A</div>
      <div className="col-span-4 flex items-center justify-end gap-1">
        <a
          href={"/client/classes/class-6"}
          className="bg-brand/5 px-3 py-1 rounded-md  border-[1px] border-brand"
        >
          See Students
        </a>
      </div>
    </div>
  );
};

export default StudentCard;
