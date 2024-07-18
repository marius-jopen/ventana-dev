import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import AppHeader from "@/app/components/Header";

export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

const Header = ({ slice }: HeaderProps): JSX.Element => {

  const headerMenuItems: { menu_link: any; menu_label: any }[] = [];

  if (Array.isArray(slice.primary.header_menu) && slice.primary.header_menu.length > 0) {
    const menuObject = slice.primary.header_menu[0]; 

    /* Loop through possible menu link and label keys */
    for (let i = 1; i <= 5; i++) {
      const linkField = menuObject[`menu_link_${i}`];
      const labelField = menuObject[`menu_label_${i}`];

      if (linkField && labelField) {
        headerMenuItems.push({
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
    >
      <AppHeader logoLink={slice.primary.logo_svg} menuItems={headerMenuItems} />
    </section>
  );
};

export default Header;
