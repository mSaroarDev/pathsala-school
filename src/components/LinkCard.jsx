import { Link } from "lucide-react";

const LinkCard = ({ data }) => {
  const { image, link_text, link } = data;

  return (
    <>
      <div className="w-full flex items-center gap-3 p-5">
        <img
          src={image}
          className="w-[50px] h-[50px]"
          alt={`${link_text} Link`}
        />
        <div className="p-3 poppins-regular">
          <h2 className="text-[16px] font-bold">{link_text}</h2>
          <a
            href={link}
            target="_blank"
            title={`Visit ${link} in a New Tab`}
            className="text-gray-500 flex items-center gap-1 hover:underline"
          >
            <Link className="w-3 h-3" />
            <span className="text-[14px]">Visit Website</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default LinkCard;
