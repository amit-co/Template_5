import { useState } from 'react';
import img3 from "/Pdf/IRD-Menu.jpg";
import img4 from "/Pdf/CafeMenu.jpg";
import img5 from "/FoodImages/BreakfastMenu.jpg";
import barSnacks from "/FoodImages/BarSnacks.jpg";
import barsnacks from "/New/Bar.svg";
import  Ird from "/New/IRD.svg";
import breakfast from "/New/Breakfast.svg";
import cafe from "/New/Cafe.svg";

export default function Menu() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleMenuOpen = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="flex flex-col  items-center mx-auto">
            <h1 className="tracking-widest text-4xl  underline underline-offset-8 mt-8">Feeling Hungry ?</h1>
              <div className="w-full mt-10 flex flex-col items-center space-y-10">
                    <div className="flex  justify-center space-x-20 ">
                                    <div className="flex flex-col w-full h-full" onClick={() => handleMenuOpen(img5)}>
                                        <img src={breakfast} />
                                        <div className="-mt-10 ">
                                            <h1 className="bg-customBlack2 text-white text-2xl rounded-t-lg h-[50px] text-center py-3">Breakfast Menu</h1>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full h-full" onClick={() => handleMenuOpen(barSnacks)}>
                                        <img src={barsnacks} />
                                        <div className="-mt-10 ">
                                            <h1 className="bg-customBlack2 text-white text-2xl rounded-t-lg h-[50px] text-center py-3">Bar Snacks Menu</h1>
                                        </div>
                                    </div>
                        
                            
                    </div>
                    <div className="flex  justify-center space-x-20">
                                  <div className="flex flex-col w-full h-full" onClick={() => handleMenuOpen(img4)}>
                                    <img src={cafe} />
                                    <div className="-mt-10 ">
                                        <h1 className="bg-customBlack2 text-white text-2xl rounded-t-lg h-[50px] text-center py-3">Cafe Menu</h1>
                                    </div>
                                  </div>
                                <div className="flex flex-col w-full h-full " onClick={() => handleMenuOpen(img3)}>
                                    <img src={Ird} />
                                    <div className="-mt-10 ">
                                        <h1 className="bg-customBlack2 text-white text-2xl rounded-t-lg h-[50px] text-center py-3">IRD Menu</h1>
                                    </div>
                                </div>
                       
                </div>
                <button className="tracking-widest text-2xl border px-4 py-2 ">Find A Table</button>
              </div>
            
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="relative">
                        <button
                            className="absolute top-0 right-0 mt-2 mr-2 text-white text-xl"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <img src={selectedImage} className="max-w-full max-h-screen md:max-w-lg md:max-h-3/4 lg:max-w-xl lg:max-h-3/4" alt="Menu Item" />
                    </div>
                </div>
            )}
           
        </div>
    );
}
