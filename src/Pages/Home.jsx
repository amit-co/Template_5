import { Suspense } from "react";
import logo from "/New/Group 85.png";
import img from "/New/Home.png";
import img1 from "/New/facebook.png";
import img2 from "/New/instagram.png";
import img3 from "/New/twitter.png";
import img4 from "/New/house.png";
import img5 from "/New/contact.png";
import img6 from "/New/gift.png";
import img7 from "/New/hand-platter.png";
import img8 from "/New/images.png";
import img9 from "/New/info.png";
import img10 from "/New/instagram.png";
import img11 from "/New/map-pinned.png";
import img12 from "/New/notebook-pen.png";
import img13 from "/New/notepad-text.png";


export default function Home() {
    return (
        <div className="flex bg-cover " style={{ backgroundImage: `url(${img})` }}>
           
            
                        <img src={logo} className="w-[239px] h-[69px] mt-4 ml-4" />
                   
            <div className=" flex flex-col items-center text-customWhite  ml-44 mt-20  ">
                        <h1 className="text-3xl tracking-widest">Welcome To </h1>
                        <h1 className="text-5xl tracking-widest mb-4"> Fish N Dine</h1>
                        <p className="tracking-widest">Our Aim Is To Provide A Welcoming All-Day Experience </p>
                        <p className="tracking-widest">Rooted In Care For Our Customers, Staff , Produce And Land.</p>
                        <h1 className="tracking-widest text-3xl underline underline-offset-8 mt-4">Opening Time</h1>
                        <p className="tracking-widest text-xl mt-4">Monday To Friday</p>
                        <p className="tracking-widest text-xl">12Pm - 10Pm</p>
                        <p className="tracking-widest text-xl">Saturday & Sunday</p>
                        <p className="tracking-widest text-xl">2Pm - 12Am</p>
                        <button className="tracking-widest text-xl border px-4 py-2 mt-4">Find A Table</button>
                        <h1 className="tracking-widest text-3xl underline underline-offset-8 mt-4">Address</h1>
                        <p className="tracking-widest text-xl">Terminal Four Hounslow</p>
                        <p className="tracking-widest text-xl">TW6 3AF</p>
                        <p className="tracking-widest text-xl ">United Kingdom</p>
                        <p className="tracking-widest text-xl mt-4">TEL - +44 (0) 208759 7755</p>
                        <p className="tracking-widest text-xl">EMAIL - franky.rodrigues@hilton.com</p>
                        <div className="flex flex-row object-contain space-x-2">
                                <img src={img1} />
                                <img src={img2} />
                                <img src={img3} />
                        </div>
                        <h1 className="tracking-widest text-xl mt-4">Powered By</h1>
            </div>
                 <div className="flex flex-row  space-x-6">
                <img src={img4} className="w-[29px] h-[29px] object-contain" />
                <img src={img5} className="w-[29px] h-[29px] object-contain"/>
                <img src={img6} className="w-[29px] h-[29px] object-contain"/>
                <img src={img7} className="w-[29px] h-[29px] object-contain"/>
                <img src={img8} className="w-[29px] h-[29px] object-contain"/>
                <img src={img9} className="w-[29px] h-[29px] object-contain"/>
                <img src={img10} className="w-[29px] h-[29px] object-contain"/>
                <img src={img11} className="w-[29px] h-[29px] object-contain"/>
                <img src={img12} className="w-[29px] h-[29px] object-contain"/>
                <img src={img13} className="w-[29px] h-[29px] object-contain"/>
            </div>

                <Suspense fallback={<h1>Loading...</h1>}>
                    {/* Suspended components can be added here */}
                </Suspense>

               
            
        </div>
   );
}
