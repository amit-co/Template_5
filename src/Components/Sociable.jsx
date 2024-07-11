import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '/About/social(1).png';
import img2 from '/About/social(2).png';
import img3 from '/About/social(3).png';
import back from "/buttons/Group 46.png";
import img from "/Textures/4524.png";

export function Sociable() {
    const navigate = useNavigate();
    return (
        <div className="bg-repeat flex flex-row items-center justify-center min-h-screen p-4 md:p-10" style={{ backgroundImage: `url(${img})` }}>
            <div className="container mx-auto flex flex-row items-center  ">
                <button
                    className="self-start text-black text-xl mt-44"
                    onClick={() => navigate('/about')}
                >
                    <img src={back} alt="backward" className="w-8 h-8" />
                </button>

                    <div className="flex  md:flex-cols-2 space-x-4 mt-56">
                            <div className="flex flex-col w-80  mx-auto ">                                
                                <div className="w-2xl h-1/3">
                                    <img src={img3} alt="Caring 2" className="object-cover w-full h-[78vh]" />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-20 w-80  mx-auto ">
                                <div className="w-xl h-1/3">
                                    <img src={img1} alt="Caring 1" className="object-cover w-full h-[38vh]" />
                                </div>
                                <div className="w-xl h-1/3">
                                    <img src={img2} alt="Caring 3" className="object-cover w-full h-[38vh]" />
                                </div>
                            
                            </div>
                    </div>



                    <div className=" max-w-xl text-lg md:text-sm mt-20 text-justify ml-20 ">
                            <div className=" mb-8 ml-28 ">
                                <h1 className="text-4xl md:text-3xl text-customGray font-bold ml-32">II</h1>
                                <h1 className="text-4xl md:text-5xl text-customGray title-font font-medium tracking-widest ">SOCIABLE</h1>
                            </div>

                            <p className="text-lg">
                            The Coming Together Of Friends And Families, Colleagues Or Strangers Is The Heart And Soul Of OXBO.

                            </p>
                            <p className="text-lg">
                            Our Spaces Are Designed To Be Sociable. They Are Multi- Purpose All-Day Dining And Drinking Environments That Can Be Used In Different Ways, As The Occasion Dictates Or As The Mood Changes From Breakfast To Late. Our Spaces Are Large Enough To Accommodate Gatherings And Groups, With Clever Partitions Or Sliding Panels That Can Be Used To Create Smaller Areas With A Cosier Feel. Seating Arrangements Reflect And Respect Single Diners And Drinkers Too.

                            </p>
                            <p className="text-lg">
                            OXBO Is A Destination For The Local Community, As Well As Those Visiting The City. Our Sociable Staff Help To Create A Communal Feel, Building Relationships With Regulars And Welcoming New Customers.

                            </p>
                            <p className="text-lg">
                            Our Menus Are Designed With Groups In Mind Sharing Platters And Pitchers Celebrate The Union Of Delicious Food And Great Conversation
                            </p>

                    </div>
            </div>
           
        </div>
        
        )

};

export default Sociable;