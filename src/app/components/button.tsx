import { PrismicLink } from "@prismicio/react";
import { LinkField } from "@prismicio/types";

interface ButtonProps {
  link: LinkField;
  text: string;
  filled: boolean;
}

const Button = ({ link, text, filled }: ButtonProps): JSX.Element => {
  return (
    <PrismicLink 
      className={`px-8 py-1.5 w-full text-center border ${filled ? "bg-text-gray-on-white text-white" : ""}`} 
      field={link}>
      {text}
    </PrismicLink>
  );
};

export default Button;
