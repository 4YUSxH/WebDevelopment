import heroImg from "../assets/heroimage.jpg";
import HeroCenter from "./HeroCenter";

function Hero() {
  return (
    <div className="herocontainer">
        <img src={heroImg} alt="" />
        <HeroCenter />
    </div>
  )
}

export default Hero
