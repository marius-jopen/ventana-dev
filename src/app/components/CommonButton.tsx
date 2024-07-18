import { PrismicNextLink } from "@prismicio/next";
import { LinkField, KeyTextField } from "@prismicio/client";

interface ButtonProps {
  link: LinkField;
  label: KeyTextField;
  filled: boolean;
  width: string;
}

const CommonButton: React.FC<ButtonProps> = ({ link, label, filled, width }) => {
  return (
    <button
        className={`px-8 py-2 mt-4 ${width} text-center border whitespace-nowrap ${filled ? "bg-text-gray-on-white hover:bg-white text-white hover:text-text-gray-on-white" : ""}`}
    >
      <PrismicNextLink field={link}>{label}</PrismicNextLink>
    </button>
  );
};

export default CommonButton;
