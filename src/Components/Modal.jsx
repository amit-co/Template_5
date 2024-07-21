import React from 'react';

const Modal = ({ activeModal, onClose }) => {
    // Function to render content based on the activeModal prop
    const renderModalContent = () => {
        switch (activeModal) {
            case 'booknow':
                return (
                    <div className="bg-transparent p-4 rounded-lg shadow-lg w-[80%] md:w-[40%]">
                        <h1 className="text-5xl tracking-widest mb-4 text-center text-black">Book Now</h1>
                        <form className="flex flex-col space-y-4">
                            <div className="flex flex-row space-x-3">
                                <label className="text-black">
                                    Full Name:
                                    <input type="text" name="name" className="border w-[200px] rounded-lg" />
                                </label>
                                <label className="text-black">
                                    Contact:
                                    <input type="tel" name="phone" className="border w-[200px] rounded-lg" />
                                </label>
                            </div>
                            <div className="flex flex-row space-x-8">
                                <label className="text-black">
                                    Select Date:
                                    <input type="date" name="date" className="border w-[200px] rounded-lg" />
                                </label>
                                <label className="text-black">
                                    Select Time:
                                    <input type="time" name="time" className="border w-[200px] rounded-lg" />
                                </label>
                            </div>
                            <button className="text-black text-xl w-[150px] p-2 mx-auto border">Find A Table</button>
                        </form>
                    </div>
                );
            // Add other cases for different modal content here
            default:
                return <div>No content available.</div>;
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-transparent p-4 rounded-lg max-w-md mx-auto relative">
                <button className="absolute top-2 right-2" onClick={onClose}>
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                {renderModalContent()}
            </div>
        </div>
    );
};

export default Modal;
