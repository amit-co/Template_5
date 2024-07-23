import { useState } from "react";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";


export default function Discount() {
    const [quantity, setQuantity] = useState(1);
    

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setQuantity(value >= 1 ? value : 1);
    };

   
    return (
        <div>

                <div className="flex flex-col text-center mx-auto">
                    <div className="flex  mt-8 items-center">
                        <button
                            className="text-6xl text-black"
                            onClick={() => {
                                setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
                            }}
                        >
                            <FaSquareMinus  />
                        </button>
                        <input
                            type="number"
                            className={`outline-none h-12   ${quantity < 10 ? "pl-7 md:max-lg:pl-5" : "sm:pl-7 md:max-lg:pl-5"
                                } sm:text-4xl bg-customGray2 bg-opacity-10  w-20`}
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                        <button
                        className="text-6xl text-black "
                            onClick={() => setQuantity((prev) => prev + 1)}
                        >
                            <FaSquarePlus />
                        </button>
                    </div>
                
                <button className="tracking-widest text-2xl border px-4 py-2 mt-10">
                    Add to basket
                </button>
            </div>
        </div>
    )
}