export default function BookNow() {
   
    return (
        <div>
            <div className="flex flex-col  items-center mx-auto">
                <h1 className="tracking-widest text-2xl md:text-4xl underline underline-offset-8 mt-4">Reserve A Table</h1>
                <p className="tracking-widest text-center text-lg w-full md:w-8/12 mt-8">To Help us Find The Best Table For You. Select The Preferred Party Size, Date And Time Of Your Reservation.</p>
                <div className="flex w-[300px] md:w-[600px] bg-customYellow bg-opacity-50 mt-6 rounded-lg p-10">
                    <form className="flex flex-col space-y-6">
                        <div className="flex space-x-4 md:space-x-16 w-full">
                            <div>
                                <label className="text-customWhite">First Name </label>
                                <input
                                    type="text"
                                    
                                    id="fname"
                                    name="fname"
                                    className="text-black w-24 md:w-56 px-3 py-2 rounded-lg"
                                />
                               
                            </div>
                            <div >
                                <label className="text-customWhite">Last Name </label>
                                <input
                                    type="text"
                                    
                                    id="lname"
                                    name="lname"
                                    className="text-black w-24 md:w-56 px-3 py-2 rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="flex space-x-4 md:space-x-16 w-full">
                            <div>
                        <label className="text-customWhite">
                            Select Date:
                                    <input type="date" name="date" className="text-black w-24 md:w-56 px-3 py-2 rounded-lg" />
                                </label>
                            </div>
                        <div>
                        <label className="text-customWhite">
                            Select Time:
                                    <input type="time" name="time" className="text-black w-24 md:w-56 px-3 py-2 rounded-lg" />
                                </label>
                        </div>
                    </div>
                    <button className="text-customWhite text-xl w-[150px] p-2 mx-auto border">Find A Table</button>
                </form>
            </div>
            </div>
        </div>
    );
}
