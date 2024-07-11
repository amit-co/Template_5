import { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { Link, useNavigate} from "react-router-dom";
import { GrGallery } from "react-icons/gr";
const pdfDownloadLink = "/Pdf/OXBO-Breakfast Menus.pdf";
import PropTypes from 'prop-types';
import img1 from "/Textures/4525.png";
import img2 from "/Textures/Group 40.png";
import img3 from "/Textures/Group 41.png";
import img4 from "/Textures/Group 42.png";
import img5 from "/Textures/Group 43.png";


export default function VenueTemplate({ venueInfo }) {
  const navigate = useNavigate()
  const [menuDailog,setMenuDialog] = useState(false)
  const [galleryDailog,setGalleryDialog] = useState(false)
  function clickHandler(){
    window.location.href = "https://reserve-ocean-website.vercel.app/restaurantDetail/Chon%20Thai%20Cuisine"
  }
  return (
        <>
     
                                <div
                                  className="sm:h-[70vh] md:h-[80vh] lg:h-[95vh] h-[60vh] bg-cover bg-fixed"
                                  style={{ backgroundImage: `url(${venueInfo.image})` }}
                                >
                                </div>
              <div className="bg-repeat container relative mt-10 mx-auto" style={{ backgroundImage: `url(${img1})` }}>
                              <h1 className="sm:text-5xl text-4xl font-bold mb-4 text-center">
                                {venueInfo.venueType}
                              </h1>
                              <div className="h-[4px] bg-gradient-to-r from-transparent via-gray-400  to-transparent my-4 "></div>

                              <a href={pdfDownloadLink}>
                                <svg onMouseEnter={()=>setMenuDialog(true)} onMouseLeave={()=>setMenuDialog(false)} className="animate-bounce sm:text-4xl text-customGray text-3xl w-10 h-10 absolute top-4 right-10">
                                  <FaDownload />
                                </svg>
                              </a>
                              <a href={venueInfo.button.link}>
                              <svg onClick={()=>navigate("/gallery")} onMouseEnter={()=>setGalleryDialog(true)} onMouseLeave={()=>setGalleryDialog(false)} className="animate-bounce sm:text-4xl text-customGray text-3xl cursor-pointer w-10 h-10 absolute top-4 left-10">
                                  <GrGallery />
                              </svg>
                              </a>
                              <h1 className={`${menuDailog?"md:block hidden":"hidden"} border top-12 right-10 absolute w-fit  px-10 py-3  bg-orange-500 text-white font-semibold shadow-2xl sm:text-xl rounded-lg`}>
                                click the button to download our menu
                              </h1>
                              <h1 className={`${galleryDailog?"md:block hidden":"hidden"} border top-12 left-10 absolute w-fit px-10 py-3  bg-orange-500 text-white font-semibold shadow-2xl sm:text-xl rounded-lg`}>
                                click the button to visit Gallery
                              </h1>
                              <div className="flex justify-center">
                                  <div className="bg-no-repeat h-72 rounded-md sm:ml-4 sm:mt-4 lg:w-[20vw] py-6 bg-cover " style={{ backgroundImage: `url(${img2})` }}></div>
                                  <div className="bg-no-repeat h-72 rounded-md sm:ml-4 sm:mt-4 lg:w-[20vw] py-6 bg-cover " style={{ backgroundImage: `url(${img3})` }}></div>
                                  <div className="bg-no-repeat h-72 rounded-md sm:ml-4 sm:mt-4 lg:w-[20vw] py-6 bg-cover " style={{ backgroundImage: `url(${img4})` }}></div>
                                  <div className="bg-no-repeat h-72 rounded-md sm:ml-4 sm:mt-4 lg:w-[20vw] py-6 bg-cover " style={{ backgroundImage: `url(${img5})` }}></div>
                              </div>
                  
                              <div className="text-center mt-10">
                                          <h2 className="text-3xl font-bold">Location</h2>
                                          <p className="font-medium text-2xl">{venueInfo.location.placeLine1}</p>
                                          <p className="font-medium text-2xl">{venueInfo.location.placeLine2}</p>
                                          <p className="font-medium text-2xl">{venueInfo.location.phone}</p>
                                          <Link to={`${venueInfo.location.email}`} className="font-medium text-2xl">
                                          {venueInfo.location.email}
                                          </Link>
                              </div>
                              <div className="text-center mt-10">
                                <h2 className="text-3xl font-bold">
                                  About Our {venueInfo.venueType}
                                          </h2>
                                          <p className="font-medium text-2xl">{venueInfo.description}</p>
                              </div>
              <div className="w-fit mx-auto">
                  <button
                      onClick={clickHandler}
                      className="text-customWhite text-lg mt-5 mb-5 tracking-widest rounded-lg w-fit px-8 py-2 font-semibold bg-customBrown2 transition-all cursor-pointer duration-300 hover:bg-black"
                       >
                      Find A Table
                  </button>
                              </div>
              </div>
      
        </>
  );
}

VenueTemplate.propTypes = {
    venueInfo: PropTypes.shape({
        image: PropTypes.string.isRequired,
        button: PropTypes.object.isRequired,
        link: PropTypes.string.isRequired,
        venueType: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};
