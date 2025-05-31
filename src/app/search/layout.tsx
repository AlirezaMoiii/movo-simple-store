
import SideBar from "../ui/search/SideBar"

function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <div className="hidden md:block">
          <SideBar />
        </div>
        {children}
      </div>
    </div>
  );
}

export default layout