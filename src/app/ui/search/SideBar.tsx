import SearchFilters from "./SearchFilters"
function SideBar() {
  return (
    <div className="h-screen w-72 border hidden md:block">
      <SearchFilters />
    </div>
  );
}

export default SideBar