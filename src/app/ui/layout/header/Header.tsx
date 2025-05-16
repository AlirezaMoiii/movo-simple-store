import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";

function Header() {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopNav />
      </div>

      <div className="block md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}

export default Header;
