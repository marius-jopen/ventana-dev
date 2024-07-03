import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <div className="flex justify-between">
      <div>Ventana</div>
      
      <div className="flex gap-4 text-style-16 text-text-gray-on-black">
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