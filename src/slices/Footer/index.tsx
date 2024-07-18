import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import AppFooter from "@/app/components/footer";

export type FooterProps = SliceComponentProps<Content.FooterSlice>;

const Footer = ({ slice }: FooterProps): JSX.Element => {
  const menuItems: { menu_link: any; menu_label: any }[] = [];

  if (Array.isArray(slice.primary.menu) && slice.primary.menu.length > 0) {
    const menuObject = slice.primary.menu[0]; 

    /* Loop through possible menu link and label keys */
    for (let i = 1; i <= 5; i++) {
      const linkField = menuObject[`menu_link_${i}`];
      const labelField = menuObject[`menu_label_${i}`];

      if (linkField && labelField) {
        menuItems.push({
          menu_link: linkField,
          menu_label: labelField,
        });
      }
    }
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white"
    >
      <AppFooter 
        logoLink={slice.primary.logo_svg} 
        menuItems={menuItems} 
        copyright={slice.primary.copyright}       
      />
    </section>
  );
};

export default Footer;
