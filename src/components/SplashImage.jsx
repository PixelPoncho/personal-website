// Imported Assets
import profile from "../assets/splash/profile.png";

const SplashImage = () => (
  <div className="splash-container">
    <div className="splash-text">
      <div className="poppins-regular splash-greeting">Hey there,</div>
      <h1 className="poppins-black splash-title">I'm Ines.</h1>
      <p className="poppins-light splash-subtitle">
        Just another developer looking to improve.
      </p>
    </div>
    <img src={profile} alt="Profile" className="splash-image" />
  </div>
);

export default SplashImage;
