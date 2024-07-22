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

export function Navbar({ onIconClick }) {
    const images = [
        { src: home, alt: "Home", path: "/home", content: 'Gift Voucher Content'  },
        { src: giftvoucher, alt: "Gift Voucher", path: "/giftVoucher", content: 'Gift Voucher Content' },
        { src: privatedining, alt: "Private Dining", path: "/privateDinning", content: 'Private Dining Content' },
        { src: gallery, alt: "Gallery", path: "/gallery", content: 'Gallery Content' },
        { src: about, alt: "About", path: "/about", content: 'About Content' },
        { src: contact, alt: "Contact", path: "/contact", content: 'Contact Content' },
        { src: venue, alt: "Venue", path: "/venue", content: 'Venue Content' },
        { src: booknow, alt: "Book Now", path: "/bookNow", content: 'Book Now Content' },
        { src: menu, alt: "Menu", path: "/menu", content: 'Menu Content' },
    ];

    const [centeredIndex, setCenteredIndex] = useState(null); // Center is initially vacant

    const radius = 100; // Radius of the circle
    const centerX = 150; // Center X position
    const centerY = 150; // Center Y position

    const handleIconClick = (index) => {
        setCenteredIndex(index === centeredIndex ? null : index);
        if (index !== centeredIndex) {
            onIconClick(images[index].content);
        }
    };

    return (
        <>
            <div className={`fixed mt-8 right-10 z-10 transition-transform duration-300`}>
                <div className="w-[300px] h-[300px] mx-auto rounded-full relative">
                    {centeredIndex !== null && (
                        <>
                            <img
                                src={images[centeredIndex].src}
                                onClick={() => handleIconClick(centeredIndex)}
                                className="absolute object-contain cursor-pointer transition-transform  duration-300"
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
                                <img
                                    key={index}
                                    src={image.src}
                                    onClick={() => handleIconClick(index)}
                                    className="absolute object-contain cursor-pointer transition-transform duration-300"
                                    style={{
                                        left: `${x}px`,
                                        top: `${y}px`,
                                        width: '29px',
                                        height: '29px'
                                    }}
                                    alt={image.alt}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </>
    );
}