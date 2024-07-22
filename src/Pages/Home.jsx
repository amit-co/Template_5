import { Suspense } from 'react';
import logo from "/New/Group 85.png";
import img from "/New/Home.png";
import img1 from "/New/facebook.png";
import img2 from "/New/instagram.png";
import img3 from "/New/twitter.png";








export default function Home({ modalContent }) {
    


    return (
        <div className="flex bg-cover relative min-h-screen bg-fixed bg-opacity-100" style={{ backgroundImage: `url(${img})` }}>
            <img src={logo} className="fixed w-[239px] h-[69px] mt-4 ml-4" alt="Logo" />
            
            
            <div className="flex flex-col items-center text-customWhite mx-auto mt-20">
                <h1 className="text-3xl tracking-widest">Welcome To </h1>
                <h1 className="text-5xl tracking-widest mb-4">Fish N Dine</h1>
                <p className="tracking-widest">Our Aim Is To Provide A Welcoming All-Day Experience</p>
                <p className="tracking-widest">Rooted In Care For Our Customers, Staff, Produce And Land.</p>
                <h1 className="tracking-widest text-3xl underline underline-offset-8 mt-4">Opening Time</h1>
                <p className="tracking-widest text-xl mt-4">Monday To Friday</p>
                <p className="tracking-widest text-xl">12Pm - 10Pm</p>
                <p className="tracking-widest text-xl">Saturday & Sunday</p>
                <p className="tracking-widest text-xl">2Pm - 12Am</p>

                <button className="tracking-widest text-xl border px-4 py-2 mt-4" >Find A Table</button>
                {modalContent && (
                    <div className="flex flex-col items-center mx-auto ">
                <p className="tracking-widest">Our Aim Is To Provide A Welcoming All-Day Experience</p>
                <p className="tracking-widest">Rooted In Care For Our Customers, Staff, Produce And Land.</p>
                <h1 className="tracking-widest text-3xl underline underline-offset-8 mt-4">Opening Time</h1>
                <p className="tracking-widest text-xl mt-4">Monday To Friday</p>
                <p className="tracking-widest text-xl">12Pm - 10Pm</p>
                <p className="tracking-widest text-xl">Saturday & Sunday</p>
                <p className="tracking-widest text-xl">2Pm - 12Am</p>
                
                <button className="tracking-widest text-xl border px-4 py-2 mt-4" >Find A Table</button>
             
              </div>
              )}
                <h1 className="tracking-widest text-3xl underline underline-offset-8 mt-4">Address</h1>
                <p className="tracking-widest text-xl">Terminal Four Hounslow</p>
                <p className="tracking-widest text-xl">TW6 3AF</p>
                <p className="tracking-widest text-xl">United Kingdom</p>
                <p className="tracking-widest text-xl mt-4">TEL - +44 (0) 208759 7755</p>
                <p className="tracking-widest text-xl">EMAIL - franky.rodrigues@hilton.com</p>
                <div className="flex flex-row object-contain space-x-2">
                    <img src={img1} alt="Facebook" />
                    <img src={img2} alt="Instagram" />
                    <img src={img3} alt="Twitter" />
                </div>
                <h1 className="tracking-widest text-xl mt-4">Powered By</h1>
                <img src={logo} className="w-[230px] h-[50px] mt-4 ml-4" alt="Powered By Logo" />
            </div>

           
            <Suspense fallback={<h1>Loading...</h1>}>
                {/* Suspended components can be added here */}
            </Suspense>
        </div>
    );
}
