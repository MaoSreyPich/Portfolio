function Navbar({ page, setPage }) {
  const pages = [
    "About",
    "Resume",
    "Portfolio",
    "Contact",
  ];

  return (
    <nav className="navbar">
      {pages.map((item) => (
        <button
          key={item}
          className={page === item ? "active" : ""}
          onClick={() => setPage(item)}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;