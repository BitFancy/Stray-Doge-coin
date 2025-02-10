import Header from "../components/Header";
import About from "./About/page";
import Hero from "./Hero/page";
import HowToBuy from "./HowToBuy/page";
import Roadmap from "./Roadmap/page";
import Tokennomics from "./Tokenomics/page";

export default function Mainpage() {
    return (
        <div className="w-[100vw]">
            <Header />
            <Hero />
            <About />
            <HowToBuy />
            <Tokennomics />
            <Roadmap />
        </div>
    )
}