import back from "/New/BackButton.svg";
import { useNavigate } from 'react-router-dom';

export function InRoomDining() {
    const navigate = useNavigate();
    function clickHandler() {
        window.location.href = "https://reserve-ocean-website.vercel.app/restaurantDetail/Chon%20Thai%20Cuisine"
    }
    return (
        <>

            <div className="flex flex-col  items-center mx-auto">
                <div className="flex flex-row w-full mt-6 ">
                    <button
                        className="self-start "
                        onClick={() => navigate('/venue')}
                    >
                        <img src={back} alt="backward" />
                    </button>
                    <h1 className="tracking-widest text-4xl underline underline-offset-8 mx-auto">In Room Dining</h1>
                </div>
                <p className="tracking-widest text-center text-lg w-7/12 mt-6">Fish N Dine Kitchen Serves Breakfast.
                    Fish N Dine Cafe Offers Tempting Snacks Any Time.And Fish N Dine Bar Provides Casual Drinking And Dining.
                    Each Outlet Has A Distinct Menu And Responsibly Sourced Dishes.
                </p>

                <button onClick={clickHandler} className="tracking-widest text-xl border px-4 py-2 mt-10">Find A Table</button>
            </div>



        </>
    );
}



export default InRoomDining;
