import img1 from "/icons/facebook.png";
import img2 from "/icons/instagram.png";
import img3 from "/icons/twitter.png";
import logo from "/dark_logo.png";
import { useNavigate, Link } from "react-router-dom";
import img from "/Textures/4523.png"

export function Footer() {
    const navigate = useNavigate();
    return (
        <div className="bg-repeat px-3 py-[8vh] space-x-3 justify-between sm:justify-around text-white flex"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="hidden md:block">
                <img
                    src={logo}
                    className="w-[190px]"
                    alt="Company Logo"
                    onClick={() => navigate('/')}
                />
            </div>

            <div className="text-xl text-customBrown hidden sm:block">
                <p className=" underline font-bold mb-5">ADDRESS</p>
                <p>Terminal Four</p>
                <p>Hounslow</p>
                <p>TW6 3AF</p>
                <p>United Kingdom</p>
                <p>FREE ON-SITE PARKING</p>
            </div>

            <div>
                
                <div className="text-customBrown text-xl">
                    <p className=" underline font-bold mb-5">CONTACT US</p>
                    <Link to="tel:+442087597755">+44 (0) 208759 7755</Link>
                    <p><Link to="gmail:franky.rodrigues@hilton.com">franky.rodrigues@hilton.com</Link></p>
                </div>
                <p className="text-cutomOrange mb-5">OXBO-ReserveOcean.com</p>
            </div>

            <div className=" text-xl">
                <h3 className=" text-customBrown underline font-bold mb-5 ml-3">SOCIALS</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/yourprofile">
                    <img src={img1 } />
                </a>
                <a href="https://www.instagram.com/yourprofile">
                    <img src={img2} />
                </a>
                <a href="https://twitter.com/yourprofile">
                    <img src={img3} />
                </a>
              </div>
            </div>
        </div>
    );
}
