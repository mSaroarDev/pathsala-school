import { ChevronsRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const PageBroadscrum = ({ page_name }) => {
  return (
    <>
      <section className="py-10 bg-brand/5 flex items-center justify-center gap-5 text-[25px] font-bold mt-20">
        <Link to="/">হোম</Link> <ChevronsRight /> {page_name}
      </section>
    </>
  );
};

export default PageBroadscrum;
