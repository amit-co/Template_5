import { useState } from "react";
import axios from "axios";
import { config } from "../config";
import { toast } from "react-toastify";
import { z } from "zod"


export default function Contact() {
    const schema = z.object({
        name: z
          .string()
          .min(1, "First name is required")
          .max(50, "First name must be at most 50 characters"),
        email: z
          .string()
          .email("Invalid email address")
          .max(100, "Email must be at most 100 characters"),
        message: z
          .string()
          .min(10,"Comment must be at least 10 characters long")
          .max(1000,"Comment number must be at most 1000 characters long"),
      });

    const initialFormData = {
        name : "",
        email : "",
        message : "",
        tag : "CT"
    }

    const [formData,setFormData] = useState(initialFormData)

    const [errors,setErrors] = useState({})

    const changeHandler=(e)=>{
        const {name,value} = e.target
        setFormData(prev=>({
            ...prev,
            [name] : value
        }))
    }

    const clickHandler=()=>{
        try{
            schema.parse(formData)
            axios({
                method:"post",
                url : `${config.url}/messages`,
                data : formData
            })
            .then((res)=>{
                toast.success('Message sent', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                setFormData(initialFormData)
                
            })
            .catch((e)=>{
                console.log(e)
            })
        }catch(error){
            if (error instanceof z.ZodError) {
                const errorMessages = error.errors.reduce((acc, curr) => {
                  acc[curr.path[0]] = curr.message;
                  return acc;
                }, {});
                setErrors(errorMessages);
              }
        }
       
    }


    return (
        <>
            <div className="flex flex-col  items-center mx-auto">
                <h1 className="tracking-widest text-5xl underline underline-offset-8 mt-8">Contact Us</h1>
                <div className="flex w-[600px] bg-customYellow bg-opacity-50 mt-6 rounded-lg p-10">
                        <form className="flex flex-col space-y-6 ">
                    <div className="flex space-x-16 w-full">
                              <div>
                                <label className="text-customWhite">First Name </label>
                                    <input
                                        type="text"
                                        onChange={changeHandler}
                                        value={formData.fname}
                                        id="fname"
                                        name="fname"
                                    className="text-black w-56 px-3 py-2 rounded-lg"
                                    />
                                    {errors.name && <h1 className="text-red-500 text-sm">{errors.name}</h1>}
                              </div>
                              <div >
                                <label className="text-customWhite">Last Name </label>
                                    <input
                                        type="text"
                                        onChange={changeHandler}
                                        value={formData.lname}
                                        id="lname"
                                        name="lname"
                                    className="text-black w-56 px-3 py-2 rounded-lg"
                                    />
                              </div>
                     </div>
                        <div className="flex  space-x-16 w-full ">
                                <div >
                                <label className="text-customWhite">Email ID</label>
                                    <input
                                        type="text"
                                        id="email"
                                        value={formData.email}
                                        name="email"
                                        onChange={changeHandler}
                                    className="text-black w-56 px-3 py-2 rounded-lg"
                                    />
                                    {errors.email && <h1 className="text-red-500 text-sm">{errors.email}</h1>}
                                </div>
                        <div >
                                <label className="text-customWhite">Contact Number</label>
                                    <input
                                        type="text"
                                        onChange={changeHandler}
                                        value={formData.contact}
                                        id="contact"
                                        name="contact"
                                    className="text-black w-56 px-3 py-2 rounded-lg"
                                    />
                                </div>
                            </div>
                    <div className="flex flex-wrap ">
                        <div>
                                <label className="text-customWhite" >
                                        Message
                                    </label>
                                    <textarea
                                    className="text-black w-[510px] rounded-lg"
                                        onChange={changeHandler}
                                        name="message"
                                        value={formData.message}
                                        cols="35"
                                        rows="5"
                                    ></textarea>
                                    {errors.message && <h1 className="text-red-500 text-sm">{errors.message}</h1>}
                                </div>
                            </div>
                        <button onClick={clickHandler}  className="text-customWhite text-xl w-[150px] p-2 mx-auto border">Submit</button>

                        </form>
                </div>
                
               
                
               </div>
           
        </>
    );
}
