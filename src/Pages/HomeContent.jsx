export default function HomeContent() {
    function clickHandler() {
        window.location.href = "https://reserve-ocean-website.vercel.app/restaurantDetail/Chon%20Thai%20Cuisine"
    }
    return (
        <div className="flex flex-col items-center mx-auto">
            <p className="tracking-widest">Our Aim Is To Provide A Welcoming All-Day Experience</p>
            <p className="tracking-widest">Rooted In Care For Our Customers, Staff, Produce And Land.</p>
            <h1 className="tracking-widest text-3xl underline underline-offset-8 mt-4">Opening Time</h1>
            <p className="tracking-widest text-xl mt-4">Monday To Friday</p>
            <p className="tracking-widest text-xl">12Pm - 10Pm</p>
            <p className="tracking-widest text-xl">Saturday & Sunday</p>
            <p className="tracking-widest text-xl">2Pm - 12Am</p>
            <button onClick={clickHandler} className="tracking-widest text-xl border px-4 py-2 mt-4">Find A Table</button>
        </div>
    );
}