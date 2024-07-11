import { galleryImages } from "../utils/galleryImages";
import Template from '../Components/Template';
import { Quote } from "../Components/Quote"

export default function gallery() {
    return (
        <>
            <div>
                <Template images={galleryImages} Heading={"GALLERY"} />
            </div>
            <Quote />
        </>
    );
}