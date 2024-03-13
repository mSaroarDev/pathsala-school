import React from "react";
import PageBroadscrum from "../components/PageBroadscrum";
import teachers from "../dummy-data/teacher";
import TeacherCard from "../components/TeacherCard";

const ManagingCommittee = () => {
  return (
    <>
      <PageBroadscrum page_name="ম্যানেজিং কমিটির সদস্যবৃন্দ" />

      <section className="my-10">
        <main className="px-5">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="text-[19px] font-semibold py-3 px-5 border-b-[1px] border-gray-200 bg-bgGray">
              ম্যানেজিং কমিটির সদস্যবৃন্দ
            </div>

            <div className="flex flex-wrap items-start justify-center gap-5 py-5">
              {teachers.length > 0 ? (
                teachers.map((teacher, i) => (
                  <TeacherCard
                    key={i}
                    data={teacher}
                    custom_classes="w-[300px]"
                  />
                ))
              ) : (
                <p>দুঃখিত! ডাটাবেজে কোন কমিটির তথ্য আপডেট করা হয়নি। </p>
              )}
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default ManagingCommittee;
