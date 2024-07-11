import { useState, useEffect } from "react";
import { LuClock } from "react-icons/lu";
import { Quote } from "../Components/Quote";
import logo from "/logo.png";
import PropTypes from "prop-types";
import Select from "react-select";
import FaEgg from "/src/assets/Dietery_Resctrictions/egg.jpg";
import FaFish from "/src/assets/Dietery_Resctrictions/fish.jpg";
import FaSoya from "/src/assets/Dietery_Resctrictions/soya.jpg";
import FaMilk from "/src/assets/Dietery_Resctrictions/milk.jpg";
import FaGluten from "/src/assets/Dietery_Resctrictions/gluten.jpg";
import FaPeanuts from "/src/assets/Dietery_Resctrictions/peanuts.jpg";
import FaMustard from "/src/assets/Dietery_Resctrictions/mustard.jpg";
import FaNuts from "/src/assets/Dietery_Resctrictions/nuts.jpg";
import FaSesame from "/src/assets/Dietery_Resctrictions/sesame.jpg";
import FaCelery from "/src/assets/Dietery_Resctrictions/celery.jpg";
import FaSulphites from "/src/assets/Dietery_Resctrictions/sulphites.jpg";
import FaCrustaceans from "/src/assets/Dietery_Resctrictions/crustaceans.jpg";
import FaMoluscs from "/src/assets/Dietery_Resctrictions/moluscs.jpg";
import FaLupin from "/src/assets/Dietery_Resctrictions/lupin.jpg";
import { z } from "zod";
import img from "/Textures/4524.png";
import img6 from "/Gallery/img6.jpeg";

const schema = z.object({
    firstName: z.string().min(1, "First name is required").max(50),
    lastName: z.string().min(1, "Last name is required").max(50),
    email: z.string().email("Invalid email address").max(100),
    contact: z.string().min(10).max(15),
});

const InputField = ({ label, name, type, value, onChange, error }) => (
    <div className="mb-4">
        <div className="flex justify-between">
            <label className="block text-white text-lg font-bold mb-2">{label}:</label>
            {label !== "Special Occasions" && label !== "Date" && <span className="text-lg">*</span>}
        </div>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        />
        {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
);

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
};

const SelectField = ({ label, name, value, onChange, options }) => (
    <div className="mb-4">
        <label className="block text-white text-lg font-bold mb-2">{label}:</label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        >
            {options.map((option) => (
                <option key={option} value={option} style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

const dietaryOptions = [
    { value: "Eggs", label: "Eggs", icon: FaEgg },
    { value: "Fish", label: "Fish", icon: FaFish },
    { value: "Soya", label: "Soya (Soy)", icon: FaSoya },
    { value: "Milk", label: "Milk (Dairy)", icon: FaMilk },
    { value: "Gluten", label: "Gluten", icon: FaGluten },
    { value: "Peanuts", label: "Peanuts", icon: FaPeanuts },
    { value: "Mustard", label: "Mustard", icon: FaMustard },
    { value: "Nuts", label: "Nuts", icon: FaNuts },
    { value: "Sesame", label: "Sesame", icon: FaSesame },
    { value: "Celery", label: "Celery", icon: FaCelery },
    { value: "Sulphites", label: "Sulphites", icon: FaSulphites },
    { value: "Crustaceans", label: "Crustaceans", icon: FaCrustaceans },
    { value: "Moluscs", label: "Moluscs", icon: FaMoluscs },
    { value: "Lupin", label: "Lupin", icon: FaLupin },
];

const customOption = (props) => (
    <div ref={props.innerRef} {...props.innerProps} className="flex items-center p-2">
        {props.data.icon && <img src={props.data.icon} alt={props.data.label} className="mr-2 w-6 h-6" />}
        {props.data.label}
    </div>
);

const customMultiValueLabel = (props) => (
    <div className="flex items-center">
        {props.data.icon && <img src={props.data.icon} alt={props.data.label} className="mr-1 w-4 h-4" />}
        {props.data.label}
    </div>
);

export default function BookNow() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        language: "English",
        date: "",
        guests: 1,
        dietaryRestriction: [],
        specialOccasions: "",
        otherOccasion: "", 
        reservationNote: "",
        time: "8:00 AM",
    });

    const [noteVisible, setNoteVisible] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const now = new Date().toISOString().split("T")[0];
        setFormData((prevFormData) => ({ ...prevFormData, date: now }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSelectChange = (selectedOptions, actionMeta) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [actionMeta.name]: selectedOptions ? selectedOptions.map((option) => option.value) : [],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            schema.parse(formData);
            const queryString = new URLSearchParams(formData).toString();
            window.location.href = `https://reserve-ocean-website.vercel.app/reservationconfirmation?${queryString}`;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errorMessages = error.errors.reduce((acc, curr) => {
                    acc[curr.path[0]] = curr.message;
                    return acc;
                }, {});
                setErrors(errorMessages);
            }
        }
    };

    const generateTimeOptions = () => {
        const options = [];
        const start = new Date();
        start.setHours(8, 0, 0, 0); // Start time: 8:00
        const end = new Date();
        end.setHours(23, 0, 0, 0); // End time: 23:00

        while (start <= end) {
            options.push(start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            start.setMinutes(start.getMinutes() + 30); // Increment by 30 minutes
        }

        return options;
    };

    return (
        <div>
            <div className="bg-fixed bg-cover opacity-75" style={{ backgroundImage: `url(${img6})` }}>
                <div>
                    <div className=" flex "></div>
                    <div className="bg-repeat max-w-lg mx-auto sm:mt-[35vh] p-8 shadow-md rounded-lg mt-20 mb-12"
                        style={{ backgroundImage: `url(${img})` }}>
                        <div className="flex mb-3 mt-2 justify-end">
                            <img src={logo} className="w-[420px] mx-auto contrast-200" alt="Logo" />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6 text-white bg-repeat" style={{ backgroundImage: `url(${img})` }}>
                                <h2 className="text-4xl font-bold text-center mb-4">Your Details</h2>
                                <InputField label="First Name" name="firstName" type="text" value={formData.firstName}
                                    onChange={handleChange} error={errors.firstName} />
                                <InputField label="Last Name" name="lastName" type="text" value={formData.lastName}
                                    onChange={handleChange} error={errors.lastName} />
                                <InputField label="Email" name="email" type="email" value={formData.email}
                                    onChange={handleChange} error={errors.email} />
                                <InputField label="Contact" name="contact" type="number" value={formData.contact}
                                    onChange={handleChange} error={errors.contact} />
                                <SelectField label="Preferred Communication Language" type="text" name="language"
                                    value={formData.language} onChange={handleChange}
                                    options={["English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Hindi"]} />
                            </div>
                            <div className="mb-6 text-white bg-repeat" style={{ backgroundImage: `url(${img})` }}>
                                <h2 className="text-2xl text-center font-bold mb-4">Summary</h2>
                                <InputField label="Date" name="date" type="date" value={formData.date} onChange={handleChange} />
                                <h1 className="font-semibold">Time:</h1>
                                <div className="relative flex items-center border-gray-200 border rounded-md h-12 mb-4">
                                    <select id="timingSelect" name="time" value={formData.time} onChange={handleChange}
                                        className="w-full pl-10 text-lg text-black outline-none bg-transparent"
                                    >
                                        {generateTimeOptions().map(time => (
                                            <option key={time} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </select>
                                    <LuClock className="absolute left-3 text-xl" />
                                </div>
                                <SelectField label="Guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                />
                                <div className="mb-4">
                                    <label className="block text-white text-lg font-bold mb-2">Dietary Restriction:</label>
                                    <Select
                                        name="dietaryRestriction"
                                        value={dietaryOptions.filter((option) => formData.dietaryRestriction.includes(option.value))}
                                        onChange={handleSelectChange}
                                        options={dietaryOptions}
                                        isMulti
                                        placeholder="Select Dietary Restrictions"
                                        className="w-full px-3 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        components={{ Option: customOption, MultiValueLabel: customMultiValueLabel }}
                                        styles={{
                                            control: (base) => ({
                                                ...base,
                                                backgroundImage: `url(${img})`,
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                            }),
                                            menu: (base) => ({
                                                ...base,
                                                backgroundImage: `url(${img})`,
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                            }),
                                            multiValue: (base) => ({
                                                ...base,
                                                backgroundImage: `url(${img})`,
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                            }),
                                            multiValueLabel: (base) => ({
                                                ...base,
                                                backgroundImage: `url(${img})`,
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                            }),
                                        }}
                                    />
                                </div>
                                <SelectField label="Special Occasions"
                                    name="specialOccasions"
                                    value={formData.specialOccasions}
                                    onChange={handleChange}
                                    options={["Select Special Occasion", "Birthday", "Anniversary", "Promotion", "Farewell Party", "National Holiday", "Halloween", "Christmas", "Thanksgiving", "New Year", "House Warming", "Baby Shower", "Bridal Shower", "Engagement", "Wedding", "Other"]}
                                />
                                {formData.specialOccasions === "Other" && (
                                    <InputField
                                        label="Please Specify Occasion"
                                        name="otherOccasion"
                                        type="text"
                                        value={formData.otherOccasion}
                                        onChange={handleChange}
                                        error={errors.otherOccasion}
                                    />
                                )}
                                <div className="mb-4">
                                    <label className="block text-white text-lg font-bold mb-2">Reservation Note:</label>
                                    <button
                                        type="button"
                                        onClick={() => setNoteVisible(!noteVisible)}
                                        className="w-full text-left px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        {noteVisible ? "Hide Note" : "Click to Add a Note"}
                                    </button>
                                    {noteVisible && (
                                        <textarea
                                            name="reservationNote"
                                            value={formData.reservationNote}
                                            onChange={handleChange}
                                            className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                                        />
                                    )}
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-customBrown text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">Book A Table</button>
                        </form>
                    </div>
                    <div className=" flex "></div>
                </div>
            </div>
            <div className="w-full h-full"><Quote /></div>
        </div>
    );
}
