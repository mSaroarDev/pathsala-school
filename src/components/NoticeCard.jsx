import { CalendarDays } from "lucide-react";

const NoticeCard = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="pt-4 pb-4 pl-4">
        <div className="h-[65px] w-[65px] rounded-lg border-[1px] border-[#e63757] overflow-hidden">
          <div className="bg-[#e63757] text-white flex items-center justify-center text-[13px] p-[2px] poppins-bold font-bold">
            Jan
          </div>
          <h3 className="text-[28px] text-[#5e6e82] flex items-center justify-center poppins-bold">
            10
          </h3>
        </div>
      </div>
      <div className="text-left pl-2 pt-2 pb-2 pr-5">
        <h2 className="text-[#292929] text-[15px]">
          আজ ০২ জানুয়ারি ২০২৪ সাল রোজ মঙ্গলবার অভিভাবকদের অনুরোধে ৪র্থ ঘন্টার
          পরে (২.৩৫ ঘটিকা) ছুটি হবে। আগামীকাল ০৩ জানুয়ারি ২০২৪ সাল রোজ বুধবার
          হতে ৬ষ্ঠ হতে ৮ম শ্রেণির ছুটি হবে বিকাল ৪.১৫ ঘটিকায় এবং ৯ম ও ১০ম
          শ্রেণির ছুটি হবে বিকাল ৫.০০ ঘটিকায়
        </h2>
        <hr />
        <p className="flex items-center gap-2 text-[13px]">
          <CalendarDays className="w-3 h-3" />
          <span className="poppins-regular">10 January, 2024 at 02.30 PM</span>
        </p>
      </div>
    </div>
  );
};

export default NoticeCard;
