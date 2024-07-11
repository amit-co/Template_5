import { useNavigate } from 'react-router-dom';
import img from "/Menu/IMG_1.PNG?url";
import img1 from "/About/Frame 33.png";
import img2 from "/About/Frame 48.png";
import img3 from "/About/III CELEBRAORY.png";
import img4 from "/About/Frame 35.png";


export default function About() {
    const navigate = useNavigate();
    return (
        <>
            <div className="h-[100vh] bg-fixed bg-cover bg-center relative " style={{ backgroundImage: `url(${img})` }}>
                <div className="flex mb-64"></div>
                <div onClick={() => navigate('/caring')}>
                    <img src={img1} className="mx-auto" />
                </div>
                <div onClick={() => navigate('/sociable')}>
                    <img src={img2} className="mx-auto" />
                </div>
                <div onClick={() => navigate('/celebraory')}>
                    <img src={img3} className="mx-auto" />
                </div>
                <div onClick={() => navigate('/honest')}>
                    <img src={img4} className="mx-auto" />
                </div>
                
            </div>
        </>
    );
}
