import Link from "next/link";

const Header = (): JSX.Element => {
  return (
    <div className="flex justify-between">
      <div>Ventana</div>
      
      <div className="flex gap-4 text-style-16">
        <Link href="/">Home</Link>
        <Link href="/product">Product</Link>
        <Link href="/company">Company</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;