import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react";

const BookNow = lazy(() => import('./Pages/BookNow'));
const PrivateDinning = lazy(() => import("./Pages/PrivatedDinning"));
const About = lazy(() => import("./Pages/About"));
const Gift = lazy(() => import("./Pages/GiftVoucher"));
const FndKitchen = lazy(() => import("./Pages/FndKitchen"));
const DineBar = lazy(() => import("./Pages/DineBar"));
const DineCafe = lazy(() => import("./Pages/DineCafe"));
const InRoomDining = lazy(() => import("./Pages/InRoomDining"));
const Contact = lazy(() => import("./Pages/Contact"));
const Team = lazy(() => import("./Pages/Team"));
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import { Navbar } from "./Components/Navbar";
import { Caring } from "./Components/Caring";
import { Sociable } from "./Components/Sociable";
import Food from "./Pages/Food";
import Drinks from "./Pages/Drinks";
import Menu from "./Pages/Menu";
import Venue from "./Pages/Venue";
import Refund from "./Pages/Refund";
import HomeContent from "./Pages/HomeContent";

function App() {
    const [modalContent, setModalContent] = useState(<HomeContent />);


    return (
        <div className="relative overflow-x-hidden">
            <BrowserRouter>
                 <Navbar onIconClick={(content) => setModalContent(content)} />
                <Routes>
                    <Route path="/" element={<Home modalContent={modalContent} />} />
                    <Route path="/homeContent" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<HomeContent />} /></Suspense>} />
                    <Route path="/bookNow" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<BookNow />} /></Suspense>} />
                    <Route path="/menu" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<Menu />} /></Suspense>} />
                    <Route path="/privateDinning" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<PrivateDinning />} /></Suspense>} />
                    <Route path="/venue" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<Venue />} /></Suspense>} />
                    <Route path="/venue/fndKitchen" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<FndKitchen />} /></Suspense>}/>
                    <Route path="/venue/dineBar" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<DineBar />} /></Suspense>} />
                    <Route path="/venue/dineCafe" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<DineCafe />} /></Suspense>} />
                    <Route path="/venue/ird" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<InRoomDining />} /></Suspense>} />
                    <Route path="/giftVoucher" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<Gift />} /></Suspense>} />
                    <Route path="/contact" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<Contact />} /></Suspense>} />
                    <Route path="/refund" element={<Suspense fallback={<h1>Loading...</h1>}><Refund /></Suspense>} />
                    <Route path="/gallery" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<Gallery />} /></Suspense>} />
                    <Route path="/gallery/food" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<Food />} /></Suspense>} />
                    <Route path="/gallery/drinks" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<Drinks />} /></Suspense>} />
                    <Route path="/gallery/teams" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<Team />} /></Suspense>} />
                    <Route path="/about" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<About />} /></Suspense>} />
                    <Route path="/caring" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<Caring />} /></Suspense>} />
                    <Route path="/sociable" element={<Suspense fallback={<h1>Loading...</h1>}><Home modalContent={<Sociable />} /></Suspense>} />
                </Routes>
                <SpeedInsights />
                <Analytics />
            </BrowserRouter>
        </div>
    );
}

export default App;
