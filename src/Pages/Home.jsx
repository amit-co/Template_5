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

const Modal = ({ activeModal, onClose }) => {
    if (!activeModal) return null;


    const renderModalContent = () => {
        switch (activeModal) {
            case 'booknow':
                return (
                    <div className="bg-customYellow p-4 rounded-lg w-full bg-opacity-50">
                        <form className="flex flex-col space-y-4">
                            <div className="flex flex-row space-x-3">
                                <label className="text-customWhite">
                                    Full Name:
                                    <input type="text" name="name" className=" text-black w-32 rounded-lg" />
                                </label>
                                <label className="text-customWhite">
                                    Contact:
                                    <input type="tel" name="phone" className=" text-black w-32 rounded-lg" />
                                </label>
                            </div>
                            <div className="flex flex-row space-x-8">
                                <label className="text-customWhite">
                                    Select Date:
                                    <input type="date" name="date" className="border w-32 rounded-lg text-customBlack" />
                                </label>
                                <label className="text-customWhite">
                                    Select Time:
                                    <input type="time" name="time" className="border w-32 rounded-lg text-black" />
                                </label>
                            </div>
                            <button className="text-customWhite text-xl w-[150px] p-2 mx-auto border">Find A Table</button>
                        </form>
                    </div>
                );
            default:
                return <div>No content available.</div>;
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div className="bg-transparent p-4 rounded-lg max-w-md mx-auto relative" onClick={(e) => e.stopPropagation()}>
                {renderModalContent()}
            </div>
        </div>
    );
};

export default function Home() {
    const navigate = useNavigate();
    const [activeModal, setActiveModal] = useState(null);
    const [modalContentVisible, setModalContentVisible] = useState(false);
    
    const openModal = (modalType) => setActiveModal(modalType);
    const closeModal = () => {
        setActiveModal(null);
        setModalContentVisible(true);
    };

    const handleNavigate = (path) => {
        closeModal();
        navigate(path);
    };

    return (
        <div className="flex bg-cover relative min-h-screen bg-fixed bg-opacity-100" style={{ backgroundImage: `url(${img})` }}>
            <img src={logo} className="w-[239px] h-[69px] mt-4 ml-4" alt="Logo" />
            <div className="flex flex-col items-center text-customWhite ml-44 mt-20">
                <h1 className="text-3xl tracking-widest">Welcome To </h1>
                <h1 className="text-5xl tracking-widest mb-4">Fish N Dine</h1>
                <p className="tracking-widest">Our Aim Is To Provide A Welcoming All-Day Experience</p>
                <p className="tracking-widest">Rooted In Care For Our Customers, Staff, Produce And Land.</p>
                <h1 className="tracking-widest text-3xl underline underline-offset-8 mt-4">Opening Time</h1>
                <p className="tracking-widest text-xl mt-4">Monday To Friday</p>
                <p className="tracking-widest text-xl">12Pm - 10Pm</p>
                <p className="tracking-widest text-xl">Saturday & Sunday</p>
                <p className="tracking-widest text-xl">2Pm - 12Am</p>
                
                <button className="tracking-widest text-xl border px-4 py-2 mt-4" onClick={() => openModal('booknow')}>Find A Table</button>
                {activeModal && (<Modal onClose={closeModal} activeModal={activeModal}>
                    {activeModal === 'booknow' && (
                        <div>
                           
                        </div>
                    )}
                </Modal>
                )}
                {modalContentVisible && (

                    <div className="mx-auto rounded-lg shadow-lg">
                    
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

            <div className="relative w-[200px] h-[200px] mx-auto space-y-8">
                <img src={home} onClick={() => handleNavigate('/')} className="absolute w-[29px] h-[29px] object-contain top-[60%] left-[50%] translate-x-[-50%] translate-y-[0%] cursor-pointer" alt="Home" />
                <img src={giftvoucher} onClick={() => openModal('giftvoucher')} className="absolute w-[29px] h-[29px] object-contain top-[50%] left-[90%] translate-x-[20%] translate-y-[-30%] cursor-pointer" alt="Gift Voucher" />
                <img src={privatedining} onClick={() => openModal('privatedining')} className="absolute w-[29px] h-[29px] object-contain top-[85%] left-[90%] translate-x-[-40%] translate-y-[-50%] cursor-pointer" alt="Private Dining" />
                <img src={gallery} onClick={() => openModal('gallery')} className="absolute w-[29px] h-[29px] object-contain top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" alt="Gallery" />
                <img src={about} onClick={() => openModal('about')} className="absolute w-[29px] h-[29px] object-contain top-[85%] left-[15%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" alt="About" />
                <img src={contact} onClick={() => openModal('contact')} className="absolute w-[29px] h-[29px] object-contain top-[50%] right-[90%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" alt="Contact" />
                <img src={venue} onClick={() => openModal('venue')} className="absolute w-[29px] h-[29px] object-contain top-[14%] left-[15%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" alt="Venue" />
                <img src={booknow} onClick={() => openModal('booknow')} className="absolute w-[29px] h-[29px] object-contain top-[0%] left-[50%] translate-x-[-50%] translate-y-[0%] cursor-pointer" alt="Book Now" />
                <img src={menu} onClick={() => openModal('menu')} className="absolute w-[29px] h-[29px] object-contain top-[14%] left-[85%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" alt="Menu" />
            </div>

            <Suspense fallback={<h1>Loading...</h1>}>
                {/* Suspended components can be added here */}
            </Suspense>
        </div>
    );
}
