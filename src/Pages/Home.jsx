import { Suspense } from "react";
import { AboutRestaurant } from "../Components/AboutRestaurant";
import { Menus } from "../Components/Menus";
import { Quote } from "../Components/Quote";
import { RestaurantDetails } from "../Components/RestaurantDetails";
import { Reservation } from "../Components/Reservation";
import videoSrc from "../assets/VIDEOS/OXBO.mp4";
import img from "/Textures/4523.png";

export default function Home() {
    return (
        <div>
            <div style={{ backgroundImage: `url(${img})` }} className="bg-repeat">
                <div className="relative h-[45vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden bg-fixed mb-[5vh] mt-[11vh] sm:mt-[22vh] flex items-center justify-end ">
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute w-full h-full object-cover transform translate-x-0 translate-y-0"
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute right-2 hidden lg:flex justify-end text-white max-w-xs sm:max-w-sm lg:max-w-md">
                        <Reservation />
                    </div>
                    <button className="w-6/12 lg:hidden h-12 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-lg font-semibold rounded transition duration-300 hover:bg-orange-600">
                        Find a Table
                    </button>
                </div>

                <Suspense fallback={<h1>Loading...</h1>}>
                    {/* Suspended components can be added here */}
                </Suspense>

                <div >
                    <RestaurantDetails />
                    <Menus />
                    <div className="mb-10">
                        <AboutRestaurant />
                    </div>
                    <Quote />
                </div>
            </div>
        </div>
   );
}
