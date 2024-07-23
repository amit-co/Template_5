import { drinkImages } from "../utils/drinkImages";
import Template from '../Components/Template';


export default function drink() {
    return (
        <>
            <Template images={drinkImages} Heading={"Drinks"} />
            
        </>
    )
}
