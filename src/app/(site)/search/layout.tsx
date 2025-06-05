import SideBar from "../../ui/search/SideBar";
import SearchPagination from "../../ui/search/SearchPagination";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <div className="hidden md:block">
          <SideBar />
        </div>
        {children}
      </div>
      <SearchPagination />
    </div>
  );
}

export default layout;
