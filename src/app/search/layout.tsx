import LargeScreenHeader from "../ui/search/LargeScreenHeader"
import MobileHeader from "../ui/search/MobileHeader"
import SideBar from "../ui/search/SideBar"

function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <div className="block md:hidden">
        <MobileHeader />
      </div>
      <div className="hidden md:block">
        <LargeScreenHeader />
      </div>

      <div className="md:flex md:flex-row">
        <div className="hidden md:block">
          <SideBar />
        </div>
        {children}
      </div>
    </div>
  );
}

export default layout