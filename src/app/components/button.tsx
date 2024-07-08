import { PrismicLink } from "@prismicio/react";

const Button = ({ link, text, filled }): JSX.Element => {
  return (
    <PrismicLink 
      className={`px-3 py-2 w-full text-center border ${filled ? "bg-text-gray-on-white hover:bg-white text-white hover:text-text-gray-on-white" : "bg-white text-text-gray-on-white"}`} 
      field={link}>
      {text}
    </PrismicLink>
  );
};

export default Button;
