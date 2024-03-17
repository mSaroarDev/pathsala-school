import React from "react";
import PageBrodscrum from "../components/PageBroadscrum";
import EventCard from "../components/EventCard";

const EventsPage = () => {
  return (
    <>
      <PageBrodscrum page_name="নোটিশ সমূহ" />

      <main className="w-full p-5 font-bold">
        <h1 className="text-[25px] font-bold my-5">সাম্প্রতিক ইভেন্ট সমূহ</h1>

        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </main>
    </>
  );
};

export default EventsPage;
