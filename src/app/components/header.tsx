import Link from "next/link";

const Header = (): JSX.Element => {
  return (
    <div>
      <div>Ventana</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/product">Product</Link>
        <Link href="/company">Company</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;