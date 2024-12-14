import navLogo from "../assets/react.svg";

interface INavPage {
  label: string;
  route: string;
}
const navPages: INavPage[] = [
  {
    label: "Home",
    route: "#",
  },
  { label: "About", route: "#" },
  {
    label: "Contact",
    route: "#",
  },
];
const Navbar = () => {
  const handleSearch = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    alert("searched results");
  };

  return (
    <header className="">
      {/* Top Nav */}
      <nav className="bg-slate-950 text-white flex justify-center items-center h-8">
        This app was build to practice tailwind and react
      </nav>
      {/* Main Nav */}
      <nav className="flex justify-between items-center w-full md:h-[5rem] bg-slate-800 text-xl text-white p-3">
        {/*Nav Logo*/}
        <img className="md:w-[3%] w-auto" src={navLogo} alt="nav-logo" />
        {/*Nav Pages*/}
        <div className="md:w-11 w-auto">
          <ul className="flex space-x-3">
            {navPages.map((page) => (
              <li className="hover:underline">
                <a href={page.route}>{page.label}</a>
              </li>
            ))}
          </ul>
        </div>
        {/*Search Area*/}
        <form className="space-x-3">
          <input
            className="rounded-sm placeholder-slate-600 placeholder:px-2 placeholder:capitalize"
            type="text"
            name="search"
            id="search"
            placeholder="search"
          />
          <button
            onClick={(e) => handleSearch(e)}
            type="submit"
            className="border-2 rounded-sm px-2 hover:bg-white hover:text-slate-800 hover:cursor-pointer"
          >
            Submit
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Navbar;