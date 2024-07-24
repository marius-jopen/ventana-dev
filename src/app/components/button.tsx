import { PrismicLink } from "@prismicio/react";

const Button = ({ link, text, filled }: { link: string, text: string, filled: boolean }): JSX.Element => {
  return (
    <PrismicLink 
      className={`px-8 py-2 w-full text-center border ${filled ? "bg-text-gray-on-white text-white" : ""}`} 
      field={link}>
      {text}
    </PrismicLink>
  );
};

export default Button;
