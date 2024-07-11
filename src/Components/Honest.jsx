import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '/About/honest(1).png';
import back from "/buttons/Group 46.png";
import img from "/Textures/4524.png";

export function Honest() {
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

                    <div className="flex  md:flex-cols-2  ml-20 mt-56">
                                                         
                                <div className="w-2xl h-1/3">
                                    <img src={img1} alt="Honest 1" className="object-cover w-full h-[76vh]" />
                                </div>
                        
                    
                    </div>



                    <div className=" max-w-xl text-lg md:text-sm text-justify mt-20 ml-20 ">
                            <div className=" mb-8 ml-36">
                                <h1 className="text-4xl md:text-3xl text-customGray font-bold mt-16 ml-24">IV</h1>
                                <h1 className="text-4xl md:text-5xl text-customGray title-font font-medium tracking-widest ">HONEST</h1>
                            </div>

                            <p className="text-lg">
                            Honesty is integral to OXBO - it's in every part of the journey, from farm to fork.

                            </p>
                            <p className="text-lg">
                            OXBO has provenance tracked back to the farms, fields, seas and people involved in the rearing of animals and cultivation of delicious produce.



                            </p>
                            <p className="text-lg">
                            These stories of provenance are shared wherever possible with our customers via social media channels, table literature, food packaging or labels.


                            </p>
                            <p className="text-lg">
                            From a local, craft brewery dedicated to brewing sustainable beer, to a rural smallholding that produces fine artisan cheese, to micro farms and urban farming as well as more traditional farming methods we want to share and champion the stories of our honest suppliers.

                            </p>
                            <p className="text-lg">
                            Our genuine, heartfelt approach gives our kitchens, cafés and bars an authentic atmosphere that customers want to return to.

                            </p>

                    </div>
            </div>
           
        </div>
        
    )

};

export default Honest;


