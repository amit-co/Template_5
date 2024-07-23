import { team } from "../utils/TeamInfo";
import img0 from "/teamImages/img0.jpeg";
import back from "/New/BackButton.svg";
import { useNavigate } from 'react-router-dom';

export default function Team() {
    const navigate = useNavigate();
    // Separate the first team member from the rest
    const [firstMember, ...restOfTeam] = team;

    return (
        <>
            
            <div className="flex flex-col  items-center  mt-4 ">
                <div className="flex flex-row w-full mt-6 ">
                <button
                    className="self-start mr-56"
                    onClick={() => navigate('/gallery')}
                >
                    <img src={back} alt="backward" />
                </button>
                    <h1 className="tracking-widest text-4xl  underline underline-offset-8 mr-72">Gallery</h1>
                </div>
                    <h1 className="text-center  tracking-widest text-Black text-3xl mb-2 mt-4">Teams</h1>
                
                    
                </div>
                <div className="h-[3px] bg-gradient-to-r from-transparent via-gray-600  to-transparent mx-16 "></div>

                {/* Centered first team member */}
                <div className="w-full flex justify-center ">
                    <div className="bg-no-repeat h-72 rounded-md sm:ml-7 sm:mt-4 lg:w-[20vw] py-6 bg-cover shadow-lg" style={{ backgroundImage: `url(${ img0 })` }}>
                       
                    <div className="bg-customBlack2 w-[20vw] h-24 items-center flex flex-wrap text-white  mt-44 rounded-md" >
                        <div className="mx-10">
                        <h1 className="text-center">{firstMember.name}</h1>
                        <h1 className="text-center ">{firstMember.designation}</h1>
                        <h1 className="text-center">{firstMember.email}</h1>
                                <h1 className="text-center">{firstMember.phoneNO}</h1>
                                </div>
                            </div>
                    </div>
                </div>

                {/* Remaining team members */}
                <div className="grid sm:space-x-10 space-y-10 w-full sm:w-11/12 mt-10 mx-auto lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-10">
                    {restOfTeam.map((value, index) => (
                        
                            <div key={index + 1} className="bg-no-repeat h-72 rounded-md sm:ml-7 sm:mt-4 lg:w-[20vw] py-6 bg-cover shadow-lg" style={{ backgroundImage: `url(${value.imageUrl})` }}>
                            
                            <div className="bg-customBlack2 w-[20vw] h-[18vh] items-center flex flex-wrap text-white  mt-44 rounded-md" >
                            <div className="mx-12">
                            <h1 className="text-center">{value.name}</h1>
                            <h1 className="text-center">{value.designation}</h1>
                            <h1 className="text-center">{value.email}</h1>
                                <h1 className="text-center">{value.phoneNO}</h1>
                                </div>
                                </div>
                            </div>
                            
                    ))}
                </div>
           
           
        </>
    );
}
