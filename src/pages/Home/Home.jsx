import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import PopularSkills from "../../components/PopularSkills/PopularSkills";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

function Home(){
    return(
        <div className="min-h-screen bg-gradient-to-br from-[#081E4C] via-[#233E88] to-[#475793]">
            <Navbar/>
            <Hero/>
            <HowItWorks/>
            <PopularSkills/>
            <CTA/>
            <Footer/>
        </div>
    );
}
export default Home;