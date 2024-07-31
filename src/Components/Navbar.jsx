import home from "/New/house.svg";
import contact from "/New/contact.svg";
import giftvoucher from "/New/gift.svg";
import privatedining from "/New/hand-platter.svg";
import gallery from "/New/images.svg";
import about from "/New/info.svg";
import venue from "/New/map-pinned.svg";
import booknow from "/New/notebook-pen.svg";
import menu from "/New/notepad-text.svg";
import { useState } from 'react';
import PrivateDinning from "../Pages/PrivatedDinning";
import BookNow from "../Pages/BookNow";
import Venue from "../Pages/Venue";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Menu from "../Pages/Menu";
import GiftVoucher from "../Pages/GiftVoucher";
import Gallery from "../Pages/Gallery";
import HomeContent from "../Pages/HomeContent";
import { Link } from 'react-router-dom';




export function Navbar({ onIconClick }) {
    const images = [
        { src: home, alt: "Home", path: "/homeContent", content: <HomeContent /> },
        { src: giftvoucher, alt: "Gift Voucher", path: "/giftVoucher", content: <GiftVoucher /> },
        { src: privatedining, alt: "Private Dining", path: "/privateDinning", content: <PrivateDinning /> },
        { src: gallery, alt: "Gallery", path: "/gallery", content: <Gallery /> },
        { src: about, alt: "About", path: "/about", content: <About /> },
        { src: contact, alt: "Contact", path: "/contact", content: <Contact /> },
        { src: venue, alt: "Venue", path: "/venue", content: <Venue /> },
        { src: booknow, alt: "Book Now", path: "/bookNow", content: <BookNow /> },
        { src: menu, alt: "Menu", path: "/menu", content: <Menu /> },
    ];

    const [centeredIndex, setCenteredIndex] = useState(0); 
    

    const radius = 100; 
    const centerX = 150; 
    const centerY = 150; 

    const handleIconClick = (index) => {
        setCenteredIndex(index === centeredIndex ? null : index);
        if (index !== centeredIndex) {
            onIconClick(images[index].content);
        }
    };

    return (
        <>
            <div className={`fixed  right-10 z-10 transition-transform duration-300`}>
                <div className="w-[300px] h-[300px] mt-16 md:mt-0 mx-auto rounded-full relative">
                    {centeredIndex !== null && (
                        <>
                            <img
                                src={images[centeredIndex].src}
                                onClick={() => handleIconClick(centeredIndex)}
                                className="absolute object-contain cursor-pointer transition-transform duration-300"
                                style={{
                                    left: `calc(50% - 25px)`,
                                    top: `calc(50% - 25px)`,
                                    width: '50px',
                                    height: '50px'
                                }}
                                alt={images[centeredIndex].alt}
                            />
                            <div
                                className="absolute text-center text-white w-full"
                                style={{ top: `calc(50% + 30px)` }}
                            >
                                {images[centeredIndex].alt}
                            </div>
                        </>
                    )}
                    {images.map((image, index) => {
                        if (index !== centeredIndex) {
                            const angle = (index / images.length) * (2 * Math.PI);
                            const x = centerX + radius * Math.cos(angle) - 14.5; // 14.5 is half the image width to center it
                            const y = centerY + radius * Math.sin(angle) - 14.5; // 14.5 is half the image height to center it
                            return (
                                <Link key={index} to={image.path} onClick={() => handleIconClick(index)}>
                               <img
                                    key={index}
                                    src={image.src}
                                    
                                    className="absolute object-contain cursor-pointer transition-transform duration-300"
                                    style={{
                                        left: `${x}px`,
                                        top: `${y}px`,
                                        width: '29px',
                                        height: '29px'
                                    }}
                                    alt={image.alt}
                                />
                                </Link>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </>
    );
}
