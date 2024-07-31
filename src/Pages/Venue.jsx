import { useNavigate } from "react-router-dom";
export function Venue() {
    const navigate = useNavigate();
    function clickHandler() {
        window.location.href = "https://reserve-ocean-website.vercel.app/restaurantDetail/Chon%20Thai%20Cuisine"
    }
    return (
        <>
            <div className="flex flex-col  items-center mx-auto">
                <h1 className="tracking-widest text-4xl underline underline-offset-8 mt-6">Venue</h1>
                <p className="tracking-widest text-center text-lg w-full md:w-7/12 mt-6">Fish N Dine Kitchen Serves Breakfast.
                    Fish N Dine Cafe Offers Tempting Snacks Any Time.And Fish N Dine Bar Provides Casual Drinking And Dining.
                    Each Outlet Has A Distinct Menu And Responsibly Sourced Dishes.
                </p>
                <h1 onClick={() => navigate('/venue/fndKitchen')} className="tracking-widest text-2xl underline mt-6 cursor-pointer">FND Kitchen</h1>
                <h1 onClick={() => navigate('/venue/dineCafe')} className="tracking-widest text-2xl underline mt-6 cursor-pointer">Fish N Dine Cafe</h1>
                <h1 onClick={() => navigate('/venue/dineBar')} className="tracking-widest text-2xl underline mt-6 cursor-pointer">Dine Bar</h1>
                <h1 onClick={() => navigate('/venue/ird')} className="tracking-widest text-2xl underline mt-6 cursor-pointer">In Room Dining</h1>
                <button onClick={clickHandler} className="tracking-widest text-xl border px-4 py-2 mt-6">Find A Table</button>
            </div>
        </>
    );
}



export default Venue;
