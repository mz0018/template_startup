type NavbarProps = {
  isScrolling: boolean;
};

export const Navbar = ({ isScrolling }: NavbarProps) => {
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolling
          ? "border-2 border-gray-700"
          : "border border-none"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold">Logo</h1>

        <span>{isScrolling ? "Scrolling" : "Not scrolling"}</span>
      </div>
    </nav>
  );
};