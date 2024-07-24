import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <div className="flex justify-between pb-4 pt-3 mx-8 text-style-16 mt-[-55px] text-lightGray border-t border-text-gray-on-black">
      <div>Ventana</div>
      
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/product">Product</Link>
        <Link href="/company">Company</Link>
        <Link href="/legal">Legal</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Footer;