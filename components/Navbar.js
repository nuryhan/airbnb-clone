import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav">
      <Link href="/">
        <div className="logo">
          <img className="logo" src="/airbnb-logo.png" alt="logo" />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
