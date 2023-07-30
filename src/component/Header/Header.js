import "./Header.scss";

// adding an image tag
import logo from "../../assets/Logo/BrainFlix-logo.svg";

// header component
function Header() {
  return (
    <section className="header">
      <div className="header__titleWrapper">
        <a href="">
          <img
            className="header__brainflixLogo"
            src={logo}
            alt="Brainflix-logo"
          />
        </a>
      </div>

      {/* creating a form for the search and upload */}
      <form className="header__form">
        <div className="header__inputWrapper">
          <input
            type="text"
            name="textSearch"
            className="header__input"
            placeholder="Search"
          ></input>

          {/* added div tag which contains the image as a background image*/}
          <img className="header__faceImg"></img>
        </div>
        <button className="header__button"> UPLOAD</button>

        {/* face image but only on tablet */}
        <img className="header__faceImgTablet"></img>
      </form>
    </section>
  );
}

export default Header;
