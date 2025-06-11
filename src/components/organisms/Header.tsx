import Image from "next/image";

const Header = () => {
  return (
    // Header container with space between logo and any potential right-side content
    <header className="flex justify-between items-center py-5">
      {/* Left section: Logo and branding */}
      <div className="flex items-center gap-2">
        {/* Display logo image */}
        <Image src="/images/logo.png" alt="logo" width={100} height={100} />
      </div>
    </header>
  );
};

export default Header;
