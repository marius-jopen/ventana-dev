import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <div>
      <div>Ventana</div>
      <div>
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