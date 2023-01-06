function Header() {
  return (
    <div className="header-container">
      <h1>GERDHI</h1>
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="search" className="search" />
      <div className="avatar"></div>
      <span>Logout</span>
    </div>
  );
}

export default Header;
