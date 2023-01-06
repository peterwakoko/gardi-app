import Footer from "./Footer";
function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <i class="fa-solid fa-house-user"></i>Home
        </li>
        <li>
          <i class="fa-sharp fa-solid fa-hashtag"></i>Data Uploads
        </li>
        <li>
          <i class="fa-regular fa-bell"></i>Publications
        </li>
        <li>
          <i class="fa-regular fa-envelope"></i>Data visualisation
        </li>
        <li>
          <i class="fa-regular fa-bookmark"></i>FAQ
        </li>
        <li>
          <i class="fa-regular fa-rectangle-list"></i>More
        </li>
      </ul>
      <Footer />
    </div>
  );
}

export default Nav;
