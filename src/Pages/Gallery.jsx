import beverage from "/New/Beverage.svg";
import team from "/New/Team.svg";
import food from "/New/Food.svg";
import { useNavigate } from "react-router-dom";
export default function gallery() {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col  items-center mx-auto">
                <h1 className="tracking-widest text-4xl  underline underline-offset-8 mt-8">Gallery</h1>
                
                <div className="flex flex-col  space-y-10 mx-auto items-center mt-10">
                    <div className="flex space-x-10">
                        <div className="flex flex-col w-full h-full" >
                            <img onClick={() => navigate('/gallery/food')}  src={food} />
                            <div className="-mt-10 ">
                                <h1 className="bg-customBlack2 text-white text-2xl rounded-t-lg h-[50px] text-center py-3">Food</h1>
                            </div>
                        </div>
                        <div className="flex flex-col w-full h-full" >
                            <img onClick={() => navigate('/gallery/drinks')} src={beverage} />
                            <div className="-mt-10 ">
                                <h1 className="bg-customBlack2 text-white text-2xl rounded-t-lg h-[50px] text-center py-3">Beverage</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex ">
                        <div className="flex flex-col" >
                            <img onClick={() => navigate('/gallery/teams')} src={team} />
                            <div className="-mt-10 ">
                                <h1 className="bg-customBlack2 text-white text-2xl rounded-t-lg h-[50px] mb-4 text-center py-3">Team</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </>
    );
}