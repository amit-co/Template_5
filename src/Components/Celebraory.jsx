import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '/About/celebrarory(1).png';
import back from "/buttons/Group 46.png";
import img from "/Textures/4525.png";

export function Celebraory() {
    const navigate = useNavigate();
    return (
        <div className="bg-repeat flex flex-cols-2 items-center justify-center min-h-screen p-4 md:p-10 mt-36" style={{ backgroundImage: `url(${img})` }}>
                   <div className="container mx-auto flex flex-col items-center  ">
                            <button
                                className="self-start text-black text-xl"
                                onClick={() => navigate('/about')}
                            >
                                <img src={back} alt="backward" className="w-8 h-8" />
                            </button>

               
            
                            <div className="max-w-xl text-lg md:text-sm text-justify leading-relaxed mt-5 mb-10 ">
                                <div className=" mb-8 ml-24">
                                    <h1 className="text-4xl md:text-3xl text-customGray font-bold ml-36">III</h1>
                                    <h1 className="text-4xl md:text-5xl text-customGray title-font font-medium tracking-widest ">CELEBRAORY</h1>
                                </div>
                    
                                <p className="text-lg">
                                    OXBO is a celebration of our seasonal cycle and local heritage. From the generations of fishermen who harvest the sea, to the seed sowers and the farm hands, the ox that once worked the land and the craft of cultivation that created plenty.

                                </p>
                                <p className="text-lg">
                                    We are proud of the provenance of our ingredients, and love to champion our suppliers, knowing that their produce is authentic, ethical and respectful of nature.

                                </p>
                                <p className="text-lg">
                                    Every dish and drink on the menu is an opportunity to honour quality produce, authentic flavours and to celebrate each of the seasons.


                                </p>
                                <p className="text-lg">
                                    We love to show our appreciation and joy for food through beautiful presentation in the way each plate, cabinet or counter is designed. Smoothies and juices are arranged on ice, glistening homemade pastries are displayed generously.


                                </p>
                                <p className="text-lg">
                                    When customers want to drink to a special moment or simply be entertained, our mixologists are on hand to create an exciting cocktail in front of them.
                                </p>
                        
                            </div>
                   </div>   
                            <div className="flex flex-cols-1 md:flex-cols-2 space-x-4 mt-12">
                                <div className="flex flex-col space-y-2 w-full  mx-auto ">
                                    <div className="w-full h-auto">
                                        <img src={img1} alt="Celebraory 1" className="object-cover w-full h-full" />
                                    </div>
                                    
                                </div>
                                
                            </div>
            
        </div>
    );
}

export default Celebraory;
