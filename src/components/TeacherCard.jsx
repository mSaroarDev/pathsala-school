import { PhoneOutgoing } from "lucide-react";

const TeacherCard = ({ data, custom_classes }) => {
  const { name, designation, school_name, mobile_no, profile_photo } = data;

  return (
    <>
      <div
        className={`h-[300px] flex flex-col items-center p-7 border-[1px] border-gray-300 rounded-lg ${custom_classes}`}
      >
        <img src={profile_photo} alt={name} className="h-[140px] w-auto" />
        <h2 className="font-bold text-[19px] mt-3 mb-1">{name}</h2>
        <h5 className="text-gray-700">{designation}</h5>
        <h5 className="text-gray-700">{school_name}</h5>
        <h5 className="text-gray-700 flex items-center gap-1">
          <PhoneOutgoing className="h-4 w-4" />
          <span>{mobile_no}</span>
        </h5>
      </div>
    </>
  );
};

export default TeacherCard;
