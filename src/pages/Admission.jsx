import React from "react";
import PageBroadscrum from "../components/PageBroadscrum";

const AdmissionPage = () => {
  return (
    <>
      <PageBroadscrum page_name="অ্যাডমিশন" />

      <section className="py-20">
        <main className="px-5 text-center flex items-center justify-center">
          <div className="bg-white p-10 rounded-xl shadow-md flex flex-col items-center justify-center">
            <h1 className="text-[25px] font-bold">অ্যাডমিশন</h1>

            <img
              src="/admission.jpg"
              alt="Admissoin"
              className="w-[300px] mt-5"
            />

            <p className="text-[20px] mt-5 mb-3">
              পাঠশালা স্কুল ম্যানেজমেন্ট এ অ্যাডমিশন নিতে <br /> সরাসরি প্রধান
              শিক্ষকের সাথে যোগাযোগ করুন <br /> অথবা নিচের {`"অ্যডমিশন নিন"`}{" "}
              বাটনে ক্লিক করে ফরমটি পুরন করুন।
            </p>

            <button className="w-full max-w-sm bg-primary text-white p-3 rounded-md">
              অ্যডমিশন নিন
            </button>
          </div>
        </main>
      </section>
    </>
  );
};

export default AdmissionPage;
