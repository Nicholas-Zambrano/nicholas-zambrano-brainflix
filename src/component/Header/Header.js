
import "./Header.scss";

// adding an image tag

import logo from "../../assets/Logo/BrainFlix-logo.svg";
import faceImg from "../../assets/Images/Mohan-muruge.jpg"

function Header() {
  return (
    <section className="header">
      <div className="header__titleWrapper">
        <a href="">
          <img className="header__brainflixLogo" src={logo} alt="Brainflix-logo" />
        </a>
      </div>

      {/* creating a form  */}
      <form className="header__form">

        <div className="header__inputWrapper">
        <input
          type="text"
          name="textSearch"
          className="header__input"
          placeholder="Search"
        ></input>

        <img className="header__faceImg" ></img>

        </div>
        {/* <br></br> */}
        <button className="header__button"> UPLOAD</button>

        <img className="header__faceImgTablet"></img>
      </form>
    </section>
  );
}

export default Header;
