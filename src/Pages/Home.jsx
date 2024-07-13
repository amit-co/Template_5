import React, { useState, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "/New/Group 85.png";
import img from "/New/Home.png";
import img1 from "/New/facebook.png";
import img2 from "/New/instagram.png";
import img3 from "/New/twitter.png";
import home from "/New/house.png";
import contact from "/New/contact.png";
import giftvoucher from "/New/gift.png";
import privatedining from "/New/hand-platter.png";
import gallery from "/New/images.png";
import about from "/New/info.png";
import venue from "/New/map-pinned.png";
import booknow from "/New/notebook-pen.png";
import menu from "/New/notepad-text.png";

export default function Home() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Open the modal
    const openModal = () => setIsModalOpen(true);

   

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
            <div className="relative w-[200px] h-[200px] mx-auto space-y-8">
                <img src={home} onClick={() => navigate('/')} className="absolute w-[29px] h-[29px] object-contain top-[60%] left-[50%]  translate-x-[-50%] translate-y-[0%] " />
                <img src={giftvoucher} onClick={() => navigate('/giftvoucher')} className="absolute w-[29px] h-[29px] object-contain top-[50%] left-[90%] translate-x-[20%]  translate-y-[-30%] " />
                <img src={privatedining} onClick={() => navigate('/privateDinning')} className="absolute w-[29px] h-[29px] object-contain top-[85%] left-[90%]  translate-x-[-40%] translatey-[-50%] " />
                <img src={gallery} onClick={() => navigate('/gallery')} className="absolute w-[29px] h-[29px] object-contain top-[90%] left-[50%] translate-x-[-50%] translatey-[-50%] " />
                <img src={about} onClick={() => navigate('/about')} className="absolute w-[29px] h-[29px] object-contain top-[85%] left-[15%]  translate-x-[-50%] translatey-[-50%] " />
                <img src={contact} onClick={() => navigate('/contact')} className="absolute w-[29px] h-[29px] object-contain top-[50%] right-[90%]   translate-x-[-50%] translate-y-[-50%] " />
                <img src={venue} onClick={() => navigate('/venue')} className="absolute w-[29px] h-[29px] object-contain top-[14%] left-[15%] translate-x-[-50%] translate-y-[-50%] " />
                <img src={booknow} onClick={openModal} className="absolute w-[29px] h-[29px] object-contain top-[0%] left-[50%]  translate-x-[-50%] translate-y-[0%] cursor-pointer " />
                <img src={menu} onClick={() => navigate('/menu')} className="absolute w-[29px] h-[29px] object-contain top-[14%] left-[85%] translate-x-[-50%] translate-y-[-50%] " />
            </div>

            {isModalOpen && (
                <div className="flex inset-0 fixed items-center justify-center">
                    <div className=" bg-customYellow opacity-75 p-4 rounded-lg shadow-lg w-[80%] md:w-[40%] ">
                        
                        
                        <form className="flex flex-col space-y-4">
                           
                            <div className="flex flex-row space-x-3">
                            
                            <label>
                                Full Name:
                                <input type="text" name="name" className="border  w-[200px] rounded-lg" />
                            </label>
                                <label>
                                    Contact:
                                    <input type="tel" name="phone" className="border w-[200px] rounded-lg" />
                                </label>

                            </div>
                            <div className="flex flex-row space-x-8">
                           
                            <label>
                                Select Date:
                                <input type="date" name="date" className="border w-[200px] rounded-lg" />
                                </label>
                                <label>

                                   Select Time:
                                    <input type="time" name="time" className="border  w-[200px] rounded-lg" />
                                </label>
                            </div>
                            <button className="text-white text-xl w-[150px] p-2 mx-auto border ">Find A Table</button>
                        </form>
                        
                    </div>
                </div>
            )}

            <Suspense fallback={<h1>Loading...</h1>}>
                {/* Suspended components can be added here */}
            </Suspense>
        </div>
    );
}
