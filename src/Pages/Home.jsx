import { Suspense } from 'react';
import logo from "/New/Group 85.png";
import img from "/New/Home.png";
import img1 from "/New/facebook.png";
import img2 from "/New/instagram.png";
import img3 from "/New/twitter.png";

export default function Home({ modalContent }) {
    


    return (
        <div className="flex bg-cover relative min-h-screen bg-fixed bg-opacity-100" style={{ backgroundImage: `url(${img})` }}>
            <img src={logo} className="fixed w-[200px] md:w-[239px] h-[50px] md:h-[69px] mt-4 ml-4" alt="Logo" />
            
            
            <div className="flex flex-col items-center text-customWhite mx-auto lg:mt-16 mt-96">
                <h1 className="text-3xl tracking-widest">Welcome To </h1>
                <h1 className="text-5xl tracking-widest  mt-4">Fish N Dine</h1>

            
                {modalContent && (
                    <div className="flex flex-col items-center mx-8 md:mx-auto ">
                        {modalContent}
              </div>
              )}
                <h1 className="tracking-widest text-3xl underline underline-offset-8 mt-4">Address</h1>
                <p className="tracking-widest text-xl">Terminal Four Hounslow</p>
                <p className="tracking-widest text-xl">TW6 3AF</p>
                <p className="tracking-widest text-xl">United Kingdom</p>
                <p className="tracking-widest text-xl mt-4">TEL - +44 (0) 208759 7755</p>
                <p className="tracking-widest text-base md:text-xl">EMAIL - franky.rodrigues@hilton.com</p>
                <div className="flex flex-row object-contain mt-6 space-x-2">
                    <img src={img1} alt="Facebook" />
                    <img src={img2} alt="Instagram" />
                    <img src={img3} alt="Twitter" />
                </div>
                <h1 className="tracking-widest text-xl mt-8">Powered By</h1>
                <img src={logo} className="w-[230px] h-[60px] mt-4 mb-10 ml-4" alt="Powered By Logo" />
            </div>

           
            <Suspense fallback={<h1>Loading...</h1>}>
                {/* Suspended components can be added here */}
            </Suspense>
        </div>
    );
}
