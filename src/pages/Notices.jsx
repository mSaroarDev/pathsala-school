import React from "react";
import PageBrodscrum from "../components/PageBroadscrum";
import NoticeCard from "../components/NoticeCard";

const NoticesPage = () => {
  return (
    <>
      <PageBrodscrum page_name="নোটিশ সমূহ" />

      <main className="w-full p-5 font-bold">
        <h1 className="text-[25px] font-bold my-5">
          সাম্প্রতিক বিজ্ঞপ্তি সমূহ
        </h1>

        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
      </main>
    </>
  );
};

export default NoticesPage;
